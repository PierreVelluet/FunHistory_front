import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import { IActivity } from "typescript/interfaces/general_interfaces";

import ActivityCard from "./ActivityCard/ActivityCard";

import classes from "./ActivitiesPanel.module.less";
import cx from "classnames";

const dummyActivity = <div style={{ width: "200px", margin: "0px 25px" }} />;

function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

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
  const [history, setHistory] = useState(dummyActivity);
  const [geography, setGeography] = useState(dummyActivity);
  const [politic, setPolitic] = useState(dummyActivity);
  const [unselected, setUnselected] = useState([false, false, false]);

  const selectActivityHandler = (activity: number) => {
    console.log("clicked");
    const newUnselected = unselected?.map((el: boolean, index: number) => {
      if (index == activity) {
        return el;
      } else {
        return !el;
      }
    });
    setUnselected(newUnselected);
  };

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    let timeout = 0;
    if (firstUpdate.current) {
      firstUpdate.current = false;
      timeout = 500;
    }
    timeout = 500;

    setTimeout(function () {
      setHistory(
        <div
          onClick={() => selectActivityHandler(0)}
          className={cx("animate__animated", {
            animate__fadeOut: unselected[0],
          })}
        >
          <ActivityCard activity={activities?.[0]} unselected={unselected[0]} />
        </div>
      );
      console.log("yes");
    }, timeout);

    setTimeout(function () {
      {
        setGeography(
          <div
            onClick={() => selectActivityHandler(1)}
            className={cx("animate__animated", {
              animate__fadeOut: unselected[1],
            })}
          >
            <ActivityCard
              activity={activities?.[1]}
              unselected={unselected[1]}
            />
          </div>
        );
      }
    }, timeout * 2);

    setTimeout(function () {
      setPolitic(
        <div
          onClick={() => selectActivityHandler(2)}
          className={cx("animate__animated", {
            animate__fadeOut: unselected[2],
          })}
        >
          <ActivityCard activity={activities?.[2]} unselected={unselected[2]} />
        </div>
      );
    }, timeout * 3);
  }, [unselected]);

  console.log(unselected);

  return (
    <div className={classes.activitiesContainer}>
      {history}
      {geography}
      {politic}
    </div>
  );
};

export default ActivitiesPanel;
