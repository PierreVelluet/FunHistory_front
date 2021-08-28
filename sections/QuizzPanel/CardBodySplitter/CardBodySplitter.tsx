import React from 'react'
import QuestionsSteps from '../QuestionsSteps/QuestionsSteps'

import classes from './CardBodySplitter.module.less'

const CardBodySplitter = ({ children, setup }: { children: React.ReactNode; setup: boolean }) => {
    return (
        <>
            <div className={classes.header}></div>
            <div className={classes.questionContainer}>{children}</div>
            <div className={classes.footer}>{setup ? <QuestionsSteps /> : null}</div>
        </>
    )
}

export default CardBodySplitter
