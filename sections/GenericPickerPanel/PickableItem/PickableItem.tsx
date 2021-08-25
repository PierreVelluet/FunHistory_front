import React, { useState } from "react";

import Image from "next/image";
import { Card } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../../../utils/globalState/store";

import { PickableItemType } from "typescript/interfaces/pickableItems_interfaces";
import animations  from "utils/animations";

import classes from "./PickableItem.module.less";
import cx from "classnames";

const PickableItem = (props: any) => {
  const {
    item,
    selectItemHandler,
    out,
  }: {
    item: PickableItemType;
    selectItemHandler: any;
    out: boolean;
  } = props;

  const { store, setLoading }: any = useGlobalContext();

  const [selected, setSelected] = useState(false);
  const itemId = item?.id;

  const innerStyle = {
    container: [
      classes.cardContainer,
      { [animations.attention]: selected },
      { [classes.loadingState]: store?.loading },
      {
        // @ts-ignore
        [`${animations.fadeOutDown} ${animations.delay2}`]: out, // conflicts with countries
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
      { [classes.countryType]: store?.currentPanel === "Countries" },
      // @ts-ignore
      `${animations.inDown} ${animations[`delay${itemId - 1}`]}`,
      { [classes.unselectedPickableItem]: out },
      { [classes.selectedPickableItem]: selected },
      { [classes.unactivePickableItem]: item?.inactive },
    ],
    unavailableText: [classes.unavailableText],
  };

  const innerOnClickHandler = () => {
    if (store?.loading || item?.inactive) return;
    setLoading(true);
    selectItemHandler(item);
    setSelected(true);
  };

  return (
    <div onClick={innerOnClickHandler} className={cx(...innerStyle.container)}>
      <div className={cx(...innerStyle.subcontainer)}>
        <p className={cx(...innerStyle.cardTitle)}>{item?.name}</p>
        <Card className={cx(...innerStyle.card)}>
          <Image
            src={item?.bgImage ?? "/placeholder.png"}
            layout="fill"
            objectFit="cover"
            alt={`${item?.name} picture`}
            unoptimized={process.env.NODE_ENV === "development"}
          />
          <div className={cx(...innerStyle.unavailableText)}>
            {item?.inactive ? (
              <span className="me-2">
                <FontAwesomeIcon icon={faLock} className="me-2" />
                Locked
              </span>
            ) : (
              ""
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PickableItem;
