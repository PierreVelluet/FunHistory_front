import React, { useState } from "react";

import Image from "next/image";
import { Card } from "antd";

import { useGlobalContext } from "../../../utils/globalState/store";

import { PickableItemType } from "typescript/interfaces/interfaces";
import { animations } from "utils/animations";

import classes from "./PickableItem.module.less";
import cx from "classnames";

const PickableItem = (props: any) => {
  const {
    item,
    selectItemHandler,
    out,
    attention,
  }: {
    item: PickableItemType;
    selectItemHandler: any;
    out: boolean;
    attention: boolean;
  } = props;

  const { store, setLoading, setSelectedCountry, setQuestions, setPanel }: any =
    useGlobalContext();

  const [selected, setSelected] = useState(false);

  const itemId = item.id;
  item.onClick = () => {
    console.log(itemId);
  };

  console.log(out === attention);

  const innerAnimations = {
    container: [
      classes.cardContainer,
      { [animations.attention]: attention },
      { [classes.loadingState]: store?.loading },
      {
        // @ts-ignore
        [`${animations.fadeOutDown} ${animations.delay2}`]: out,
      },
    ],
    subcontainer: [
      classes.subcontainer,
      {
        // @ts-ignore
        [`${animations.outDown} ${animations.delay4}`]: selected,
      },
    ],
    cardTitle: [
      classes.cardTitle,
      // @ts-ignore
      ` ${animations.fadeInDown} ${animations[`delay${itemId}`]}`,
    ],
    card: [
      classes.pickableItem,
      // @ts-ignore
      `${animations.inDown} ${animations[`delay${itemId}`]}`,
      { [classes.unselectedPickableItem]: out },
      { [classes.selectedPickableItem]: selected },
    ],
  };

  const innerOnClickHandler = () => {
    if (store?.loading) return;
    setLoading(true);
    selectItemHandler(item);
    setSelected(true);
  };

  return (
    <div
      onClick={innerOnClickHandler}
      className={cx(...innerAnimations.container)}
    >
      <div className={cx(...innerAnimations.subcontainer)}>
        <p className={cx(...innerAnimations.cardTitle)}>{item?.name}</p>
        <Card className={cx(...innerAnimations.card)}>
          <Image
            src={item?.bgImage ?? "/placeholder.png"}
            layout="fill"
            objectFit="cover"
            alt={`${item?.name} picture`}
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </Card>
      </div>
    </div>
  );
};

export default PickableItem;
