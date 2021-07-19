import React, { useState } from "react";
import { Menu, Button, Card } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
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
      <div className={classes.openProfile}>
        <div className="d-flex">
          <div className={classes.avatar}>
            <Image
              src="/Pierre_pro.jpg"
              layout="fill"
              objectFit="cover"
              alt="profile picture"
              className={classes.avatarImage}
            />
          </div>
          <div className={classes.informationContainer}>
            <p>Hello</p>
            <p>Hello</p>
          </div>
        </div>
      </div>
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" icon={<ContainerOutlined />}>
        Option 3
      </Menu.Item>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

export default SideBar;
