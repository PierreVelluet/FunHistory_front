import React, { useState } from "react";

import { Carousel, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { ICountry } from "interfaces/general_interfaces";
import CountryCard from "./CountryCard/CountryCard";
import Typist from "react-typist";

import "animate.css";
import classes from "./CountryCarousel.module.less";
import cx from "classnames";

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
        marginLeft: "-35px",
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

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [giggle, setGiggle] = useState(false);
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);

  const countryChange = (current: number) => {
    setCurrentSlideIndex(current);
    setGiggle((prevState) => !prevState);

    setTimeout(function () {
      setGiggle((prevState) => !prevState);
    }, 3000);
  };

  const selectCountryHandler = async() => {

    const questionsParams = {
      country: countries?.[currentSlideIndex]?.name,
      num: 10
    }
    const data = await axios
    .post<string>(`${process.env.NEXT_PUBLIC_BACKEND}/questions/random`, questionsParams)
    .then((response: any) => console.log("questions are:", response.data));

    setAnimate1((prevState) => !prevState);
    setTimeout(function () {
      setAnimate2((prevState) => !prevState);
    }, 500);
    setTimeout(function () {
      setAnimate3((prevState) => !prevState);
    }, 1000);
  };

  return (
    <>
      <div
        className={cx(
          classes.carouselTitleContainer,
          "mb-3 animate__animated",
          { animate__backOutRight: animate1 }
        )}
      >
        <Typist cursor={{ show: false }} key={currentSlideIndex}>
          <span className={classes.carouselTitle}>
            {countries?.[currentSlideIndex]?.name}{" "}
          </span>
        </Typist>
      </div>
      <Carousel
        effect="fade"
        afterChange={(current: any) => countryChange(current)}
        dots={false}
        arrows
        {...settings}
        dotPosition="bottom"
        className={cx(classes.carousel, "animate__animated", {
          animate__backOutRight: animate2,
        })}
      >
        {countries?.map((country: ICountry) => {
          return <CountryCard key={country?.name} country={country} />;
        })}
      </Carousel>
      <Button
        onClick={selectCountryHandler}
        icon={
          <FontAwesomeIcon
            icon={faPlayCircle}
            className={classes.btnIcon}
          />
        }
        className={cx(classes.selectBtn, "mt-3", giggle ? classes.giggle : "", "animate__animated", {
          animate__backOutRight: animate3,
        })}
        type="primary"
        size={"large"}
      >{`Dive into history !`}</Button>
    </>
  );
};

export default CountryChooser;
