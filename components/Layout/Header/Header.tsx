import React, { useState } from "react";
import cx from "classnames";
import { Menu, Row, Col, Button, Popover, Badge } from "antd";
import { SettingFilled } from "@ant-design/icons";
import styles from "../../../styles/Header.less";

const searchEngine = "Google";

const Header = (props: any) => {

  const { isFirstScreen = false, isMoblie } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const menuMode = isMoblie ? "inline" : "horizontal";
  const headerClassName = cx({
    clearfix: true,
    "home-nav-white": !isFirstScreen,
  });

  const onMenuVisibleChange = (visible: any) => {
    setMenuVisible(visible);
  };
  const handleShowMenu = () => {
    setMenuVisible(true);
  };

  const handleHideMenu = () => {
    setMenuVisible(false);
  };

  const handleSelectFilter = (value: any, option: any) => {
    const optionValue = option.props["data-label"];
    return (
      optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1
    );
  };
  const menu = [
    <Button className="header-lang-button" ghost size="small" key="lang">
      English
    </Button>,
    <Menu mode={menuMode} defaultSelectedKeys={["home"]} id="nav" key="nav">
      <Menu.Item key="home">首页</Menu.Item>
      <Menu.Item key="docs/spec">指引</Menu.Item>
      <Menu.Item key="docs/react">组件</Menu.Item>
      <Menu.Item key="docs/pattern">模式</Menu.Item>
      <Menu.Item key="docs/resource">资源</Menu.Item>
      <Menu.Item key="pro">
        <a
          href="http://pro.ant.design"
          className="header-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          PRO
          <span
            style={{
              display: "inline-block",
              position: "relative",
              top: -2,
              width: 18,
            }}
          >
            <Badge dot />
          </span>
        </a>
      </Menu.Item>
    </Menu>,
  ];

  return (
    <header id="header" className={cx(headerClassName, styles.header)}>
      {menuMode === "inline" ? (
        <Popover
          overlayClassName="popover-menu"
          placement="bottomRight"
          content={menu}
          trigger="click"
          visible={menuVisible}
          arrowPointAtCenter
          onVisibleChange={onMenuVisibleChange}
        >
          <SettingFilled />
        </Popover>
      ) : null}
      <Row>
        <Col lg={4} md={5} sm={24} xs={24}>
          <a id="logo">
            <img
              alt="logo"
              src="https://vertikal-elagage.re"
            />
            <span>Ant Design</span>
          </a>
        </Col>
        <Col lg={20} md={19} sm={0} xs={0}>
          {menuMode === "horizontal" ? menu : null}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
