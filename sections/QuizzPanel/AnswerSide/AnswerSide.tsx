import React from "react";

import { ISingleChoiceAnswer } from "typescript/interfaces/general_interfaces";
import Answer from "./Answer/Answer";

import { animations } from "utils/animations";
import cx from "classnames";

const AnswerSide = (props: any) => {
  const {
    answers = [],
    type = "ISingleChoiceAnswer",
    animationsState = false,
    setAnimationsState
  }: { answers: ISingleChoiceAnswer[]; type: string, animationsState: boolean, setAnimationsState: any } = props;

  const questionTypeAnswer = (questionType: string) => {
    switch (questionType) {
      case "ISingleChoiceAnswer":
        return answers?.map((el: ISingleChoiceAnswer) => {
          return<div ><div className={cx( { [animations.inDown]: animationsState })}><Answer  answer={el} key={el.answerNumber} /></div></div>;
        });
        break;
      default:
    }
  };

  return <>{questionTypeAnswer(type)}</>;
};

export default AnswerSide;
