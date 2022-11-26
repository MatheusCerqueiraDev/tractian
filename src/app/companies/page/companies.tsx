import { Col, Row } from "antd";
import React, { useContext } from "react";
import { Card } from "../../../common/components/Card/Card";
import { SkeletonBuilder } from "../../../common/components/SkeletonBuilder/SkeletonBuilder";
import { DataContext } from "../../../common/context";
import { spanForThreeInline } from "../../../common/utils/PWASpans";
import { CompaniesCard } from "../components/CardCompanies";
import styles from "./companies.module.scss";

export const Companies = () => {
  const { companies, loading } = useContext(DataContext);

  return (
    <Row className={styles["trt-company-card-wrapper"]} gutter={[16, 16]}>
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => (
              <Col {...spanForThreeInline}>
                <Card shadow size="small" key={`trt-motor-card-skeleton${i}`}>
                  <SkeletonBuilder
                    items={[
                      {
                        paragraph: false,
                        title: false,
                        avatar: true,
                        span: 6,
                        offset: 10,
                      },
                      { paragraph: false, quantity: 1, span: 12, offset: 6 },
                      {
                        paragraph: false,
                        title: { width: "100%" },
                        span: 14,
                        offset: 5,
                      },
                      {
                        paragraph: false,
                        title: { width: "100%" },
                        quantity: 1,
                        span: 24,
                      },
                    ]}
                  />
                </Card>
              </Col>
            ))
        : companies?.map((company, i) => {
            return (
              <Col key={`trt-company-${i + 1}`} {...spanForThreeInline}>
                <CompaniesCard company={company} />
              </Col>
            );
          })}
    </Row>
  );
};
