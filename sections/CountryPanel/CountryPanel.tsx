import React, { useState, useEffect } from "react";

import { Carousel, Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Typist from "react-typist";

import CountryCard from "./CountryCard/CountryCard";
import arrowSettings from "./CountryPanelArrows/CountryPanelArrows";

import { ICountry } from "interfaces/general_interfaces";

import { useGlobalContext } from "../../utils/globalState/store";
import { animations } from "utils/animations";

import "animate.css";
import classes from "./CountryPanel.module.less";
import cx from "classnames";

const CountryChooser = (props: any) => {
  const countries: [ICountry] = props.countries;
  const { store, setLoading, setSelectedCountry, setQuestions, setPanel }: any =
    useGlobalContext();

  const [giggle, setGiggle] = useState<boolean>(false);
  const [out, setOut] = useState<boolean>(false);

  const countryChange = (current: number) => {
    setSelectedCountry(countries?.[current]?.name);
    setGiggle((prevState) => !prevState);

    setTimeout(function () {
      setGiggle((prevState) => !prevState);
    }, 3000);
  };

  const selectCountryHandler = async () => {
    setLoading(true);
    setOut(true);

    const params: object = {
      country: store?.country,
      num: store?.numberOfQuestions,
    };

    try {
      await axios
        .post<string>(
          `${process.env.NEXT_PUBLIC_BACKEND}/questions/random`,
          params
        )
        .then((response: any) => setQuestions(response?.data))
        .then(() => {
          setTimeout(() => {
            setPanel("ActivitiesPanel");
          }, 1000);
        });
    } catch (err) {
      if (err) console.log(err);
    }
  };

  const innerStyles = {
    title: [
      classes.carouselTitleContainer,
      "mb-3",
      animations.inDown,
      animations.delay2,
      { animate__bounceOutRight: out },
    ],
    carousel: [
      classes.carousel,
      animations.inDown,
      animations.delay1,
      ,
      {
        animate__bounceOutRight: out,
      },
    ],
    selectBtn: [
      classes.selectBtn,
      "mt-3",
      animations.inDown,
      {
        animate__bounceOutRight: out,
      },
      { [classes.giggle]: giggle },
      { [classes.btnDisabled]: store?.loading },
    ],
  };

  useEffect(() => {
    setSelectedCountry(countries?.[0]?.name);
  }, []);

  return (
    <>
      <Card className={cx(...innerStyles.title)} bodyStyle={{ padding: "0" }}>
        <Typist cursor={{ show: false }} key={store.country}>
          <span className={classes.carouselTitle}>{store.country} </span>
        </Typist>
      </Card>
      <Carousel
        className={cx(...innerStyles.carousel)}
        effect="fade"
        afterChange={(current: any) => countryChange(current)}
        dots={false}
        arrows
        {...arrowSettings}
        dotPosition="bottom"
      >
        {countries?.map((country: ICountry) => {
          return <CountryCard key={country?.name} country={country} />;
        })}
      </Carousel>
      <Button
        className={cx(...innerStyles.selectBtn)}
        onClick={selectCountryHandler}
        disabled={store?.loading}
        icon={
          <FontAwesomeIcon icon={faPlayCircle} className={classes.btnIcon} />
        }
        type="primary"
        size={"large"}
      >{`Dive into history !`}</Button>
    </>
  );
};

export default CountryChooser;
