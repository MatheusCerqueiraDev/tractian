import React, { useContext } from "react";
import { Col, Row } from "antd";
import { Card } from "../../common/components/Card/Card";
import { Chart } from "../../common/components/Chart/Chart";
import { SkeletonBuilder } from "../../common/components/SkeletonBuilder/SkeletonBuilder";
import { spanForThreeInline } from "../../common/utils/PWASpans";
import { DataContext } from "../../common/context/data";

export const Dashboard = () => {
  const { assets, loading } = useContext(DataContext);

  return (
    <Row gutter={[16, 16]}>
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => (
              <Col {...spanForThreeInline} key={`trt-motor-card-skeleton${i}`}>
                <Card shadow size="small">
                  <SkeletonBuilder
                    items={[
                      { paragraph: false, quantity: 1, span: 24 },
                      {
                        paragraph: false,
                        title: false,
                        avatar: true,
                        span: 10,
                        offset: 10,
                      },

                      { paragraph: false, quantity: 2, span: 12 },
                    ]}
                  />
                </Card>
              </Col>
            ))
        : assets?.map((asset, i) => {
            return (
              <Col key={`trt-dashboard-item-${i}`} {...spanForThreeInline}>
                <Chart data={asset.healthscore} title={asset.name} />
              </Col>
            );
          })}
    </Row>
  );
};
