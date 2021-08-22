import React, { useState, useEffect } from "react";

import {
  PickableItemType,
} from "typescript/interfaces/interfaces";
import { useGlobalContext } from "utils/globalState/store";

import classes from "./GenericPickerPanel.module.less";
import PickableItem from "./PickableItem/PickableItem";

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
  const [attention, setAttention] = useState<boolean[]>(
    Array(items?.length).fill(false)
  );
  const [out, setOut] = useState<boolean[]>(Array(items?.length).fill(false));

  const setAnimationsStates = (selectedItem: number) => {
    const newAttention = attention?.map((el: boolean, index: number) => {
      return index === selectedItem - 1 ? !el : el;
    });
    const newOut = out?.map((el: boolean, index: number) => {
      return index === selectedItem - 1 ? el : !el;
    });
    return { newAttention, newOut };
  };

  const updateState = (item: PickableItemType): void => {
    switch (item.type) {
      case "IContinent":
        setContinent(item?.name);
        setTimeout(() => {
          setCurrentPanel("CountryPanel");
        }, 3000);
        break;
      case "ITheme":
        setTheme(item?.name);
        setTimeout(() => {
          setCurrentPanel("Difficulty");
        }, 3000);
        break;
      case "IDifficulty":
        setDifficulty(item?.name);
        setTimeout(() => {
          setCurrentPanel("QuizzPanel");
        }, 3000);
        break;
      default:
        setTimeout(() => {
          setCurrentPanel("Continent");
        }, 3000);
        break;
    }
  };

  const selectItemHandler = (selectedItem: PickableItemType) => {
    const { newAttention, newOut } = setAnimationsStates(selectedItem.id);
    setAttention(newAttention);
    setOut(newOut);
    updateState(selectedItem);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [store?.currentPanel]);

  if (store?.currentPanel === "Difficulty")
  {
    console.log(items)
  }
    

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
