import React, { useState } from "react";

import { IActivity } from "typescript/interfaces/general_interfaces";

import ActivityCard from "./ActivityCard/ActivityCard";

import { activities } from "utils/activities";

import classes from "./ActivitiesPanel.module.less";

const ActivitiesPanel = () => {
  const [attention, setAttention] = useState<boolean[]>(
    Array(activities.length).fill(false)
  );
  const [out, setOut] = useState<boolean[]>( Array(activities.length).fill(false));

  const selectActivityHandler = (selectionnedActivity: number) => {
    const newAttention = attention?.map((el: boolean, index: number) => {
      return index === selectionnedActivity ? !el : el;
    });
    const newOut = out?.map((el: boolean, index: number) => {
      return index === selectionnedActivity ? el : !el;
    });
    setAttention(newAttention);
    setOut(newOut);
  };

  return (
    <div className={classes.activitiesContainer}>
      {activities?.map((el: IActivity, index: number) => {
        return (
          <ActivityCard
            activity={el}
            selectActivityHandler={selectActivityHandler}
            out={out[index]}
            attention={attention[index]}
          />
        );
      })}
    </div>
  );
};

export default ActivitiesPanel;
