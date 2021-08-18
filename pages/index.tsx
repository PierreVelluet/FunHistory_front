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

export default function Home(props: any) {
  const data: [ICountry] = props.data.data;
  const { store, setLoading }: any = useGlobalContext();

  const panelHandler = (panel: string) => {
    switch (panel) {
      case "CountryPanel":
        return <CountryPanel countries={data} />;
      case "ActivitiesPanel":
        return <ActivitiesPanel />;
      case "QuizzPanel":
        return <QuizzPanel />;
      default:
        return <CountryPanel countries={data} />;
    }
  };

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
      {panelHandler(store?.panel)}
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
