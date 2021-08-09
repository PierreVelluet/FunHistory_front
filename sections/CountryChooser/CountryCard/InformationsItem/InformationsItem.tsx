import React from "react";

import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faFistRaised,
  faCity,
  faLanguage,
  faLandmark,
  faChartArea,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { capitalize } from "utils/functions";

import classes from "./InformationsItem.module.less";

const InformationItems = (props: any) => {
  const infos: string[] = props.infos;

  const iconChooser: any = (label: string) => {
    switch (label) {
      case "name":
        return <FontAwesomeIcon icon={faFlag} className={classes.icon} />;
      case "leader":
        return <FontAwesomeIcon icon={faFistRaised} className={classes.icon} />;
      case "capital":
        return <FontAwesomeIcon icon={faCity} className={classes.icon} />;
      case "language":
        return <FontAwesomeIcon icon={faLanguage} className={classes.icon} />;
      case "government":
        return <FontAwesomeIcon icon={faLandmark} className={classes.icon} />;
      case "area":
        return <FontAwesomeIcon icon={faChartArea} className={classes.icon} />;
      case "population":
        return <FontAwesomeIcon icon={faUsers} className={classes.icon} />;
      case "timezone":
        return <FontAwesomeIcon icon={faClock} className={classes.icon} />;
      default:
        return <FontAwesomeIcon icon={faClock} className={classes.icon} />;
    }
  };

  return (
    <div className={classes.infoItem}>
      <Tooltip
        title={capitalize(infos?.[0])}
        placement="left"
        color={"#C19434"}
        key={infos?.[0]}
      >
        <div className={classes.iconContainer}>{iconChooser(infos[0])}</div>
      </Tooltip>
      <p>{capitalize(infos?.[1])}</p>
    </div>
  );
};

export default InformationItems;
