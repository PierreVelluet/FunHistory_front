import React, { useState, useEffect } from "react";

import { useGlobalContext } from "utils/globalState/store";

import PickableItem from "./PickableItem/PickableItem";
import { PickableItemType } from "typescript/interfaces/interfaces";

import classes from "./GenericPickerPanel.module.less";

const GenericPickerPanel = (props: any) => {
  const typedItems: PickableItemType[] = props.typedItems;
  const {
    store,
    setLoading,
    setContinent,
    setCurrentPanel,
    setTheme,
    setDifficulty,
  }: any = useGlobalContext();

  const [items, setItems] = useState<PickableItemType[]>(typedItems);
  const boolArray: boolean[] = Array(items?.length).fill(false);
  const [attention, setAttention] = useState<boolean[]>(boolArray);
  const [out, setOut] = useState<boolean[]>(boolArray);

  const setAnimationsStates = (
    selectedItem: number
  ): { newAttention: boolean[]; newOut: boolean[] } => {
    const newAttention: boolean[] = [];
    const newOut: boolean[] = [];
    boolArray?.forEach((el: boolean, index: number) => {
      if (index === selectedItem - 1) {
        newAttention.push(!el);
        newOut.push(el);
      } else {
        newAttention.push(el);
        newOut.push(!el);
      }
    });
    return { newAttention, newOut };
  };

  const updateState = (item: PickableItemType): void => {
    switch (item?.step) {
      case "IContinent":
        setContinent(item?.name);
        setTimeout(() => {
          setCurrentPanel(item?.nextStep);
        }, 3000);
        break;
      case "ITheme":
        setTheme(item?.name);
        setTimeout(() => {
          setCurrentPanel(item?.nextStep);
        }, 3000);
        break;
      case "IDifficulty":
        setDifficulty(item?.name);
        setTimeout(() => {
          setCurrentPanel(item?.nextStep);
        }, 3000);
        break;
      default:
        setTimeout(() => {
          setCurrentPanel(item?.nextStep);
        }, 3000);
        break;
    }
  };

  const selectItemHandler = (selectedItem: PickableItemType) => {
    const {
      newAttention,
      newOut,
    }: { newAttention: boolean[]; newOut: boolean[] } = setAnimationsStates(
      selectedItem.id
    );
    setAttention(newAttention);
    setOut(newOut);
    updateState(selectedItem);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [store?.currentPanel]);

  return (
    <div className={classes.pickableItemsContainer}>
      {items?.map((el: PickableItemType, index: number) => {
        return (
          <PickableItem
            key={el?.name}
            item={el}
            selectItemHandler={selectItemHandler}
            out={out[index]}
            attention={attention[index]}
          />
        );
      })}
    </div>
  );
};

export default GenericPickerPanel;
