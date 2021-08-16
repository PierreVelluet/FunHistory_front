import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Card } from "antd";

import { IActivity } from "typescript/interfaces/general_interfaces";

import classes from "./ActivityCard.module.less";
import cx from "classnames";

const ActivityCard = (props: any) => {
  const {
    activity,
    fadeCards,
    selectActivityHandler,
    hearthbeat,
  }: {
    activity: IActivity;
    fadeCards: boolean;
    selectActivityHandler: any;
    hearthbeat: boolean;
  } = props;

  const innerOnClickHandler = () => {
    selectActivityHandler(activity?.number - 1);
  };

  return (
    <div
      onClick={innerOnClickHandler}
      className={cx(
        classes.cardContainer,
        
        "animate__animated animate__bounceInDown",
        {
          animate__bounceOutRight: fadeCards,
        },
        {
            "animate__animated animate__rubberBand": hearthbeat,
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
