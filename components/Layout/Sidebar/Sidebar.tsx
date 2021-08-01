import React, { useState, useEffect } from "react";

import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faAddressCard } from "@fortawesome/free-solid-svg-icons";

import { ImenuKeys } from "interfaces/layout_interfaces";

import classes from "./Sidebar.module.less";
import ProfileCard from "./ProfileCard/ProfileCard";
import { Iuser } from "interfaces/layout_interfaces.js";

const navbarMenu = (): JSX.Element => {
  const items: Readonly<ImenuKeys>[] = [
    { title: "Discover a country", icon: faGlobeAsia },
    { title: "Who am I?", icon: faAddressCard },
  ];

  return (
    <>
      {items?.map((el: ImenuKeys) => {
        return (
          <Menu.Item
            key={el?.title}
            className={classes.menuItem}
            icon={
              <FontAwesomeIcon className={classes.navIcon} icon={el?.icon} />
            }
          >
            {el?.title}
          </Menu.Item>
        );
      })}
    </>
  );
};

const SideBar = () => {
  const [toggleCollapsed, setToggleColapsed] = useState(false);
  const [user, setUser] = useState<Iuser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //@ts-ignore
      const newUser: Iuser = JSON.parse(localStorage.getItem("user"));
      setUser(newUser);
    }
  }, []);

  return (
    <Menu
      id="mainMenu"
      className={classes.sidebar}
      defaultSelectedKeys={["Discover a country"]}
      mode="inline"
      inlineCollapsed={toggleCollapsed}
    >
      <ProfileCard user={user}/>
      {navbarMenu()}
    </Menu>
  );
};

export default SideBar;
