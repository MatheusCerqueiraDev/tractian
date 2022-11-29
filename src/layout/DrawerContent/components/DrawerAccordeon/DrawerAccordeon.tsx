import React, { useContext } from "react";
import {
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Col, Collapse, Row, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../../../context";
import styles from "./DrawerAccordeon.module.scss";

const { Panel } = Collapse;

export const DrawerAccordeon = () => {
  const { setIsCollapsed } = useContext(MenuContext);

  function closeDrawer() {
    setIsCollapsed(false);
  }
  //Created this function to prevent re-rendering
  //on passing {() => } inside onClick

  return (
    <>
      <Collapse ghost accordion>
        <Panel
          header={
            <>
              <AppstoreOutlined className={styles["trt-nav-icon"]} />
              <Typography.Text>DASHBOARD</Typography.Text>
            </>
          }
          key="1"
          className={styles["trt-panel-title"]}
        >
          <NavLink
            to="/motors"
            onClick={closeDrawer}
            className={styles["trt-nav-link"]}
          >
            MOTORS
          </NavLink>
        </Panel>
        <Panel
          header={
            <>
              <TeamOutlined className={styles["trt-nav-icon"]} />
              <Typography.Text>CUSTOMERS</Typography.Text>
            </>
          }
          key="2"
          className={styles["trt-panel-title"]}
        >
          <Row gutter={[0, 16]}>
            <NavLink
              to="/users"
              onClick={closeDrawer}
              className={styles["trt-nav-link"]}
            >
              USERS
            </NavLink>
          </Row>
        </Panel>
        <Panel
          header={
            <>
              <BankOutlined className={styles["trt-nav-icon"]} />
              <Typography.Text>SUBSIDIRIES</Typography.Text>
            </>
          }
          key="3"
          className={styles["trt-panel-title"]}
        >
          <NavLink
            to="/companies"
            onClick={closeDrawer}
            className={styles["trt-nav-link"]}
          >
            COMPANYS
          </NavLink>
          <NavLink
            to="/units"
            onClick={closeDrawer}
            className={styles["trt-nav-link"]}
          >
            UNITS
          </NavLink>
        </Panel>
      </Collapse>
      <Col xs={24} style={{ position: "absolute", bottom: 10 }}>
        <Typography.Link>Tractian LLC</Typography.Link>
      </Col>
    </>
  );
};
