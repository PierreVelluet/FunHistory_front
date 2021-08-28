import React, { useState, useEffect } from 'react'

import { Card, Button } from 'antd'

import animations from 'utils/animations'
import { useGlobalContext } from 'utils/globalState/store'
import { getRandomQuestionsFromCountry } from 'utils/functions/fetchFunctions'

import Countdown from './Countdown/Countdown'
import CardBodySplitter from './CardBodySplitter/CardBodySplitter'
import { IQuestion } from 'typescript/interfaces/general_interfaces'

import classes from './QuizzPanel.module.less'
import cx from 'classnames'

const QuizzPanel = () => {
    const { store, setLoading, setQuestions, setCurrentQuestionNumber }: any = useGlobalContext()

    const [setup, setSetup] = useState<boolean>(false)
    const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null)

    const [startTimer, setStartTimer] = useState<boolean>(false)
    const [timeout, setTimeout] = useState<boolean>(false)

    const innerStyle = {
        inDownContainer: [animations.inDown],
        cardBody: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        countdownContainer: [classes.countdownContainer, animations?.fadeIn, animations?.delay3],
        countdownAnimationContainer: [{ [animations.attention]: timeout }],
        answersContainer: [classes.answersContainer],
    }

    const timeoutHandler = () => {
        setTimeout(true)
    }

    const setupHandler = () => {
        setSetup((prevState) => !prevState)
    }

    useEffect(() => {
        setCurrentQuestion(store?.questions?.[store?.currentQuestionNumber])
    }, [store?.currentQuestionNumber, store?.questions])

    useEffect(() => {
        const params: object = {
            country: store?.country,
            theme: store?.theme,
            num: store?.difficulty?.numberOfQuestions,
        }

        getRandomQuestionsFromCountry(params).then((response) => {
            if (!response?.data?.success) return

            setQuestions(response?.data?.results)
        })

        setLoading(false)
    }, [])

    return (
        <div className={cx(...innerStyle.inDownContainer)}>
            <Card bodyStyle={innerStyle?.cardBody} className={classes.card}>
                <CardBodySplitter setup={setup}>
                <p>THis will be the question component</p>
                </CardBodySplitter>
                {setup ? (
                    <Countdown innerStyle={innerStyle} startTimer={startTimer} timeoutHandler={timeoutHandler} />
                ) : (
                    false
                )}
                <Button
                    onClick={setupHandler}
                    className={cx(classes.startBtn, { [animations?.fadeOut]: setup })}
                    type="primary"
                    shape="round"
                    size={'large'}
                >
                    Start !
                </Button>
            </Card>
        </div>
    )
}

export default QuizzPanel
