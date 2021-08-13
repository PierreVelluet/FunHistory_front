import React from "react";

import { Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { ICountry } from "interfaces/general_interfaces";
import CountryCard from "./CountryCard/CountryCard";
import Typist from 'react-typist';

import classes from "./CountryCarousel.module.less";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowCircleRight} className={classes.icon} />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "-35px"
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} className={classes.icon} />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CountryChooser = (props: any) => {
  const countries: [ICountry] = props.countries;

  return (
    <>
        
        <Typist><span  className={classes.carouselTitle}>Wanna discover Japan ?</span></Typist>
      <Carousel
        dots={false}
        arrows
        {...settings}
        dotPosition="bottom"
        className={classes.carousel}
      >
        {countries?.map((country: ICountry) => {
          return <CountryCard key={country?.name} country={country} />;
        })}
      </Carousel>
    </>
  );
};

export default CountryChooser;
