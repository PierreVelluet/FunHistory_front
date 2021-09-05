import React from 'react'

import SingleorMultipleChoicesQuestion from './SingleOrMultipleChoicesQuestion/SingleOrMultipleChoicesQuestion'
import QuestionsSteps from '../QuestionsSteps/QuestionsSteps'

import { IQuestion } from 'typescript/interfaces/general_interfaces'

import { useRecoilState } from 'recoil';
import { loadingState } from 'recoil/loadingState';
import { quizzStateSelector } from 'recoil/quizzState';
import { settingsStateSelector } from 'recoil/settingsState';

import classes from './QuestionContainer.module.less'

const QuestionContainer = (props: any) => {
    const {
        setup,
    }: { setup: boolean;} = props

    const [quizzState, setQuizzState] = useRecoilState<any>(quizzStateSelector);

    const components: any = {
        SingleChoice: <SingleorMultipleChoicesQuestion {...props} />,
        undefined: <div></div>,
    }

    console.log(quizzState?.currentQuestion?.type)

    return (
        <>
            <div className={classes.header}></div>
            {components[quizzState?.currentQuestion?.type]}
            <div className={classes.footer}>{setup ? <QuestionsSteps /> : null}</div>
        </>
    )
}

export default QuestionContainer
