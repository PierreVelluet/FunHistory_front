import React, { useState } from "react";

import Image from "next/image";
import { Tooltip, Progress, Dropdown, Menu } from "antd";
import {
  PlusCircleFilled,
  QuestionCircleOutlined,
  SettingFilled,
  LogoutOutlined,
} from "@ant-design/icons";

import { ImenuKeys, Igrade } from "interfaces/layout_interfaces.js";

import classes from "./ProfileCard.module.less";
import cx from "classnames";

const grades: Readonly<Igrade>[] = [
  {
    romanNumber: "I",
    gradeName: "Apprentice",
  },
  {
    romanNumber: "II",
    gradeName: "Confirmed",
  },
  {
    romanNumber: "II",
    gradeName: "Expert",
  },
  {
    romanNumber: "IV",
    gradeName: "Master",
  },
];

const settingMenu = (): FunctionCompo => {
  const items: Readonly<ImenuKeys>[] = [
    { title: "Settings", icon: <SettingFilled /> },
    { title: "Logout", icon: <LogoutOutlined /> },
  ];

  return (
    <Menu className={classes.menuDropdown}>
      {items?.map((el: ImenuKeys) => {
        return (
          <Menu.Item key={el.title}>
            <a target="_blank" rel="noopener noreferrer" href="">
              <div className="d-flex align-items-center">
                {el?.icon}
                <p className={classes.settingMenuText}>{el?.title} </p>
              </div>
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const ProfileCard = () => {
  const [gearSpinning, setGearSpinning] = useState(false);
  const [userGrade, setUserGrade] = useState<number>(0);

  return (
    <div className={classes.openProfile}>
      <div
        className={cx(
          classes.cardProfile,
          "d-flex mb-2 justify-content-between"
        )}
      >
        <div className={cx("d-flex")}>
          <div className={classes.avatar}>
            <Image
              src="/Pierre_pro.jpg"
              layout="fill"
              objectFit="cover"
              alt="profile picture"
              unoptimized={process.env.NODE_ENV === "development"}
              className={classes.avatarImage}
            />
          </div>
          <div className={classes.informationContainer}>
            <p>Pierre Velluet</p>
            <p>European</p>
            <p>velluetp@gmail.com</p>
          </div>
          <Dropdown overlay={settingMenu()} placement="bottomRight" arrow>
            <PlusCircleFilled
              spin={gearSpinning}
              onMouseEnter={() => setGearSpinning(true)}
              onMouseLeave={() => setGearSpinning(false)}
              className={classes.plusIcon}
            />
          </Dropdown>
        </div>
      </div>
      <div className={classes.progressContainer}>
        <div className={"d-flex align-items-center"}>
          <p className={cx(classes.romanText, "me-1")}>
            {grades?.[userGrade]?.gradeName}
          </p>
          <Tooltip
            title={
              <div className="d-flex justify-content-center flex-column">
                {grades?.map((el: Igrade) => {
                  return (
                    <div className="d-flex">
                      <div className={classes.romanInt}>{el?.romanNumber}</div>{" "}
                      <p className={classes.romanText}>{el?.gradeName}</p>{" "}
                    </div>
                  );
                })}
              </div>
            }
            placement="right"
            color={"#C19434"}
            key={"settings"}
          >
            <QuestionCircleOutlined className={classes.infoGradeIcon} />
          </Tooltip>
        </div>
        <Progress
          status="active"
          showInfo={false}
          trailColor="lightgray"
          strokeColor={{
            "0%": "#FF4838",
            "100%": "green",
          }}
          percent={60}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
