import React, { useState } from "react";
import { Menu, Button, Divider } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  SettingFilled,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faAddressCard } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.less";

const { SubMenu } = Menu;

const SideBar = () => {
  const [toggleCollapsed, setToggleColapsed] = useState(false);

  return (
    <Menu
      className={classes.sidebar}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={toggleCollapsed}
    >
      <div className={classes.dividerContainer}>
        <Divider className={classes.divider} />
      </div>
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
              <p>Level: 2</p>
              <p>Game(s) completed: {3}</p>
              <p>Contribution(s): {1}</p>
            </div>
          </div>
          <SettingFilled className={classes.gearIcon} />
        </div>
        <Button className={classes.logoutBtn}>Log out</Button>
      </div>
      <div className={classes.dividerContainer}>
        <Divider className={classes.divider} />
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
