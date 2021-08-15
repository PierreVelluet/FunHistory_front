import React from "react";

import { Card } from "antd";
import Image from "next/image";

import InformationItems from "./InformationsItem/InformationsItem";

import classes from "./CountryCard.module.less";

const CountryCard = (props: any) => {
  const country: any = props.country;

  // Filtering the only values we want in "rest".
  let {
    __v,
    __id,
    flagImage,
    ...rest
  }: { __v: object; __id: object; flagImage: object; informations: object[] } =
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
    <Card
      className={classes.countryCard}
      bodyStyle={{ padding: "0", width: "100%", display: "flex" }}
    >
      <div className={classes.leftHalf}>
        <div className={classes.flagContainer}>
          <Image
            src={`${country?.flagImage}`}
            layout="fill"
            objectFit="fill"
            alt={`${country?.name} flag`}
            unoptimized={process.env.NODE_ENV === "development"}
            className={classes.flagImage}
          />
        </div>
        <div className={classes.subFlagContainer}>
          {sortCountryInformations(
            ["name", "native country name", "capital", "language"],
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
      <div className={classes.rightHalf}>
        {sortCountryInformations(
          [
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
    </Card>
  );
};

export default CountryCard;
