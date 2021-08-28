import React, { useState, useEffect } from 'react'

import Steps from 'rc-steps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faQuestion, faExclamation } from '@fortawesome/free-solid-svg-icons'

import { useGlobalContext } from 'utils/globalState/store'
import { IQuestion, IQuestionState } from 'typescript/interfaces/general_interfaces'
import animations from 'utils/animations'

import 'rc-steps/assets/index.css'
import classes from './QuestionsSteps.module.less'
import cx from 'classnames'

const QuestionsSteps = () => {
    const { store }: any = useGlobalContext()

    const [questionsState, setQuestionsState] = useState<IQuestionState[] | []>([{ number: 1, state: 'current' }])

    const icons = {
        success: faLightbulb,
        fail: faLightbulb,
        upcoming: faQuestion,
        current: faExclamation,
    }

    useEffect(() => {
        const newQuestionsState = store?.questions?.map((el: IQuestion, index: number) => {
            // return {
            //     number: index + 1,
            //     state: index === 0 ? 'current' : 'upcoming',
            // }
            return {
                number: index + 1,
                state: index === 2 ? 'current' : index === 0 ? 'success' : index === 1 ? 'fail' : 'upcoming',
            }
        })
        setQuestionsState(newQuestionsState)
    }, [store?.questions])

    return (
        <Steps current={2}>
            {questionsState?.map((el: IQuestionState) => {
                return (
                    <Steps.Step
                        className={cx(animations?.fadeIn, animations?.delay2)}
                        key={el?.number}
                        title=""
                        icon={
                            <FontAwesomeIcon icon={icons[el?.state]} className={cx(classes[el?.state], classes.icon)} />
                        }
                    />
                )
            })}
        </Steps>
    )
}

export default QuestionsSteps
