import React, { useState } from "react";

import Image from "next/image";
import { Card } from "antd";

import { IActivity } from "typescript/interfaces/general_interfaces";

import { animations } from "utils/animations";

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

  const [selected, setSelected] = useState(false);

  const activityNumber = activity.number;

  const innerAnimations = {
    container: [
      { [animations.attention]: attention },
      {
        // @ts-ignore
        [`${animations.fadeOut} ${animations.delay2}`]: out,
      },
    ],
    title: [
      // @ts-ignore
      ` ${animations.fadeInDown} ${animations[`delay${activityNumber + 1}`]}`,
      {
        // @ts-ignore
        [`${animations.hinge} ${animations.delay5}`]: selected,
      },
    ],
    card: [
      // @ts-ignore
      `${animations.inDown} ${animations[`delay${activityNumber}`]}`,
      {
        //@ts-ignore
        [`${animations.outRight} ${animations.delay4}`]: selected,
      },
    ],
  };

  const innerOnClickHandler = () => {
    selectActivityHandler(activity?.number - 1);
    setSelected(true);
  };

  return (
    <div
      onClick={innerOnClickHandler}
      className={cx(classes.cardContainer, ...innerAnimations.container)}
    >
      <p className={cx(classes.cardTitle, ...innerAnimations.title)}>
        {activity?.name}
      </p>
      <Card className={cx(classes.activityCard, ...innerAnimations.card)}>
        <Image
          src={activity?.backgroundImage ?? "/placeholder.png"}
          layout="fill"
          objectFit="cover"
          alt={`${activity?.name} picture`}
          unoptimized={process.env.NODE_ENV === "development"}
        />
      </Card>
    </div>
  );
};

export default ActivityCard;
