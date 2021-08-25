import React from "react";

import Image from "next/image";

import InformationItems from "./InformationsItem/InformationsItem";

import classes from "./CustomTooltip.module.less";
import cx from "classnames";
import { ICountry } from "typescript/interfaces/pickableItems_interfaces";

const CustomTooltip = (props: any) => {
  const { country }: { country: any } = props;

  let {
    __v,
    __id,
    bgImage,
    ...rest
  }: { __v: object; __id: object; bgImage: object; informations: object[] } =
    country;
  const informations: string[][] = Object.entries(rest);

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

  return (
    <div className={cx(classes.container)}>
      <div className={classes.leftHalf}>
        {sortCountryInformations(
          [
            "name",
            "native country name",
            "capital",
            "language",
            "government",
            "leader",
          ],
          informations
        ).map((el: string[]) => {
          return (
            <InformationItems
              toolTipPlacement={"left"}
              key={el?.[0]}
              infos={el}
            />
          );
        })}
      </div>
      <div className={classes.rightHalf}>
        {sortCountryInformations(
          [
            "area",
            "population",
            "density",
            "gross domestic product per capita",
            "timezone",
            "establishment",
            "greeting",
          ],
          informations
        ).map((el: string[]) => {
          return (
            <InformationItems
              toolTipPlacement={"left"}
              key={el?.[0]}
              infos={el}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomTooltip;
