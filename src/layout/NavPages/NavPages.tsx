import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Menu, Row, Typography } from "antd";
import { NavSection } from "../../common/components/NavSection/NavSection";
import styles from "./NavPages.module.scss";
import {
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../common/context/auth";

export function SidebarNav() {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <div className={styles["trt-sider-wrapper"]}>
      <Row gutter={[8, 24]}>
        <Dropdown
          overlay={
            <Menu style={{ minWidth: 0, marginTop: 8 }}>
              <Menu.Item key="trt-sign-out" onClick={handleSignOut}>
                <Typography.Text>Log out</Typography.Text>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link">Hi! {user?.name ?? "User"}</Button>
        </Dropdown>
        <NavSection
          title="DASHBOARD"
          icon={<AppstoreOutlined className={styles["trt-nav-icon"]} />}
        >
          <NavLink to="/motors" className={styles["trt-nav-link"]}>
            MOTORS
          </NavLink>
        </NavSection>
        <NavSection
          title="CUSTOMERS"
          icon={<TeamOutlined className={styles["trt-nav-icon"]} />}
        >
          <NavLink to="/users" className={styles["trt-nav-link"]}>
            USERS
          </NavLink>
        </NavSection>
        <NavSection
          title="SUBSIDIRIES"
          icon={<BankOutlined className={styles["trt-nav-icon"]} />}
        >
          <NavLink to="/companies" className={styles["trt-nav-link"]}>
            COMPANIES
          </NavLink>
        </NavSection>
      </Row>
    </div>
  );
}
