import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../../../utils/globalState/store";

import classes from "./CountryPanelArrows.module.less";



const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  const { store }: any = useGlobalContext();
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={!store?.loading ? onClick : () => {}}
    >
      <FontAwesomeIcon icon={faArrowCircleRight} className={classes.icon} />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  const { store }: any = useGlobalContext();
  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "-35px",
      }}
      onClick={!store?.loading ? onClick : () => {}}
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} className={classes.icon} />
    </div>
  );
};

const arrowSettings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default arrowSettings;
