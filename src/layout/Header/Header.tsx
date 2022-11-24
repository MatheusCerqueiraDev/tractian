import styles from "./Header.module.scss";
import { useContext } from "react";
import { MenuContext } from "../context";
import { Button, Col, Image, Layout, Row } from "antd";
import logo from "./assets/logoSvg.svg";
import { MenuOutlined } from "@ant-design/icons";
import { DotedCarousel } from "../../common/components/DotedCarousel/DotedCarousel";
import { DrawerContent } from "../DrawerContent/DrawerContent";
import { Link } from "react-router-dom";

//Created assets folder in Header component folder to solve this:
//Relative imports outside of src/ are not supported.
//You can either move it inside src/, or add a symlink to it from project's node_modules/.*

export function LayoutHeader() {
  const { setIsCollapsed, isMobile } = useContext(MenuContext);

  return (
    <Layout.Header
      className={styles["trt-header"]}
      style={{ padding: "0 20px" }}
    >
      <Col>
        <Link to="/">
          <Image src={logo} preview={false} width={200} height="fit-content" />
        </Link>
      </Col>
      {isMobile ? (
        <>
          <Button
            onClick={() => setIsCollapsed(true)}
            icon={<MenuOutlined className={styles["trt-drawer-open-icon"]} />}
            type="ghost"
            className={styles["trt-drawer-button"]}
          />

          <DrawerContent />
        </>
      ) : (
        <>
          <Col>
            <Row justify="space-between"></Row>
          </Col>
          <Col xs={4}>
            <div>
              <DotedCarousel centerMode={true} autoplay>
                <div style={{ textAlign: "center" }}>ab</div>
                <div style={{ textAlign: "center" }}>cd</div>
                <div style={{ textAlign: "center" }}>ef</div>
                <div style={{ textAlign: "center" }}>gh</div>
              </DotedCarousel>
            </div>
          </Col>
        </>
      )}
    </Layout.Header>
  );
}
