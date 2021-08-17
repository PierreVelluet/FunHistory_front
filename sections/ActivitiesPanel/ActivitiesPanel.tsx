import React, { useState, useEffect } from "react";

import { IActivity } from "typescript/interfaces/general_interfaces";

import ActivityCard from "./ActivityCard/ActivityCard";

import { allActivities } from "utils/hardData";

import classes from "./ActivitiesPanel.module.less";
import cx from "classnames";

const ActivitiesPanel = () => {
  const [attention, setAttention] = useState<boolean[]>(
    Array(allActivities.length).fill(false)
  );
  const [out, setOut] = useState<boolean>(false);

  const selectActivityHandler = (selectionnedActivity: number) => {
    const newAttention = attention?.map((el: boolean, index: number) => {
      return index === selectionnedActivity ? !el : el;
    });
    setAttention(newAttention);
    setOut(true);
  };

  return (
    <div className={classes.activitiesContainer}>
      {allActivities?.map((el: IActivity, index: number) => {
        return (
          <ActivityCard
            activity={el}
            out={out}
            selectActivityHandler={selectActivityHandler}
            attention={attention[index]}
          />
        );
      })}
    </div>
  );
};

export default ActivitiesPanel;
