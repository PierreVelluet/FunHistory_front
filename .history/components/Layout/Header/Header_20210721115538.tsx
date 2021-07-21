import React, { useState } from "react";
import { Menu, Tooltip, Progress, Dropdown } from "antd";
import {
  SettingFilled,
  LogoutOutlined,
  TrophyFilled,
  PlusCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faAddressCard } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.less";
import cx from "classnames";

const settingMenu = () => {
  interface Ikeys {
    name: string;
    icon: object;
  }
  const items: Ikeys[] = [
    { name: "Settings", icon: <SettingFilled /> },
    { name: "Logout", icon: <LogoutOutlined /> },
  ];

  return (
    <Menu className={classes.menuDropdown}>
      {items?.map((el: Ikeys) => {
        return (
          <Menu.Item key={el.name}>
            <a target="_blank" rel="noopener noreferrer" href="">
              <div className="d-flex align-items-center">
                {el?.icon}
                <p className={classes.settingMenuText}>{el?.name} </p>
              </div>
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

interface Igrade {
  romanNumber: string;
  gradeName: string;
}
const grades: Igrade[] = [
  {
    romanNumber: "I",
    gradeName: "Apprentince",
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

const SideBar = () => {
  const [toggleCollapsed, setToggleColapsed] = useState(false);
  const [gearSpinning, setGearSpinning] = useState(false);

  return (
    <Menu
      id="mainMenu"
      className={classes.sidebar}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      inlineCollapsed={toggleCollapsed}
    >
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
            <p className={cx(classes.romanText, "me-1")}>Apprentice</p>
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
                </>
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

      <Menu.Item
        key="1"
        className={classes.menuItem}
        icon={
          <FontAwesomeIcon className={classes.navIcon} icon={faGlobeAsia} />
        }
      >
        Discover a country
      </Menu.Item>
      <Menu.Item
        key="2"
        className={classes.menuItem}
        icon={
          <FontAwesomeIcon className={classes.navIcon} icon={faAddressCard} />
        }
      >
        Who am I ?
      </Menu.Item>
    </Menu>
  );
};

export default SideBar;
