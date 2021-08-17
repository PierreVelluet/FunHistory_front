import React, { useState, useEffect } from "react";

import { Carousel, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Typist from "react-typist";

import CountryCard from "./CountryCard/CountryCard";
import arrowSettings from "./CountryPanelArrows/CountryPanelArrows";

import { ICountry } from "interfaces/general_interfaces";

import { useGlobalContext } from "../../utils/globalState/store";

import "animate.css";
import classes from "./CountryPanel.module.less";
import cx from "classnames";

const CountryChooser = (props: any) => {
  const countries: [ICountry] = props.countries;
  const { store, setLoading, setSelectedCountry, setQuestions, setPanel }: any =
    useGlobalContext();

  const [giggle, setGiggle] = useState(false);
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);

  const countryChange = (current: number) => {
    setSelectedCountry(countries?.[current]?.name);
    setGiggle((prevState) => !prevState);

    setTimeout(function () {
      setGiggle((prevState) => !prevState);
    }, 3000);
  };

  const selectCountryHandler = async () => {
    setLoading(true);

    const questionsParams = {
      country: store?.country,
      num: store?.numberOfQuestions,
    };

    try {
      await axios
        .post<string>(
          `${process.env.NEXT_PUBLIC_BACKEND}/questions/random`,
          questionsParams
        )
        .then((response: any) => setQuestions(response?.data));
    } catch (err) {
      if (err) console.log(err);
    }

    setAnimation1(true);
    setTimeout(function () {
      setAnimation2(true);
    }, 0);
    setTimeout(function () {
      setAnimation3(true);
    }, 0);
    setTimeout(function () {
      setPanel("ActivitiesPanel");
      setLoading(false);
    }, 0);
  };

  useEffect(() => {
    setSelectedCountry(countries?.[0]?.name);
  }, []);

  return (
    <>
      <div
        className={cx(
          classes.carouselTitleContainer,
          "mb-3 animate__animated animate__bounceInDown animate__delay-2s",
          { animate__bounceOutRight: animation1 }
        )}
      >
        <Typist cursor={{ show: false }} key={store.country}>
          <span className={classes.carouselTitle}>{store.country} </span>
        </Typist>
      </div>
      <Carousel
        effect="fade"
        afterChange={(current: any) => countryChange(current)}
        dots={false}
        arrows
        {...arrowSettings}
        dotPosition="bottom"
        className={cx(classes.carousel, "animate__animated animate__bounceInDown animate__delay-1s", {
          animate__bounceOutRight: animation2,
        })}
      >
        {countries?.map((country: ICountry) => {
          return <CountryCard key={country?.name} country={country} />;
        })}
      </Carousel>
      <Button
        onClick={selectCountryHandler}
        disabled={store?.loading}
        icon={
          <FontAwesomeIcon icon={faPlayCircle} className={classes.btnIcon} />
        }
        className={cx(
          classes.selectBtn,
          "mt-3",
          "animate__animated animate__bounceInDown",
          {
            animate__bounceOutRight: animation3,
          },
          { [classes.giggle]: giggle },
          { [classes.btnDisabled]: store?.loading }
        )}
        type="primary"
        size={"large"}
      >{`Dive into history !`}</Button>
    </>
  );
};

export default CountryChooser;
