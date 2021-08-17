import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Card } from "antd";

import { IActivity } from "typescript/interfaces/general_interfaces";

import { animations } from "utils/hardData";

import classes from "./ActivityCard.module.less";
import cx from "classnames";

const ActivityCard = (props: any) => {
  const {
    activity,
    selectActivityHandler,
    out,
    attention,
  }: {
    activity: IActivity;
    out: boolean;
    selectActivityHandler: any;
    attention: boolean;
  } = props;

  const activityNumber = activity.number;

  const innerOnClickHandler = () => {
    selectActivityHandler(activity?.number - 1);
  };

  return (
    <div
      onClick={innerOnClickHandler}
      className={cx(
        classes.cardContainer,
        animations.inDown,
         //@ts-ignore
        `${animations[`delay${activityNumber - 1}`]}`,
        {
            [animations.attention]: attention
        },
        {
          //@ts-ignore
          [`${animations.outRight} ${animations[`delay${activityNumber}`]}`]: out,
        },
        
      )}
    >
      <p className={classes.cardTitle}> {activity?.name}</p>
      <Card className={classes.activityCard}>
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
