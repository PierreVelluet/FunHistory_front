import React from 'react'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useGlobalContext } from 'utils/globalState/store'

import animations from 'utils/animations'

import classes from './Countdown.module.less'
import cx from 'classnames'

const Countdown = (props: any) => {
    const {
        setup,
        startTimer,
        timeoutHandler,
        timeout,
    }: { setup: boolean; startTimer: boolean; timeoutHandler: any; timeout: any } = props
    const { store }: any = useGlobalContext()

    const innerStyle = {
        countdownContainer: [classes.countdown, animations?.fadeIn, animations?.delay3],
        countdownAnimationContainer: [{ [animations.attention]: timeout }],
    }

    const renderTime = ({ remainingTime }: { remainingTime: number }) => {
        if (remainingTime === 0) {
            return <div className={cx(classes.timerText, classes.timeoutText)}>Time out!</div>
        }

        return (
            <div className={classes.timerText}>
                <div>Remaining</div>
                <div style={{ fontSize: '25px' }}>{remainingTime}</div>
                <div>seconds</div>
            </div>
        )
    }

    return (
        setup ?
        <div className={cx(...innerStyle?.countdownContainer)}>
            <div className={cx(...innerStyle?.countdownAnimationContainer)}>
                <CountdownCircleTimer
                    isPlaying={startTimer}
                    duration={1 || store?.difficulty?.timeout}
                    size={150}
                    colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                    ]}
                    trailColor="darkgray"
                    strokeWidth={9}
                    onComplete={() => timeoutHandler()}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
        </div>
        :
        null
    )
}

export default Countdown
