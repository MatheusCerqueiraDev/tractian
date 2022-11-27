import React, { useContext } from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Image, Layout, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "./assets/logoSvg.svg";
import styles from "./Footer.module.scss";
import { MenuContext } from "../context";
import { DefaultFooter } from "./components/DefaultFooter/DefaultFooter";
import { FooterAccordeon } from "./components/FooterAccordeon/FooterAccordeon";

export const LayoutFooter = () => {
  const { isMobile } = useContext(MenuContext);

  return (
    <Layout.Footer className={styles["trt-footer-wrapper"]}>
      <Col xs={24}>
        <Row justify="space-between" gutter={[0, 24]}>
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
                  <YoutubeOutlined className={styles["trt-social-icons"]} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <div className={styles["trt-footer-separator"]} />
      <Row>
        {isMobile ? <FooterAccordeon /> : <DefaultFooter />}
        <Col xs={24} style={{ margin: "20px 0 0" }}>
          <Row justify="space-between" align="middle">
            {!isMobile && (
              <>
                <Col xs={24} className={styles["trt-footer-title"]}>
                  <Typography.Text>RECOGNITION</Typography.Text>
                </Col>
                <Col className={styles["trt-footer-certificades"]} xs={12}>
                  <Image
                    preview={false}
                    width={70}
                    src="https://imgix.tractian.com/website/components/footer/general/capterra-badge-2022.png?auto=format&fit=max&w=256"
                  />
                  <Image
                    preview={false}
                    width={70}
                    src="https://imgix.tractian.com/website/components/footer/general/getAppWhite.png?auto=format&fit=max&w=256"
                  />
                  <Image
                    preview={false}
                    width={70}
                    src="https://imgix.tractian.com/website/components/footer/general/logo-front-runners-2022.png?auto=format&fit=max&w=256"
                  />
                  <Image
                    preview={false}
                    width={70}
                    src="https://imgix.tractian.com/website/components/footer/general/logo-gptw.png?auto=format&fit=max&w=256"
                  />
                  <Image
                    preview={false}
                    width={70}
                    src="https://imgix.tractian.com/website/components/footer/general/logo-sup-endeavor.png?auto=format&fit=max&w=256"
                  />
                </Col>
              </>
            )}

            <Col style={{ alignSelf: "center" }}>
              <Typography.Link>Tractian LLC</Typography.Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  );
};
