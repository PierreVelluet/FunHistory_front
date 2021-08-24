import React from "react";

import { ISingleChoiceAnswer } from "typescript/interfaces/general_interfaces";

import classes from "./Answer.module.less";

const Answer = (props:any) => {
    const { answer }: {answer:ISingleChoiceAnswer} = props;
    return (
        <div className={classes.answerContainer}>
            <div className={classes.answerNumber}>{answer?.answerNumber}</div>
            <div className={classes.answerText}>{answer?.answer}</div>
        </div>
    )
}

export default Answer;