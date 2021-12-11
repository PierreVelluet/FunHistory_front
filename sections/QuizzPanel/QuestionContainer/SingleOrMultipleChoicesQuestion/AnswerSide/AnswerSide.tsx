import React, { useState, useEffect } from 'react';

import { ISingleOrMultipleChoicesAnswer } from 'typescript/interfaces/general_interfaces';
import Answer from './Answer/Answer';
import animations from 'utils/animations';

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { quizzStateSelector } from 'recoil/quizzState';
import { settingsStateSelector } from 'recoil/settingsState';

import cx from 'classnames';

const AnswerSide = (props: any) => {
    const {
        setStartTimer,
        timeout,
    }: {
        setStartTimer: any;
        timeout: boolean;
    } = props;

    const [quizzState, setQuizzState] = useRecoilState<any>(quizzStateSelector);
    const [isAnswersSelected, setIsAnswersSelected] = useState<boolean[]>(
        Array(quizzState?.currentQuestion?.answers?.length)?.fill(false)
    );

    const components: any = {
        SingleChoice: <Answer />,
        MultipleChoices: <Answer />,
        undefined: <div></div>,
    };

    const selectedAnswerManager = (answer: ISingleOrMultipleChoicesAnswer, type: string): boolean[] => {
        return isAnswersSelected?.map((el: boolean, index: number) => {
            if (type === 'SingleChoice') {
                return answer?.answerNumber === index + 1 ? true : false;
            } else {
                return answer?.answerNumber === index + 1 ? true : el;
            }
        });
    };

    const selectAnswerHandler = (answer: ISingleOrMultipleChoicesAnswer) => {
        const newIsAnswersSelected = selectedAnswerManager(answer, quizzState?.currentQuestion?.type);
        setIsAnswersSelected(newIsAnswersSelected);
    };

    useEffect(() => {
        if (!timeout) return;

        const newSelectedAnswer = isAnswersSelected?.map((el: boolean, index: number) => {
            if (el) {
                return quizzState?.currentQuestion?.answers[index];
            }
        });

        // console.log("newselectedanswer are :",newSelectedAnswer);

        setQuizzState({ selectedAnswers: newSelectedAnswer });
    }, [timeout]);

    useEffect(() => {
        setTimeout(() => {
            setStartTimer(true);
        }, 3000);
    }, []);

    return (
        <>
            {quizzState?.currentQuestion?.answers?.map((answer: any, index: number) => {
                const isAnswerSelected = isAnswersSelected[index];
                return (
                    <div key={answer?._id}>
                        {React.cloneElement(components[quizzState?.currentQuestion?.type], {
                            answer,
                            selectAnswerHandler,
                            timeout,
                            isAnswerSelected,
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default AnswerSide;
