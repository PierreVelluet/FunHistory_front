import React, { useState } from "react";

import Image from "next/image";
import { Card } from "antd";

import { IDifficulty } from "typescript/interfaces/general_interfaces";

import { useGlobalContext } from "../../../utils/globalState/store";

import { animations } from "utils/animations";

import classes from "./DifficultyCard.module.less";
import cx from "classnames";

const DifficultyCard = (props: any) => {
  const {
    difficulty,
    selectDifficultyHandler,
    out,
    attention,
  }: {
    difficulty: IDifficulty;
    out: boolean;
    selectDifficultyHandler: any;
    attention: boolean;
  } = props;

  const { store, setLoading, setSelectedCountry, setQuestions, setPanel }: any =
    useGlobalContext();

  const [selected, setSelected] = useState(false);

  const difficultyNumber = difficulty?.difficultyNumber;

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
      ` ${animations.fadeInDown} ${animations[`delay${difficultyNumber + 1}`]}`,
    ],
    card: [
      // @ts-ignore
      `${animations.inDown} ${animations[`delay${difficultyNumber}`]}`,
    ],
  };

  const innerOnClickHandler = () => {
    if (store?.loading) return;

    setLoading(true);
    selectDifficultyHandler(difficultyNumber);
    setSelected(true);
  };

  console.log(difficulty)

  return (
    <div
      onClick={innerOnClickHandler}
      className={cx(classes.cardContainer, ...innerAnimations.container)}
    >
      <div
        className={cx(classes.subcontainer, ...innerAnimations.subcontainer)}
      >
        <p className={cx(classes.cardTitle, ...innerAnimations.title)}>
          {difficulty?.name}
        </p>
        <Card
          className={cx(
            classes.difficultyCard,
            { [classes.unselectedDifficultyCard]: out },
            { [classes.selectedDifficultyCard]: selected },
            ...innerAnimations.card
          )}
        >
          <Image
            src={difficulty?.backgroundImage ?? "/placeholder.png"}
            layout="fill"
            objectFit="cover"
            alt={`${difficulty?.name} picture`}
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </Card>
      </div>
    </div>
  );
};

export default DifficultyCard;
