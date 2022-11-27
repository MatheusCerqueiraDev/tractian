import { Collapse, Row, Typography } from "antd";
import styles from "./FooterAccordeon.module.scss";

const { Panel } = Collapse;

export const FooterAccordeon = () => {
  return (
    <Collapse ghost accordion style={{ maxWidth: "100%" }}>
      <Panel
        header={
          <>
            <Typography.Text>ABOUT US</Typography.Text>
          </>
        }
        key="1"
        className={styles["trt-panel-title"]}
      >
        <Row gutter={[0, 16]} className={styles["trt-accordion-footer"]}>
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
        </Row>
      </Panel>
      <Panel
        header={
          <>
            <Typography.Text>CONTENT</Typography.Text>
          </>
        }
        key="2"
        className={styles["trt-panel-title"]}
      >
        <Row gutter={[0, 16]} className={styles["trt-accordion-footer"]}>
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
        </Row>
      </Panel>
      <Panel
        header={
          <>
            <Typography.Text>CONTACT US</Typography.Text>
          </>
        }
        key="3"
        className={styles["trt-panel-title"]}
      >
        <Row gutter={[0, 16]} className={styles["trt-accordion-footer"]}>
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
        </Row>
      </Panel>
    </Collapse>
  );
};
