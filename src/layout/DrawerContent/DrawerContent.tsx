import React, { useContext } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Drawer, Image } from "antd";
import { MenuContext } from "../context";
import drawerLogo from "./assets/drawerLogo.svg";
import { DrawerAccordeon } from "./components/DrawerAccordeon/DrawerAccordeon";
import styles from "./DrawerContent.module.scss";

export const DrawerContent = () => {
  const { isCollapsed, setIsCollapsed } = useContext(MenuContext);

  return (
    <Drawer
      closeIcon={
        <Image
          src={drawerLogo}
          preview={false}
          width={200}
          height="fit-content"
        />
      }
      extra={
        <CloseOutlined
          className={styles["trt-drawer-close-icon"]}
          onClick={() => setIsCollapsed(false)}
        />
      }
      headerStyle={{ border: "none" }}
      maskClosable
      onClose={() => setIsCollapsed(false)}
      open={isCollapsed}
      placement="right"
      width="100%"
    >
      <DrawerAccordeon />
    </Drawer>
  );
};
