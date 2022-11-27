import React, { useContext } from "react";
import { Layout } from "antd";
import { LayoutHeader } from "./Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { SidebarNav } from "./NavPages/NavPages";
import { MenuContext } from "./context";
import { LayoutFooter } from "./Footer/Footer";

export const TractionLayout: React.FunctionComponent = () => {
  const { isMobile } = useContext(MenuContext);
  return (
    <>
      <Layout className={styles["trt-layout"]}>
        <LayoutHeader />
        {!isMobile && (
          <Layout.Sider className={styles["trt-layout-sider"]}>
            <SidebarNav />
          </Layout.Sider>
        )}

        <Layout.Content
          style={{ padding: "8px 16px", height: "100%", maxWidth: "100%" }}
        >
          <Outlet />
        </Layout.Content>

        <LayoutFooter />
      </Layout>
    </>
  );
};
