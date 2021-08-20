import React, { useState, useEffect } from "react";

import Image from "next/image";

import { Button } from "antd";
import { animations } from "utils/animations";
import { useGlobalContext } from "utils/globalState/store";
import { getRandomQuestionsFromCountry } from "utils/functions/fetchFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import classes from "./RulesPanel.module.less";
import cx from "classnames";
import { IAnswer, IQuestion } from "typescript/interfaces/general_interfaces";

const RulesPanel = () => {
  const {
    store,
    setLoading,
    setQuestions,
    setCurrentQuestionNumber,
    setPanel,
  }: any = useGlobalContext();

  const innerStyle = {
    mainContainer: [classes.mainContainer],
    title: [classes.title, animations.inDown],
    rules: [classes.rules, animations.inLeft, animations.delay2],
    startBtn: [classes.startBtn, animations.inUp, animations.delay4]
  };

  const startBtnHandler = () => {
      console.log('started')
  }

  useEffect(() => {}, []);

  console.log(store);

  return (
    <div className={cx(...innerStyle.mainContainer)}>
      <p className={cx(...innerStyle.title)}>Welcome stranger, dont be scared !</p>
      <div className={cx(...innerStyle.rules)}>
        <p
          className={classes.text}
        >{`You chose to compet in the ${store?.country}'s category, among the ${store?.activity}'s activity !`}</p>
        <p
          className={classes.text}
        >{`You will now have to answer a series of ${store?.numberOfQuestions} questions`}</p>
        <p
          className={classes.text}
        >{`If you have at least 70% of correct answers, you will be rewarded by beeing able to add your own question in the pool of that category, among this activity. Such an honor !`}</p>
      </div>
      <Button
          className={cx(...innerStyle.startBtn)}
          onClick={!store?.loading ? startBtnHandler : () => {}}
          icon={<FontAwesomeIcon icon={faScroll} className={classes.btnIcon} />}
          type="primary"
          size={"large"}
        >{`Test your knowledge !`}</Button>
    </div>
  );
};

export default RulesPanel;
