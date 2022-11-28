import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { MenuContext } from "../context";
import { Button, Col, Image, Layout, Tooltip, Typography } from "antd";
import { FallOutlined, MenuOutlined, RiseOutlined } from "@ant-design/icons";
import { DotedCarousel } from "../../common/components/DotedCarousel/DotedCarousel";
import { DrawerContent } from "../DrawerContent/DrawerContent";
import { Link } from "react-router-dom";
import { removeDecimal } from "../../common/utils/textUtils";
import { DataContext } from "../../common/context/data";

export function LayoutHeader() {
  const { setIsCollapsed, isMobile } = useContext(MenuContext);
  const { assets } = useContext(DataContext);

  return (
    <Layout.Header
      className={styles["trt-header"]}
      style={{ padding: "0 20px" }}
    >
      <Col xs={5}>
        <Link to="/">
          <Image
            src="/assets/logo.svg"
            preview={false}
            width="100%"
            height="100%"
          />
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
          {/* <Col>
            <Row justify="space-between"></Row>
          </Col> */}
          <Col xs={5}>
            <DotedCarousel
              centerMode={true}
              autoplay
              className={styles["trt-header-carousel"]}
            >
              {assets &&
                assets.map((asset, i) => (
                  <Tooltip
                    title={asset.name}
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    placement="bottom"
                    key={`trt-carousel-item-${i}`}
                  >
                    <Typography.Text
                      className={styles["trt-asset-health-score"]}
                    >
                      {removeDecimal(asset.healthscore)}%
                    </Typography.Text>
                    {asset.healthscore >= 75 ? (
                      <RiseOutlined className={styles["trt-status-rising"]} />
                    ) : (
                      <FallOutlined
                        className={styles["trt-status-decreasing"]}
                      />
                    )}
                  </Tooltip>
                ))}
            </DotedCarousel>
          </Col>
        </>
      )}
    </Layout.Header>
  );
}
