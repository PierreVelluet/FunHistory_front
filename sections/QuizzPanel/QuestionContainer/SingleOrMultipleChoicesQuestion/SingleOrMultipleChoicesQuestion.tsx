import React, { useState, useEffect } from 'react'
import { useGlobalContext } from 'utils/globalState/store'
import classes from './SingleOrMultipleChoicesQuestion.module.less'
import cx from 'classnames'
import { IQuestion } from 'typescript/interfaces/general_interfaces'
import QuestionSide from './QuestionSide/QuestionSide'
import AnswerSide from './AnswerSide/AnswerSide'

const SingleOrMultipleChoicesQuestion = (props: any) => {
    const { question, setup, setStartTimer, setSelectedAnswers,timeout }: { question: IQuestion; setup: boolean; setStartTimer:any, setSelectedAnswers:any, timeout:boolean } = props
    const { store, setLoading, setQuestions, setCurrentQuestionNumber }: any = useGlobalContext()

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
                {answersIn ? <AnswerSide timeout={timeout} setSelectedAnswers={setSelectedAnswers} setStartTimer={setStartTimer} answers={question?.answers} setup={setup} type={question?.type} /> : null}
            </div>
            <div className={classes.questionSide}>
                {questionIn ? <QuestionSide setAnswersIn={setAnswersIn} question={question?.question} /> : null}
            </div>
        </div>
    )
}

export default SingleOrMultipleChoicesQuestion
