import React, { useState } from "react";

import Image from "next/image";
import { Card } from "antd";

import { IActivity } from "typescript/interfaces/general_interfaces";

import { useGlobalContext } from "../../../utils/globalState/store";

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

  const { store, setLoading, setSelectedCountry, setQuestions, setPanel }: any =
    useGlobalContext();

  const [selected, setSelected] = useState(false);

  const activityNumber = activity.number;

  const innerAnimations = {
    container: [
      { [animations.attention]: attention },
      { [classes.loadingState]: store?.loading },
      {
        // @ts-ignore
        [`${animations.fadeOutDown} ${animations.delay2}`]: out,
      },
    ],
    subcontainer: [
      {
        // @ts-ignore
        [`${animations.outDown} ${animations.delay4}`]: selected,
      },
    ],
    title: [
      // @ts-ignore
      ` ${animations.fadeInDown} ${animations[`delay${activityNumber + 1}`]}`,
    ],
    card: [
      // @ts-ignore
      `${animations.inDown} ${animations[`delay${activityNumber}`]}`,
    ],
  };

  const innerOnClickHandler = () => {
    if (store?.loading) return;

    setLoading(true);
    selectActivityHandler(activity?.number);
    setSelected(true);
  };

  return (
    <div
      onClick={innerOnClickHandler}
      className={cx(classes.cardContainer, ...innerAnimations.container)}
    >
      <div
        className={cx(classes.subcontainer, ...innerAnimations.subcontainer)}
      >
        <p className={cx(classes.cardTitle, ...innerAnimations.title)}>
          {activity?.name}
        </p>
        <Card
          className={cx(
            classes.activityCard,
            { [classes.unselectedActivityCard]: out },
            { [classes.selectedActivityCard]: selected },
            ...innerAnimations.card
          )}
        >
          <Image
            src={activity?.backgroundImage ?? "/placeholder.png"}
            layout="fill"
            objectFit="cover"
            alt={`${activity?.name} picture`}
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </Card>
      </div>
    </div>
  );
};

export default ActivityCard;
