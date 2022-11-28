import React, { ReactNode, useContext } from "react";
import { Layout } from "antd";
import { LayoutHeader } from "./Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { SidebarNav } from "./NavPages/NavPages";
import { MenuContext } from "./context";
import { LayoutFooter } from "./Footer/Footer";

export interface TractionLayoutProps {
  children: ReactNode;
}

export const TractionLayout = ({ children }: TractionLayoutProps) => {
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
          {children}
        </Layout.Content>

        <LayoutFooter />
      </Layout>
    </>
  );
};
