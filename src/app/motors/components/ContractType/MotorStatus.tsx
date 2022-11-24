import { ReactNode } from "react";
import { Tag } from "../../../../common/components/Tag/Tag";
import styles from "./MotorStatus.module.scss";

export const motorStatusDictionary: Record<string, ReactNode> = {
  inAlert: (
    <Tag color="#F94B4E" className={styles["trt-motor-status-type"]}>
      ALERT
    </Tag>
  ),
  inOperation: (
    <Tag color="#52c41a" className={styles["trt-motor-status-type"]}>
      OPERATING
    </Tag>
  ),
  inDowntime: (
    <Tag color="#FAAD14" className={styles["trt-motor-status-type"]}>
      INACTIVE
    </Tag>
  ),
};
