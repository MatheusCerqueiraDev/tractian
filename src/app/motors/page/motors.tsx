import React, { useContext } from "react";
import { Col, Row } from "antd";
import { Card } from "../../../common/components/Card/Card";
import { SkeletonBuilder } from "../../../common/components/SkeletonBuilder/SkeletonBuilder";
import { DataContext } from "../../../common/context";
import { MotorCard } from "../components/MotorCard/MotorCard";
import styles from "./motors.module.scss";
import { spanForTwoInline } from "../../../common/utils/PWASpans";

export const Motors = () => {
  const { assets, loading } = useContext(DataContext);

  return (
    <Row className={styles["trt-motors-card-wrapper"]} gutter={[16, 16]}>
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => (
              <Col {...spanForTwoInline}>
                <Card shadow size="small" key={`trt-motor-card-skeleton${i}`}>
                  <SkeletonBuilder
                    items={[
                      { paragraph: false, quantity: 2, span: 12 },
                      {
                        paragraph: false,
                        title: false,
                        avatar: true,
                        span: 8,
                        offset: 4,
                      },
                      {
                        paragraph: { width: "100%", rows: 2 },
                        span: 12,
                        title: false,
                      },
                      { paragraph: false, quantity: 2, span: 12 },
                    ]}
                  />
                </Card>
              </Col>
            ))
        : assets?.map((asset) => {
            return (
              <Col key={asset.id} {...spanForTwoInline}>
                <MotorCard motor={asset} loading={loading} />
              </Col>
            );
          })}
    </Row>
  );
};
