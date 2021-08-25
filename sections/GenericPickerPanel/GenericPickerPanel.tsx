import React, { useState, useEffect } from "react";

import { useGlobalContext } from "utils/globalState/store";

import PickableItem from "./PickableItem/PickableItem";
import {
  ICountry,
  PickableItemType,
  SearchFn,
} from "typescript/interfaces/interfaces";

import { getAllCountriesByContinent } from "utils/functions/fetchFunctions";

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
        setDifficulty(item);
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

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      const countries: PickableItemType[] = await getAllCountriesByContinent(
        store?.continent
      )
        .then((response: any) => response.data.data)
        .then((data: any) =>
          data?.map((el: any, index: number) => {
            return {
              ...el,
              id: index + 1,
            };
          })
        );
      setItems(countries);
    };

    if (store?.currentPanel === "ICountry") {
      fetchCountries();
    }
  }, []);

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
