import React from "react";

import Typist from "react-typist";

import classes from "./QuestionSide.module.less";

const QuestionSide = (props:any) => {
    const {running, question, setAnimationsState} : {running: boolean, question: string, setAnimationsState:any} = props;

    return (
        <Typist cursor={{ show: false }} onTypingDone={() => setAnimationsState(true)} key={running}>
          <div className={classes.question}>{question ?? ""}</div>
        </Typist>
    )
}

export default QuestionSide;