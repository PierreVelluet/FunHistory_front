import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import { IActivity } from "typescript/interfaces/general_interfaces";

import ActivityCard from "./ActivityCard/ActivityCard";
import { executeAfterDelay } from "utils/functions";

import { allActivities } from "utils/hardData";

import classes from "./ActivitiesPanel.module.less";
import cx from "classnames";

const dummyActivity = <div style={{ width: "200px", margin: "0px 25px" }} />;

const ActivitiesPanel = () => {
  const [history, setHistory] = useState<object>(dummyActivity);
  const [geography, setGeography] = useState<object>(dummyActivity);
  const [politic, setPolitic] = useState<object>(dummyActivity);
  const [activitySelected, setActivitySelected] = useState([
    false,
    false,
    false,
  ]);
  const [fadeActivityCards, setFadeActivityCards] = useState(false);
  const isOneActivitySelected = activitySelected?.includes(true);

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

  const activityCard = (el: IActivity, index: number) => {
    return (
      <div
        onClick={
          !isOneActivitySelected ? () => selectActivityHandler(index) : () => {}
        }
        className={cx(
          "animate__animated",
          {
            animate__fadeOut: fadeActivityCards,
          },
          {
            "animate__animated animate__heartBeat": activitySelected[index],
          }
        )}
      >
        <ActivityCard activity={el} />
      </div>
    );
  };

  const selectActivityHandler = (selectionnedActivity: number) => {
    const newActivitySelectionning = activitySelected?.map(
      (el: boolean, index: number) => {
        if (index === selectionnedActivity) {
          return !el;
        } else {
          return el;
        }
      }
    );
    setActivitySelected(newActivitySelectionning);

    executeAfterDelay(setFadeActivityCards(true), 2000);
  };

  useEffect(() => {
    let timeout = 500;
    // if (isOneActivitySelected && !fadeActivityCards) {
    //   timeout = 0;
    // }

    activities?.map((el: IActivity, index: number) => {
      executeAfterDelay(function () {
        el?.setter(activityCard(el, index));
      }, timeout * index);
    });
  }, [activitySelected, fadeActivityCards]);

  return (
    <div className={classes.activitiesContainer}>
      {history}
      {geography}
      {politic}
    </div>
  );
};

export default ActivitiesPanel;
