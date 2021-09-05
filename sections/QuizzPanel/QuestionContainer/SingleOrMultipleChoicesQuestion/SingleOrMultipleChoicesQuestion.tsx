import React, { useState, useEffect } from 'react'
import classes from './SingleOrMultipleChoicesQuestion.module.less'
import cx from 'classnames'
import { IQuestion } from 'typescript/interfaces/general_interfaces'
import QuestionSide from './QuestionSide/QuestionSide'
import AnswerSide from './AnswerSide/AnswerSide'

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { quizzStateSelector } from 'recoil/quizzState';
import { settingsStateSelector } from 'recoil/settingsState';


const SingleOrMultipleChoicesQuestion = (props: any) => {
    const { setup, setStartTimer, timeout }: { setup: boolean; setStartTimer:any, timeout:boolean } = props

    const [quizzState, setQuizzState] = useRecoilState<any>(quizzStateSelector);
    const [answersIn, setAnswersIn] = useState<boolean>(false)
    const [questionIn, setQuestionIn] = useState<boolean>(false)

    useEffect(() => {
       setTimeout(() => {
        setQuestionIn(true)
       }, 3000);
    }, [])

    return (
        <div className={classes.mainContainer}>
            <div className={classes.answersSide}>
                {answersIn ? <AnswerSide timeout={timeout} setStartTimer={setStartTimer} setup={setup} /> : null}
            </div>
            <div className={classes.questionSide}>
                {questionIn ? <QuestionSide setAnswersIn={setAnswersIn} /> : null}
            </div>
        </div>
    )
}

export default SingleOrMultipleChoicesQuestion
