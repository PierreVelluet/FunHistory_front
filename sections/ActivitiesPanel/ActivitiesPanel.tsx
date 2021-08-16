import React, { useState, useEffect } from "react";

import { IActivity } from "typescript/interfaces/general_interfaces";

import ActivityCard from "./ActivityCard/ActivityCard";
import { executeAfterDelay } from "utils/functions";

import { allActivities } from "utils/hardData";

import classes from "./ActivitiesPanel.module.less";
import cx from "classnames";

const dummyActivity = <div className={classes.dummyActivity} />;

const ActivitiesPanel = () => {
  const [history, setHistory] = useState<object>(dummyActivity);
  const [geography, setGeography] = useState<object>(dummyActivity);
  const [politic, setPolitic] = useState<object>(dummyActivity);
  const [hearthbeat, setHearthbeat] = useState<boolean>(false);
  const [fadeCards, setFadeCards] = useState<boolean>(false);

  const activities = allActivities?.map((el: IActivity) => {
    const newActivity: IActivity = el;
    switch (el?.name) {
      case "History":
        newActivity.setter = (value: any) => setHistory(value);
        break;
      case "Geography":
        newActivity.setter = (value: any) => setGeography(value);
        break;
      case "Politic":
        newActivity.setter = (value: any) => setPolitic(value);
        break;
    }
    return newActivity;
  });

  const selectActivityHandler = (selectionnedActivity: number) => {
    executeAfterDelay(() => setHearthbeat(true), 0);
    executeAfterDelay(() => setFadeCards(true), 2000);
  };

  useEffect(() => {
    
    activities?.map((el: IActivity, index: number) => {
      executeAfterDelay(function () {
        console.log("SETTED")
        el?.setter(
          <ActivityCard
            activity={el}
            fadeCards={fadeCards}
            selectActivityHandler={selectActivityHandler}
            hearthbeat={hearthbeat}
          />
        );
      }, 500 * index);
    });
  }, [hearthbeat, fadeCards]);

  return (
    <div className={classes.activitiesContainer}>
      {history}
      {geography}
      {politic}
    </div>
  );
};

export default ActivitiesPanel;
