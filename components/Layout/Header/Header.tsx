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

const SideBar = () => {
  const [toggleCollapsed, setToggleColapsed] = useState(false);
  const [gearSpinning, setGearSpinning] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="">
          <div className="d-flex align-items-center">
            <SettingFilled />
            <p className={classes.menuText}>Settings </p>
          </div>
        </a>
      </Menu.Item>
      <Menu.Item>
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
      className={classes.sidebar}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      inlineCollapsed={toggleCollapsed}
    >
      <div className={classes.openProfile}>
        <div className="d-flex mb-2 justify-content-between">
          <div className="d-flex">
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
              {/* <p>Game(s) completed: {3}</p> */}
              <div className={"d-flex align-items-center"}>
                <p className="me-1">Apprentice</p>
                <Tooltip
                  title={
                    <p>
                      There are 4 grades:
                      <br />
                      <div className="d-flex align-ites-center">
                        {" "}
                        <br />
                        <div className={classes.romanInt}>
                          I
                        </div> Apprentice{" "}
                      </div>
                      <div className="d-flex align-ites-center">
                        <div className={classes.romanInt}>II</div> Confirmed
                      </div>
                      <div className="d-flex align-ites-center">
                        <div className={classes.romanInt}>III</div> Expert{" "}
                      </div>
                      <div className="d-flex align-ites-center">
                        <div className={classes.romanInt}>IV</div> Master
                      </div>
                    </p>
                  }
                  placement="right"
                  color={"gray"}
                  key={"settings"}
                >
                  <QuestionCircleOutlined className={classes.infoGradeIcon} />
                </Tooltip>
              </div>
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
        <div className="div">
          <Tooltip
            title="1st game !"
            placement="right"
            color={"gray"}
            key={"settings"}
          >
            <TrophyFilled className={classes.trophy} />
          </Tooltip>
        </div>
        <div className={classes.progressContainer}>
          <p className="mb-1">level 1</p>
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
        icon={
          <FontAwesomeIcon className={classes.navIcon} icon={faGlobeAsia} />
        }
      >
        Discover a country
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={
          <FontAwesomeIcon className={classes.navIcon} icon={faAddressCard} />
        }
      >
        About
      </Menu.Item>
      {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu> */}
    </Menu>
  );
};

export default SideBar;
