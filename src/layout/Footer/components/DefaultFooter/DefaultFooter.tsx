import { Col } from "antd";
import { NavSection } from "../../../../common/components/NavSection/NavSection";
import styles from "./DefaultFooter.module.scss";

export const DefaultFooter = () => {
  return (
    <>
      <Col xs={24} md={8} className={styles["trt-footer-columns"]}>
        <NavSection title="ABOUT US">
          <a
            href="https://tractian.com/en/"
            target="_blank"
            rel="noreferrer"
            className={styles["trt-nav-link"]}
          >
            Meet Tractian
          </a>
          <a
            href="https://tractian.com/en/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className={styles["trt-nav-link"]}
          >
            Privacy policy
          </a>
          <a
            href="https://tractian.com/en/careers"
            target="_blank"
            rel="noreferrer"
            className={styles["trt-nav-link"]}
          >
            Careers
          </a>
        </NavSection>
      </Col>
      <Col xs={24} md={8} className={styles["trt-footer-columns"]}>
        <NavSection title="CONTENT">
          <a
            href="https://tractian.com/en/calculator"
            target="_blank"
            rel="noreferrer"
            className={styles["trt-nav-link"]}
          >
            ROI Calculator
          </a>
          <a
            href="https://tractian.com/en/checklists"
            target="_blank"
            rel="noreferrer"
            className={styles["trt-nav-link"]}
          >
            Checklists
          </a>
        </NavSection>
      </Col>
      <Col xs={24} md={8} className={styles["trt-footer-columns"]}>
        <NavSection title="CONTACT US">
          <a
            href="mailto= matheus.cerqueira1208@gmail.com"
            className={styles["trt-nav-link"]}
          >
            Developers
          </a>
          <a
            href="https://www.linkedin.com/company/tractian/"
            className={styles["trt-nav-link"]}
          >
            Tractian
          </a>
          <a
            href="https://www.linkedin.com/in/matheusdecarvalho1/"
            className={styles["trt-nav-link"]}
          >
            Support
          </a>
        </NavSection>
      </Col>
    </>
  );
};
