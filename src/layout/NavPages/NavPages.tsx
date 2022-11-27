import React from "react";
import { NavLink } from "react-router-dom";
import { Row } from "antd";
import { NavSection } from "../../common/components/NavSection/NavSection";
import styles from "./NavPages.module.scss";
import {
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export function SidebarNav() {
  return (
    <div className={styles["trt-sider-wrapper"]}>
      <Row gutter={[8, 24]}>
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
