import React from "react";

import {Button } from "antd";

import InformationItems from "./InformationsItem/InformationsItem";

import { useGlobalContext } from "utils/globalState/store";

import animations from "utils/animations";
import classes from "./CustomTooltip.module.less";
import cx from "classnames";

const CustomTooltip = (props: any) => {
  const { country, innerOnClickHandler }: { country: any; innerOnClickHandler:any } = props;

  let {
    __v,
    __id,
    bgImage,
    ...rest
  }: { __v: object; __id: object; bgImage: object; informations: object[] } =
    country;
  const informations: string[][] = Object.entries(rest);

  const { store, setLoading }: any = useGlobalContext();

  let sortCountryInformations = (
    desiredInformations: string[],
    informations: string[][]
  ): string[][] => {
    const result: string[][] = [];

    desiredInformations?.map((desiredString: string) => {
      informations?.map((allInfoElement: string[]) => {
        if (desiredString === allInfoElement?.[0]) result.push(allInfoElement);
      });
    });
    return result;
  };

  const inOneByOne = () => {
    setInterval(function(){ alert("Hello"); }, 3000);
  }

  return (
    <div className={cx(classes.container)}>
      {sortCountryInformations(
        [
          "name",
          "native country name",
          "capital",
          "language",
          "government",
          "leader",
          "area",
          "population",
          "density",
          "gross domestic product per capita",
          "timezone",
          "establishment",
          "greeting",
        ],
        informations
      ).map((el: string[], index:number) => {
        return (
          <div className={animations.fadeIn}>
          <InformationItems
            toolTipPlacement={"left"}
            key={el?.[0]}
            infos={el}
            index={index}
          />
          </div>
        );
      })}
      <Button
          onClick={!store?.loading ? innerOnClickHandler : () => {}}
          // icon={<FontAwesomeIcon icon={faScroll} className={classes.btnIcon} />}
          type="primary"
        >{`Test your knowledge !`}</Button>
    </div>
  );
};

export default CustomTooltip;
