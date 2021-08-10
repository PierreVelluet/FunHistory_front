import React from "react";

import { Carousel } from "antd";

import { ICountry } from "interfaces/general_interfaces";
import CountryCard from "./CountryCard/CountryCard";

import classes from "./CountryCarousel.module.less";

const CountryChooser = (props: any) => {
  const countries: [ICountry] = props.countries;

  return (
    <>
    <p className={classes.carouselTitle}>Wanna discover Japan ?</p>
    <Carousel dots={false} arrows dotPosition="bottom" className={classes.carousel}>
      {countries?.map((country: ICountry) => {
        return <CountryCard key={country?.name} country={country} />;
      })}
    </Carousel>
    </>
  );
};

export default CountryChooser;
