import React, { useState } from "react";
import { Menu, Tooltip, Progress, Dropdown } from "antd";
import {
  SettingFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faAddressCard } from "@fortawesome/free-solid-svg-icons";

import classes from "./Sidebar.module.less";
import cx from "classnames";

const settingMenu = () => {
  interface Ikeys {
    name: string;
    icon: object;
  }
  const items: Readonly<Ikeys>[] = [
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

const navbarMenu = ()=> {
  interface ImenuItem {
    title: string,
    icon: object
  }
  const items: Readonly<ImenuItem>[] = [
    {title: "Discover a country", icon: faGlobeAsia},
    {title: "Who am I?", icon: faAddressCard},
  ]
  return (
    {
      items?;map((el: ))
    }
    <Menu.Item
        key="1"
        className={classes.menuItem}
        icon={
          <FontAwesomeIcon className={classes.navIcon} icon={faGlobeAsia} />
        }
      >
        Discover a country
      </Menu.Item>
  )
}



interface Igrade {
  romanNumber: string;
  gradeName: string;
}
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

const SideBar = () => {
  const [toggleCollapsed, setToggleColapsed] = useState(false);
  const [gearSpinning, setGearSpinning] = useState(false);
  const [userGrade, setUserGrade] = useState<number>(0);

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
            <p className={cx(classes.romanText, "me-1")}>
              {grades?.[userGrade]?.gradeName}
            </p>
            <Tooltip
              title={
                <div className="d-flex justify-content-center flex-column">
                  {grades?.map((el: Igrade) => {
                    return (
                      <div className="d-flex">
                        <div className={classes.romanInt}>
                          {el?.romanNumber}
                        </div>{" "}
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
