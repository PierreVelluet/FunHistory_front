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

const SideBar = () => {
  const [toggleCollapsed, setToggleColapsed] = useState(false);
  const [gearSpinning, setGearSpinning] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="Settings">
        <a target="_blank" rel="noopener noreferrer" href="">
          <div className="d-flex align-items-center">
            <SettingFilled />
            <p className={classes.menuText}>Settings </p>
          </div>
        </a>
      </Menu.Item>
      <Menu.Item key="Logout">
        <a target="_blank" rel="noopener noreferrer" href="">
          <div className="d-flex align-items-center">
            <LogoutOutlined />
            <p className={classes.menuText}>Logout </p>
          </div>
        </a>
      </Menu.Item>
    </Menu>
  );

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
        <div className={cx(classes.cardProfile, "d-flex mb-2 justify-content-between")}>
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
            <Dropdown overlay={menu} placement="bottomRight" arrow>
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
                <div>
                  There are 4 grades:
                  <br />
                  <div className="d-flex align-ites-center">
                    {" "}
                    <br />
                    <div className={classes.romanInt}>I</div>{" "}
                    <span className={classes.romanText}>Apprentice</span>{" "}
                  </div>
                  <div className="d-flex align-ites-center">
                    <div className={classes.romanInt}>II </div>{" "}
                    <span className={classes.romanText}>Confirmed</span>
                  </div>
                  <div className="d-flex align-ites-center">
                    <div className={classes.romanInt}>III</div>{" "}
                    <span className={classes.romanText}>Expert</span>{" "}
                  </div>
                  <div className="d-flex align-ites-center">
                    <div className={classes.romanInt}>IV</div>{" "}
                    <span className={classes.romanText}>Master</span>
                  </div>
                </div>
              }
              placement="right"
              color={"gray"}
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
        About
      </Menu.Item>
    </Menu>
  );
};

export default SideBar;
