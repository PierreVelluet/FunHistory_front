import React from 'react'

import Typist from 'react-typist'

import classes from './QuestionSide.module.less'
import cx from 'classnames'

const QuestionSide = (props: any) => {
    const { question, setAnswersIn }: { question: string; setAnswersIn: any } = props

    return (
        <Typist cursor={{ show: false }} onTypingDone={() => setAnswersIn(true)}>
            <div className={cx(classes.question)}>{question ?? ''}</div>
        </Typist>
    )
}

export default QuestionSide
