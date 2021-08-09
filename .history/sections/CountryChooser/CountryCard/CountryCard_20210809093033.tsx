import React from "react";

import { Card } from "antd";
import Image from "next/image";

import InformationItems from "./InformationsItem/InformationsItem";

import classes from "./CountryCard.module.less";

const CountryCard = (props: any) => {
  const country: any = props.country;

  let informations = country;
  delete informations["__v"];
  delete informations["_id"];
  delete informations["flagImage"];
  informations = Object.entries(informations);

  return (
    <Card
      className={classes.countryCard}
      bodyStyle={{ padding: "0", width: "100%", display: "flex" }}
    >
      <div className={classes.leftHalf}>
        <Image
          src={`${country?.flagImage}`}
          layout="fill"
          objectFit="cover"
          alt={`${country?.name} flag`}
          unoptimized={process.env.NODE_ENV === "development"}
          className={classes.flagImage}
        />
      </div>
      <div className={classes.rightHalf}>
        {informations?.map((el: [string, string]) => {
          return <InformationItems key={el?.[0]} infos={el} />;
        })}
      </div>
    </Card>
  );
};

export default CountryCard;
