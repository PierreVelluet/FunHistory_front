import React, { useState } from 'react'

import { ISingleOrMultipleChoicesAnswer } from 'typescript/interfaces/general_interfaces'
import animations from 'utils/animations'

import classes from './Answer.module.less'
import cx from 'classnames'

const Answer = (props: any) => {
    const {
        answer,
        selectAnswerHandler,
        timeout,
        isAnswerSelected,
    }: {
        answer: ISingleOrMultipleChoicesAnswer
        selectAnswerHandler: any
        timeout: boolean
        isAnswerSelected: boolean
    } = props

    // @ts-ignore
    const delay = animations?.[`delay${3 - answer?.answerNumber}`]

    return (
        <div className={cx({ [`${animations?.pulse}`]: timeout && answer?.correct })}>
            <div
                onClick={() => selectAnswerHandler(answer)}
                className={cx(
                    classes.answerContainer,
                    animations?.inDown,
                    delay,
                    { [animations?.attention]: timeout },
                    { [classes.selected]: isAnswerSelected },
                    timeout && answer?.correct
                        ? classes.correctAnswer
                        : timeout && !answer?.correct
                        ? classes.wrongAnswer
                        : ''
                )}
            >
                <div className={classes.answerNumber}>{answer?.answerNumber}</div>
                <div className={classes.answerText}>{answer?.answer}</div>
            </div>
        </div>
    )
}

export default Answer
