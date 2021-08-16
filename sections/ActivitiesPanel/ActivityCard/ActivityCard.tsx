import React, { useState } from "react";

import Image from "next/image";
import { Card } from "antd";

import { IActivity } from "typescript/interfaces/general_interfaces";

import classes from "./ActivityCard.module.less";
import cx from "classnames";

const ActivityCard = (props: any) => {
  const {
    activity,
    unselected,
    setUnselected,
  }: { activity: IActivity; unselected: boolean[]; setUnselected: any } =
    props;

  const [hoverEffect, setHoverEffect] = useState(false);

  const selectActivity = () => {
      
  };

  return (
    <div
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
      className={cx(
        classes.cardContainer,
        "animate__animated animate__bounceInDown",
      )}
    >
      <p className={classes.cardTitle}> {activity?.name}</p>
      <Card
        onClick={selectActivity}
        className={cx(classes.activityCard, "animate__animated", {
          // animate__pulse: hoverEffect,
        })}
      >
        <Image
          src={activity?.backgroundImage ?? "/"}
          layout="fill"
          objectFit="cover"
          alt="profile picture"
          unoptimized={process.env.NODE_ENV === "development"}
          className={classes.avatarImage}
        />
      </Card>
    </div>
  );
};

export default ActivityCard;
