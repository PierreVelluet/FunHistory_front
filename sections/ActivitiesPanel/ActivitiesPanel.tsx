import React, { useState, useEffect } from "react";

import ActivityCard from "./ActivityCard/ActivityCard";

import { IActivity } from "typescript/interfaces/general_interfaces";
import { activities } from "utils/activities";
import { useGlobalContext } from "utils/globalState/store";

import classes from "./ActivitiesPanel.module.less";

const ActivitiesPanel = () => {
  const [attention, setAttention] = useState<boolean[]>(
    Array(activities.length).fill(false)
  );
  const { store, setLoading, setSelectedCountry, setQuestions, setPanel }: any =
  useGlobalContext();

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

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false);
    }, 2500)
    
  }, [])

  return (
    <div className={classes.activitiesContainer}>
      {activities?.map((el: IActivity, index: number) => {
        return (
          <ActivityCard
            key={el?.name}
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
