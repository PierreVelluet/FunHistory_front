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
    const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<ISingleOrMultipleChoicesAnswer | any>([]);

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
        const rightAnswer: any = currentQuestion?.answers?.filter((el: ISingleOrMultipleChoicesAnswer) => {
            if (el?.correct) return el;
        })[0];

        console.log(selectedAnswers, rightAnswer);

        const success = selectedAnswers?.answerNumber === rightAnswer?.answerNumber ? true : false;

        console.log(success);

        // const newQuestionsState = store?.questionsState?.map((el: IQuestionState) => {
        //     if (currentQuestion?.type === 'SingleChoice') {
        //         if (success) {
        //           console.log('passed')
        //             return el?.number === rightAnswer?.answerNumber
        //                 ? {
        //                       ...el,
        //                       state: 'success',
        //                   }
        //                 : el
        //         }
        //     }
        //     // if (selectedAnswers?.answerNumber)
        // })
        // setQuestionsState(newQuestionsState)
    };

    useEffect(() => {
        console.log('selectedAnswers are', selectedAnswers);
    }, [selectedAnswers]);

    useEffect(() => {
        setCurrentQuestion(quizzState?.questions?.[quizzState?.currentQuestionNumber]);
    }, [quizzState?.currentQuestionNumber, quizzState?.questions]);

    useEffect(() => {
        const params: object = {
            country: settings?.country,
            theme: settings?.theme,
            num: settings?.difficulty?.numberOfQuestions,
        };

        getRandomQuestionsFromCountry(params)
            .then((response) => {
                if (!response?.data?.success) return;

                setQuizzState({ questions: response?.data?.results });
                const newQuestionsState = initializeQuestionsState(response?.data?.results);
                setQuizzState(newQuestionsState);
            })
            .then(() => setSetup((prevState) => !prevState));

        setLoading(false);
    }, []);

    return (
        <div className={cx(...innerStyle.inDownContainer)}>
            <Card bodyStyle={innerStyle?.cardBody} className={classes.card}>
                <QuestionContainer
                    timeout={timeout}
                    setStartTimer={setStartTimer}
                    setup={setup}
                    question={currentQuestion}
                    setSelectedAnswers={setSelectedAnswers}
                />
                <Countdown setup={setup} timeout={timeout} startTimer={startTimer} timeoutHandler={timeoutHandler} />
            </Card>
        </div>
    );
};

export default QuizzPanel;
