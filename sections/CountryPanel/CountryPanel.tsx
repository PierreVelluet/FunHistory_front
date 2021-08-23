import React, { useState, useEffect } from "react";

import { Carousel, Button, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";

import CountryCard from "./CountryCard/CountryCard";
import arrowSettings from "./CountryPanelArrows/CountryPanelArrows";

import { ICountry } from "interfaces/general_interfaces";
import { useGlobalContext } from "utils/globalState/store";
import { animations } from "utils/animations";

import classes from "./CountryPanel.module.less";
import cx from "classnames";

const CountryChooser = (props: any) => {
  const countries: [ICountry] = props.countries;
  const { store, setLoading, setSelectedCountry, setCurrentPanel }: any =
    useGlobalContext();

  const [giggle, setGiggle] = useState<boolean>(false);
  const [out, setOut] = useState<boolean>(false);

  const countryChange = (current: number) => {
    setSelectedCountry(countries?.[current]?.name);
    setLoading(true);
    setGiggle(true);

    setTimeout(() => {
      setGiggle(false);
      setLoading(false);
    }, 1000);
  };

  const selectCountryHandler = async () => {
    setLoading(true);
    setOut(true);

      setTimeout(() => {
        setCurrentPanel("ITheme");
      }, 1500);
  };

  const innerStyles = {
    title: [
      classes.carouselTitleContainer,
      "mb-3",
      animations.inDown,
      animations.delay2,
      { [animations.outDown]: out },
    ],
    carousel: [
      classes.carousel,
      animations.inDown,
      animations.delay1,
      ,
      {
        [animations.outDown]: out,
      },
    ],
    selectBtn: [
      classes.selectBtn,
      "mt-3",
      animations.inDown,
      {
        [animations.outDown]: out,
      },

      { [classes.btnDisabled]: store?.loading },
    ],
    selectBtnWrapper: [{ [animations.attention]: giggle }],
  };

  useEffect(() => {
    setSelectedCountry(countries?.[0]?.name);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
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
        beforeChange={() => {}}
        afterChange={(current: any) => countryChange(current)}
        dots={false}
        arrows
        {...arrowSettings}
      >
        {countries?.map((country: ICountry) => {
          return <CountryCard key={country?.name} country={country} />;
        })}
      </Carousel>
      <div className={cx(...innerStyles.selectBtnWrapper)}>
        <Button
          className={cx(...innerStyles.selectBtn)}
          onClick={!store?.loading ? selectCountryHandler : () => {}}
          icon={<FontAwesomeIcon icon={faScroll} className={classes.btnIcon} />}
          type="primary"
          size={"large"}
        >{`Test your knowledge !`}</Button>
      </div>
    </>
  );
};

export default CountryChooser;
