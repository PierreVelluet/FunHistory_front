import React, { useState } from "react";

import Image from "next/image";
import { Card, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { PickableItemType } from "typescript/interfaces/pickableItems_interfaces";

import { useGlobalContext } from "utils/globalState/store";
import animations from "utils/animations";

import classes from "./PickableItem.module.less";
import cx from "classnames";
import CustomTooltip from "./CustomTooltip/CustomTooltip";

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
      {
        [animations.attention]: selected,
        [classes.loadingState]: store?.loading,
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
      `${animations.inDown} ${animations[`delay${itemId - 1}`]}`,
      {
        [classes.countryType]: store?.currentPanel === "Countries",
        [classes.unselectedPickableItem]: out,
        [classes.selectedPickableItem]: selected,
        [classes.unactivePickableItem]: item?.inactive,
      },
    ],
    unavailableText: [classes.unavailableText],
  };

  const innerOnClickHandler = () => {
    if (store?.loading || item?.inactive) return;
    setLoading(true);
    setSelected(true);
    selectItemHandler(item);
  };

  return (
    <div
      onClick={
        store?.currentPanel != "Countries" ? innerOnClickHandler : () => {}
      }
      className={cx(...innerStyle.container)}
    >
      <div className={cx(...innerStyle.subcontainer)}>
        <p className={cx(...innerStyle.cardTitle)}>{item?.name}</p>
        <Card className={cx(...innerStyle.card)}>
          <Tooltip
            trigger="click"
            color="#181818"
            placement="right"
            title={
              store?.currentPanel === "Countries" ? (
                <CustomTooltip
                  country={item}
                  innerOnClickHandler={innerOnClickHandler}
                  arrowPointAtCenter
                />
              ) : (
                false
              )
            }
          >
            <Image
              src={item?.bgImage ?? "/placeholder.png"}
              layout="fill"
              objectFit="cover"
              alt={`${item?.name} picture`}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </Tooltip>
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
