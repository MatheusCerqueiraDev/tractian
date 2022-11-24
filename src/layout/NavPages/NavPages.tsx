import { NavLink } from "react-router-dom";
import { Row } from "antd";
import { NavSection } from "../../common/components/NavSection/NavSection";
import styles from "./NavPages.module.scss";
import { BankOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

export function SidebarNav() {
  return (
    <div className={styles["trt-sider-wrapper"]}>
      <Row gutter={[8, 24]}>
        <NavSection title="DASHBOARD">
          <NavLink to="/motors" className={styles["trt-nav-link"]}>
            <SettingOutlined className={styles["trt-nav-icon"]} /> MOTORS
          </NavLink>
        </NavSection>
        <NavSection title="CUSTOMERS">
          <NavLink to="/users" className={styles["trt-nav-link"]}>
            <UserOutlined className={styles["trt-nav-icon"]} /> USERS
          </NavLink>
          <NavLink to="/companys" className={styles["trt-nav-link"]}>
            <BankOutlined className={styles["trt-nav-icon"]} />
            COMPANYS
          </NavLink>
        </NavSection>
      </Row>
    </div>
  );
}
