import {
  AppstoreOutlined,
  BankOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Collapse, Row, Typography } from "antd";
import { useContext } from "react";
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
      <Collapse ghost>
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
            <SettingOutlined className={styles["trt-nav-icon"]} /> MOTORS
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
          <Row
            gutter={[0, 16]}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <NavLink
              to="/motors"
              onClick={closeDrawer}
              className={styles["trt-nav-link"]}
            >
              <UserOutlined className={styles["trt-nav-icon"]} /> USERS
            </NavLink>
            <NavLink
              to="/motors"
              onClick={closeDrawer}
              className={styles["trt-nav-link"]}
            >
              <BankOutlined className={styles["trt-nav-icon"]} /> COMPANYS
            </NavLink>
          </Row>
        </Panel>
      </Collapse>
      <Col xs={24} style={{ position: "absolute", bottom: 10 }}>
        <Typography.Link>Tractian LLC</Typography.Link>
      </Col>
    </>
  );
};
