import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import { IActivity } from "typescript/interfaces/general_interfaces";

import ActivityCard from "./ActivityCard/ActivityCard";

import classes from "./ActivitiesPanel.module.less";
import cx from "classnames";

const dummyActivity = <div style={{ width: "200px", margin: "0px 25px" }} />;

const activities: IActivity[] = [
  {
    name: "History",
    backgroundImage: "/history.png",
    active: true,
    number: 1,
  },
  {
    name: "Geography",
    backgroundImage: "/geography.jpeg",
    active: true,
    number: 2,
  },
  {
    name: "Politic",
    backgroundImage: "/politic.png",
    active: false,
    number: 3,
  },
];

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

  const activityCards = activities?.map((el: object, index: number) => {
    return (
      <div
        onClick={!isOneActivitySelected ? () => selectActivityHandler(index): ()=> {}}
        className={cx(
          "animate__animated",
          {
            animate__fadeOut: fadeActivityCards,
          },
          {
            "animate__animated animate__heartBeat":
              activitySelected[index],
          }
        )}
      >
        <ActivityCard activity={el} />
      </div>
    );
  });

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

    setTimeout(function () {
      setFadeActivityCards(true);
    }, 2000);
  };

  useEffect(() => {
    let timeout = 500;
    if (isOneActivitySelected && !fadeActivityCards) {
      timeout = 0;
    }

    activityCards?.forEach((el: object, index: number) => {
      switch (index) {
        case 0:
          setTimeout(function () {
            setHistory(el);
          }, timeout * index);
          break;
        case 1:
          setTimeout(function () {
            setGeography(el);
          }, timeout * index);
          break;
        case 2:
          setTimeout(function () {
            setPolitic(el);
          }, timeout * index);
          break;
      }
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
