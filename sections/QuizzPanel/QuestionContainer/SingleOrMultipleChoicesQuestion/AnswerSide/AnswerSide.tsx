import React, { useState, useEffect } from 'react'

import { ISingleOrMultipleChoicesAnswer } from 'typescript/interfaces/general_interfaces'
import Answer from './Answer/Answer'
import animations from 'utils/animations';

import cx from "classnames";

const AnswerSide = (props: any) => {
    const {
        answers,
        type,
        setStartTimer,
        setSelectedAnswers,
        timeout
    }: {
        answers: ISingleOrMultipleChoicesAnswer[]
        type: string
        setStartTimer: any
        setSelectedAnswers: any
        timeout: boolean
    } = props

    const [isAnswersSelected, setIsAnswersSelected] = useState<boolean[]>(Array(answers?.length)?.fill(false))

    const components: any = {
        SingleChoice: <Answer />,
        MultipleChoices: <Answer />,
        undefined: <div></div>,
    }

    const selectedAnswerManager = (answer:ISingleOrMultipleChoicesAnswer, type: string ): boolean[] => {
        return isAnswersSelected?.map((el:boolean, index:number) => {
            if (type === "SingleChoice") {
                return answer?.answerNumber === (index + 1) ? true : false;
            } else {
                return answer?.answerNumber === (index + 1) ? true : el;
            }
        })
    }

    const selectAnswerHandler = (answer: ISingleOrMultipleChoicesAnswer) => {
        const newIsAnswersSelected = selectedAnswerManager(answer, type);
        setIsAnswersSelected(newIsAnswersSelected);
    }

    useEffect(() => {
       if (!timeout) return 

       const validatedAnswer = isAnswersSelected?.map((el:boolean, index:number)=> {
           if (el) {
            return answers[index]
           }
       })
       
       setSelectedAnswers(validatedAnswer)
    }, [timeout])

    useEffect(() => {
        setTimeout(() => {
            setStartTimer(true)
        }, 3000)
    }, [])

    return (
        <>
            {answers?.map((answer: any, index: number) => {
                const isAnswerSelected = isAnswersSelected[index]
                return <div key={answer?._id}>{React.cloneElement(components[type], { answer, selectAnswerHandler, timeout, isAnswerSelected})}</div>
            })}
        </>
    )
}

export default AnswerSide
