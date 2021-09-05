import React, { useState, useEffect } from 'react';

import { Card, Button } from 'antd';

import animations from 'utils/animations';
import { getRandomQuestionsFromCountry } from 'utils/functions/fetchFunctions';

import Countdown from './Countdown/Countdown';
import { IQuestion, IQuestionState, ISingleOrMultipleChoicesAnswer } from 'typescript/interfaces/general_interfaces';
import { initializeQuestionsState } from 'utils/functions/functions';

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { quizzStateSelector } from 'recoil/quizzState';
import { settingsStateSelector } from 'recoil/settingsState';

import classes from './QuizzPanel.module.less';
import cx from 'classnames';
import QuestionContainer from './QuestionContainer/QuestionContainer';

const QuizzPanel = () => {
    const [loading, setLoading] = useRecoilState<boolean>(loadingState);
    const [settings, setSettings] = useRecoilState<any>(settingsStateSelector);
    const [quizzState, setQuizzState] = useRecoilState<any>(quizzStateSelector);

    const [setup, setSetup] = useState<boolean>(false);
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [timeout, setTimeout] = useState<boolean>(false);

    const innerStyle = {
        inDownContainer: [animations.inDown],
        cardBody: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        countdownContainer: [classes.countdownContainer, animations?.fadeIn, animations?.delay3],
        countdownAnimationContainer: [{ [animations.attention]: timeout }],
        answersContainer: [classes.answersContainer],
    };

    const timeoutHandler = () => {
        setTimeout(true);
        resultHandler();
    };

    const resultHandler = () => {
        const rightAnswers: ISingleOrMultipleChoicesAnswer[] = quizzState?.currentQuestion?.answers?.filter(
            (el: ISingleOrMultipleChoicesAnswer) => {
                if (el?.correct) return el;
            }
        )[0];

        const selectedAnswers: ISingleOrMultipleChoicesAnswer[] = quizzState?.selectedAnswers?.answers?.filter(
            (el: ISingleOrMultipleChoicesAnswer) => {
                if (el?.correct) return el;
            }
        );

        const compareQuestionsAndAnswers = (
            rightAnswers: ISingleOrMultipleChoicesAnswer[],
            selectedAnswers: ISingleOrMultipleChoicesAnswer[]
        ): boolean => {
            selectedAnswers?.forEach((el: ISingleOrMultipleChoicesAnswer, index: number) => {
                if (!rightAnswers?.some((rightAnswer) => rightAnswer === el)) return false;
            });

            return true;
        };

        const isSuccess: boolean = compareQuestionsAndAnswers(rightAnswers, selectedAnswers);

        console.log("isSuccess is:", isSuccess)

        // const success = quizzState?.selectedAnswers?.answerNumber === rightAnswers?.answerNumber ? true : false;

        // const newQuestionsState = quizzState?.questionsState?.map((el: IQuestionState) => {
        //     if (quizzState?.currentQuestion?.type === 'SingleChoice') {
        //         if (success) {
        //             console.log('passed');
        //             return el?.number === rightAnswers?.answerNumber
        //                 ? {
        //                       ...el,
        //                       state: 'success',
        //                   }
        //                 : el;
        //         }
        //     }
        //     // if (quizzState?.selectedAnswers?.answerNumber)
        // });
        // setQuizzState({ questionsState: newQuestionsState });
    };

    useEffect(() => {
        console.log('selectedAnswers are', quizzState?.selectedAnswers);
    }, [quizzState?.selectedAnswers]);

    useEffect(() => {
        setQuizzState({ currentQuestion: quizzState?.questions?.[quizzState?.currentQuestionNumber] });
    }, [quizzState?.currentQuestionNumber, quizzState?.questions]);

    useEffect(() => {
        const params: object = {
            country: settings?.country,
            theme: settings?.theme,
            num: 10,
        };

        getRandomQuestionsFromCountry(params)
            .then((response) => {
                if (!response?.data?.success) return;

                setQuizzState({ questions: response?.data?.results });
                const newQuestionsState = initializeQuestionsState(response?.data?.results);
                setQuizzState({ questionsState: newQuestionsState });
            })
            .then(() => setSetup((prevState) => !prevState));

        setLoading(false);
    }, []);

    console.log('quizzState is:', quizzState);

    return (
        <div className={cx(...innerStyle.inDownContainer)}>
            <Card bodyStyle={innerStyle?.cardBody} className={classes.card}>
                <QuestionContainer timeout={timeout} setStartTimer={setStartTimer} setup={setup} />
                <Countdown setup={setup} timeout={timeout} startTimer={startTimer} timeoutHandler={timeoutHandler} />
            </Card>
        </div>
    );
};

export default QuizzPanel;
