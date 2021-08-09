import React from "react";

import { Carousel } from "antd";

import { ICountry } from "interfaces/general_interfaces";
import CountryCard from "./CountryCard/CountryCard";

import classes from "./CountryChooser.module.less";

const CountryChooser = (props: any) => {
  const countries: [ICountry] = props.countries;

  return (
    <div className={classes.carousel}>
      <Carousel effect="fade" dotPosition="right">
        {countries?.map((country: ICountry) => {
          return <CountryCard key={country?.name} country={country} /></div>;
        })}
      </Carousel>
    </div>
  );
};

export default CountryChooser;
