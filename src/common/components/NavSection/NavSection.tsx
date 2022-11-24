import { Col, Row, Typography } from "antd";
import { ReactNode } from "react";
import styles from "./NavSection.module.scss";

interface NavSectionProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  separator?: boolean;
}

export const NavSection = ({
  title,
  children,
  subTitle,
  separator,
}: NavSectionProps) => {
  return (
    <Col xs={24} className={styles["nav-section-wrapper"]}>
      <Typography.Text className={styles["nav-section-title"]}>
        {title}
      </Typography.Text>
      <Typography.Text className={styles["nav-section-subTitle"]}>
        {subTitle}
      </Typography.Text>
      {separator && <div className={styles["trt-separator"]} />}
      <Row gutter={[0, 16]} className={styles["nav-children-wrapper"]}>
        {children}
      </Row>
    </Col>
  );
};
