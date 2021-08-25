import React, { useState, useEffect } from "react";

import { useGlobalContext } from "utils/globalState/store";

import PickableItem from "./PickableItem/PickableItem";

import { PickableItemType } from "typescript/interfaces/interfaces";

import hardData from "utils/hardDatas";
import { getAllCountriesByContinent } from "utils/functions/fetchFunctions";

import classes from "./GenericPickerPanel.module.less";

const GenericPickerPanel = (props: any) => {
  const {
    store,
    setLoading,
    setContinent,
    setCurrentPanel,
    setTheme,
    setCountry,
    setDifficulty,
  }: any = useGlobalContext();

  const [items, setItems] = useState<PickableItemType[]>(
    hardData[store?.currentPanel]
  );
  const boolArray: boolean[] = Array(items?.length).fill(false);
  const [out, setOut] = useState<boolean[]>(boolArray);

  const updateState = (item: PickableItemType): void => {
    switch (store?.currentPanel) {
      case "Continents":
        setContinent(item?.name);
        setTimeout(() => {
          setCurrentPanel("Countries");
        }, 3000);
        break;
      case "Countries":
        setCountry(item?.name);
        setTimeout(() => {
          setCurrentPanel("Themes");
        }, 3000);
        break;
      case "Themes":
        setTheme(item?.name);
        setTimeout(() => {
          setCurrentPanel("Difficulties");
        }, 3000);
        break;
      case "Difficulties":
        setDifficulty(item);
        setTimeout(() => {
          setCurrentPanel("QuizzPanel");
        }, 3000);
        break;
      default:
        setTimeout(() => {
          setCurrentPanel("Continents");
        }, 3000);
        break;
    }
  };

  const selectItemHandler = (selectedItem: PickableItemType) => {
    const newOut: boolean[] = out.map((el: boolean, index: number) => {
      return index === selectedItem.id - 1 ? el : !el;
    });
    setOut(newOut);
    updateState(selectedItem);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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

    if (store?.currentPanel === "Countries") {
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
          />
        );
      })}
    </div>
  );
};

export default GenericPickerPanel;
