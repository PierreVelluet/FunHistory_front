import React, { useState, useEffect } from "react";

import Image from "next/image";

import { Card, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { animations } from "utils/animations";
import { useGlobalContext } from "utils/globalState/store";
import { getRandomQuestionsFromCountry } from "utils/functions/fetchFunctions";

import Countdown from "./Countdown/Countdown";

import classes from "./QuizzPanel.module.less";
import cx from "classnames";
import { IQuestion } from "typescript/interfaces/general_interfaces";
import Answer from "./AnswerSide/Answer/Answer";
import AnswerSide from "./AnswerSide/AnswerSide";
import QuestionSide from "./QuestionSide/QuestionSide";

const QuizzPanel = () => {
  const {
    store,
    setLoading,
    setQuestions,
    setCurrentQuestionNumber,
    setPanel,
  }: any = useGlobalContext();

  const [running, setRunning] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(
    null
  );
  const [animationsState, setAnimationsState] = useState(false);

  const [timeout, setTimeout] = useState<boolean>(false);

  const innerStyle = {
    inDownContainer: [animations.inDown],
    cardContainer: [classes.card, { [animations.shake]: timeout }],
    countdownContainer: [
      classes.countdownContainer,
      { [animations.inDown]: animationsState },
    ],
    answersContainer: [classes.answersContainer],
  };

  const timeoutHandler = () => {
    setTimeout(true);
  };

  const startHandler = () => {
    setRunning((prevState) => !prevState);
  };

  useEffect(() => {
    setCurrentQuestion(store?.questions?.[store?.currentQuestionNumber]);
  }, [store?.currentQuestionNumber, store?.questions]);

  useEffect(() => {
    const params: object = {
      country: store?.country,
      theme: store?.theme,
      num: store?.numberOfQuestions,
    };

    getRandomQuestionsFromCountry(params).then((response) => {
      if (!response?.data?.success) return;

      setQuestions(response?.data?.results);
    });

    setLoading(false);
  }, []);

  console.log(animationsState)

  return (
    <div className={cx(...innerStyle.inDownContainer)}>
      <Card
        bodyStyle={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
        className={cx(...innerStyle.cardContainer)}
      >
        <div className={cx(classes.mainContainer)}>
          <div className={cx(...innerStyle?.countdownContainer)}>
            <Countdown running={running} timeoutHandler={timeoutHandler} />
          </div>
          <div className={cx(innerStyle?.answersContainer)}>
            <AnswerSide
              animationsState={animationsState}
              setAnimationsState={setAnimationsState}
              answers={currentQuestion?.answers}
              type={currentQuestion?.type}
            />
          </div>
          <div className={classes.questionContainer}>
            <QuestionSide
            setAnimationsState={setAnimationsState}
              running={running}
              question={currentQuestion?.question}
            />
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
          <Button
            icon={<FontAwesomeIcon icon={faPlay} className={classes.btnIcon} />}
            onClick={startHandler}
            className={classes.startBtn}
            type="primary"
            shape="round"
            size={"large"}
          >
            Start !
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuizzPanel;
