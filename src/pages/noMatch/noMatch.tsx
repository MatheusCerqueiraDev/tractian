import { Button, Col, Image, Row, Typography } from "antd";
import styles from "./noMatch.module.scss";
import errorPageImage from "./assets/404.svg";

export const NoMatch = () => {
  return (
    <>
      <Row className={styles["trt-page-content"]}>
        <Image src={errorPageImage} alt="Page not found" preview={false} />
        <Col xs={24} sm={12}>
          <Typography.Title level={1} className={styles["trt-error-text"]}>
            You didn't break the internet, but we can't find what you looking
            for.
          </Typography.Title>
        </Col>
      </Row>
      <Col xs={24}>
        <Row align="middle" justify="center">
          <Button
            href="/"
            type="primary"
            size="large"
            className={styles["trt-return-home-button"]}
          >
            BACK HOME
          </Button>
        </Row>
      </Col>
    </>
  );
};
