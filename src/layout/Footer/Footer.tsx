import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Col, Image, Layout, Row, Typography } from "antd";
import { Link, NavLink } from "react-router-dom";
import { NavSection } from "../../common/components/NavSection/NavSection";
import logo from "./assets/logoSvg.svg";
import styles from "./Footer.module.scss";

export const LayoutFooter = () => {
  return (
    <Layout.Footer className={styles["trt-footer-wrapper"]}>
      <Col xs={24}>
        <Row justify="space-between">
          <Col>
            <Link to="/">
              <Image
                src={logo}
                preview={false}
                width={200}
                height="fit-content"
              />
            </Link>
          </Col>
          <Col>
            <Row justify="space-between" gutter={[16, 0]}>
              <Col>
                <a href="https://www.linkedin.com/company/get-tractian/">
                  <LinkedinOutlined className={styles["trt-social-icons"]} />
                </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com/get.tractian/">
                  <InstagramOutlined className={styles["trt-social-icons"]} />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/get.tractian/">
                  <FacebookOutlined className={styles["trt-social-icons"]} />
                </a>
              </Col>
              <Col>
                <a href="https://www.youtube.com/channel/UCmrRZOCxvMbDnR5haGfFe8w">
                  <LinkedinOutlined className={styles["trt-social-icons"]} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <div className={styles["trt-footer-separator"]} />
      <Row justify="space-around">
        <Col xs={8} className={styles["trt-footer-columns"]}>
          <NavSection title="ABOUT TRACTIAN">
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
          </NavSection>
        </Col>
        <Col xs={8}>
          <NavSection title="CONTENT">
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
          </NavSection>
        </Col>
        <Col xs={8}>
          <NavSection title="CONTACT US">
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
            <NavLink to="/motors" className={styles["trt-nav-link"]}>
              Meet Tractian
            </NavLink>
          </NavSection>
        </Col>
        <Col xs={24} style={{ margin: "20px 0 0" }}>
          <Typography.Link>Tractian LLC</Typography.Link>
        </Col>
      </Row>
    </Layout.Footer>
  );
};
