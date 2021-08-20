import React, { useState, useEffect } from "react";

import Image from "next/image";

import { Card } from "antd";
import { animations } from "utils/animations";
import { useGlobalContext } from "utils/globalState/store";
import { getRandomQuestionsFromCountry } from "utils/functions/fetchFunctions";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import classes from "./QuizzPanel.module.less";
import cx from "classnames";
import { IAnswer, IQuestion } from "typescript/interfaces/general_interfaces";
import Answer from "./Answer/Answer";

const QuizzPanel = () => {
  const {
    store,
    setLoading,
    setQuestions,
    setCurrentQuestionNumber,
    setPanel,
  }: any = useGlobalContext();

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(
    null
  );

  const [timeout, setTimeout] = useState<boolean>(false);

  const innerStyle = {
    inDownContainer: [animations.inDown],
    cardContainer: [classes.card, { [animations.shake]: timeout }],
  };

  const timeoutHandler = () => {
    setTimeout(true);
  };

  useEffect(() => {
    setCurrentQuestion(store?.questions?.[store?.currentQuestionNumber]);
  }, [store?.currentQuestionNumber, store?.questions]);

  useEffect(() => {
    const params: object = {
      country: store?.country,
      category: store?.category,
      num: store?.numberOfQuestions,
    };

    getRandomQuestionsFromCountry(params).then((response) => {
      if (!response?.data?.success) return;

      setQuestions(response?.data?.results);
    });

    setLoading(false);
  }, []);

  console.log(store);

  return (
    <div className={cx(...innerStyle.inDownContainer)}>
      <Card
        bodyStyle={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
        className={cx(...innerStyle.cardContainer)}
      >
        <div className={cx(classes.mainContainer)}>
          <div className={classes.countdownContainer}>
            <CountdownCircleTimer
              isPlaying
              duration={5}
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
          </div>
          <div className={classes.answersContainer}>
            {currentQuestion?.answers?.map((el: IAnswer) => {
              return <Answer answer={el} key={el.answerNumber} />;
            })}
          </div>
          <div className={classes.questionContainer}>
            <div className={classes.question}>{currentQuestion?.question}</div>
          </div>
          <div className={classes.imgContainer}>
            <Image
              src={`/humanEvolution.png`}
              layout="fill"
              objectFit="contain"
              alt={`flag`}
              unoptimized={process.env.NODE_ENV === "development"}
              className={classes.flagImage}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizzPanel;
