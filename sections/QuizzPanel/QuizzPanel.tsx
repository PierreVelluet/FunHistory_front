import React, { useState, useEffect } from "react";

import { Card } from "antd";
import { animations } from "utils/animations";
import { useGlobalContext } from "utils/globalState/store";
import { getRandomQuestionsFromCountry } from "utils/functions/fetchFunctions";

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
    <Card
      bodyStyle={{ margin: 0, width: "100%" }}
      className={cx(classes.card, animations.inDown)}
    >
      <div className={classes.mainContainer}>
        <div className={classes.answersContainer}>
          {currentQuestion?.answers?.map((el: IAnswer) => {
            return <Answer answer={el}/>;
          })}
        </div>
        <div className={classes.questionContainer}>
            {currentQuestion?.question}
        </div>
      </div>
    </Card>
  );
};

export default QuizzPanel;
