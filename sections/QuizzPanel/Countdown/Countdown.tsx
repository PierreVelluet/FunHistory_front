import React from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useGlobalContext } from "utils/globalState/store";

const Countdown = (props: any) => {
  const {
    running = false,
    timeoutHandler = () => {},
  }: { running: boolean; timeoutHandler: any } = props;
  const {
    store,
    setLoading,
    setQuestions,
    setCurrentQuestionNumber,
    setPanel,
  }: any = useGlobalContext();

  return (
    <CountdownCircleTimer
      isPlaying={running}
      duration={3 || store?.difficulty?.timeout}
      size={150}
      colors={[
        ["#40a9ff", 0.33],
        ["#045daf", 0.33],
        ["#02284b", 0.33],
      ]}
      trailColor="invisible"
      onComplete={() => timeoutHandler()}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default Countdown;
