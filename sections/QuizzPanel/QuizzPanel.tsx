import React from "react";

import { Card } from "antd";
import { animations } from "utils/animations";

import classes from "./QuizzPanel.module.less";
import cx from "classnames";

const QuizzPanel = () => {
  return (
    <Card
      bodyStyle={{ padding: "0", width: "100%", display: "flex" }}
      className={cx(classes.card, animations.inDown)}
    >
      Hello
    </Card>
  );
};

export default QuizzPanel;
