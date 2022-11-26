import React from "react";
import { Spin as AntSpin } from "antd";
import styles from "./Spin.module.scss";

export const Spin = () => {
  return (
    <div className={styles["trt-spin-wrapper"]}>
      <AntSpin size="large" />
    </div>
  );
};
