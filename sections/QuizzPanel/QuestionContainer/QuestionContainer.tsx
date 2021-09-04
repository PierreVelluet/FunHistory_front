import React from 'react'
import classes from './QuestionContainer.module.less'
import cx from 'classnames'
import { IQuestion } from 'typescript/interfaces/general_interfaces'
import SingleorMultipleChoicesQuestion from './SingleOrMultipleChoicesQuestion/SingleOrMultipleChoicesQuestion'
import QuestionsSteps from '../QuestionsSteps/QuestionsSteps'

const QuestionContainer = (props: any) => {
    const {
        question,
        setup,
    }: { question: IQuestion; setup: boolean;} = props

    const components: any = {
        SingleChoice: <SingleorMultipleChoicesQuestion {...props} />,
        undefined: <div></div>,
    }

    return (
        <>
            <div className={classes.header}></div>
            {components[question?.type]}
            <div className={classes.footer}>{setup ? <QuestionsSteps /> : null}</div>
        </>
    )
}

export default QuestionContainer
