import React from "react";

import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { useGlobalContext } from "utils/globalState/store";

import CountryPanel from "sections/CountryPanel/CountryPanel";
import QuizzPanel from "sections/QuizzPanel/QuizzPanel";
import GenericPickerPanel from "sections/GenericPickerPanel/GenericPickerPanel";

import { ICountry } from "interfaces/general_interfaces";
import { PickableItemType } from "typescript/interfaces/interfaces";

import { themes } from "utils/themes";
import { difficulties } from "utils/difficulties";
import { continents } from "utils/continents";
import { getAllCountries } from "utils/functions/fetchFunctions";

import classes from "./index.module.less";

export default function Home(props: any) {
  const data: [ICountry] = props.data.data;
  const { store }: any = useGlobalContext();

  const panelHandler = (panel: string) => {
    const genericPanelItemHandler = (panel: string): PickableItemType[] => {
      switch (panel) {
        case "IDifficulty":
          return difficulties;
        case "ITheme":
          return themes;
        case "IContinent":
          return continents;
        default:
          return continents;
      }
    };
    switch (panel) {
      case "CountryPanel":
        return <CountryPanel countries={data} />;
      case "QuizzPanel":
        return <QuizzPanel />;
      case "ITheme":
      case "IContinent":
      case "IDifficulty":
        return (
          <GenericPickerPanel
            key={panel}
            typedItems={genericPanelItemHandler(panel)}
          />
        );
      default:
        return <GenericPickerPanel key={panel} typedItems={"continents"} />;
    }
  };

  console.log(store);

  return (
    <div className={classes.container}>
      <Head>
        <title>FunHistory</title>
        <meta
          name="FunHistory website"
          content="Geopolitic and history website"
        />
        <link rel="icon" href="/funHistoryLogo.png" />
        <style>{dom.css()}</style>
      </Head>
      {panelHandler(store?.currentPanel)}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getAllCountries();

  return {
    props: { data },
  };
}
