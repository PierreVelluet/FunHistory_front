import React from "react";

import Head from "next/head";
import axios from "axios";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { ICountry } from "interfaces/general_interfaces";

import { useGlobalContext } from "utils/globalState/store";

import CountryPanel from "sections/CountryPanel/CountryPanel";
import ActivitiesPanel from "sections/ActivitiesPanel/ActivitiesPanel";
import QuizzPanel from "sections/QuizzPanel/QuizzPanel";

import classes from "./index.module.less";
import DifficultyPanel from "sections/DifficultyPanel/DifficultyPanel";
import GenericPickerPanel from "sections/GenericPickerPanel/GenericPickerPanel";
import { PickableItemType, ITheme } from "typescript/interfaces/interfaces";
import { themes } from "utils/themes";
import { difficulties } from "utils/difficulties";
import { continents } from "utils/continents";

export default function Home(props: any) {
  const data: [ICountry] = props.data.data;
  const { store }: any = useGlobalContext();

  const panelHandler = (panel: string) => {
    switch (panel) {
      case "CountryPanel":
        return <CountryPanel countries={data} />;
      case "QuizzPanel":
        return <QuizzPanel />;
      case "Theme":
        return <GenericPickerPanel key={panel} typedItems={themes} />;
      case "Continent":
        return <GenericPickerPanel key={panel} typedItems={continents} />;
      case "Difficulty":
        return <GenericPickerPanel key={panel} typedItems={difficulties} />;
      default:
        return <CountryPanel countries={data} />;
    }
  };

  console.log(store)

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
  const data = await axios
    .get<string>(`${process.env.NEXT_PUBLIC_BACKEND}/countries`)
    .then((response: any) => response.data);

  return {
    props: { data },
  };
}
