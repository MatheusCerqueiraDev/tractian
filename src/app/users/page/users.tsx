import { Col, Row } from "antd";
import React, { useContext } from "react";
import { Card } from "../../../common/components/Card/Card";
import { SkeletonBuilder } from "../../../common/components/SkeletonBuilder/SkeletonBuilder";
import { DataContext } from "../../../common/context";
import { spanForThreeInline } from "../../../common/utils/PWASpans";
import { UserCard } from "../components/UserCard/UserCard";
import styles from "./users.module.scss";

export const Users = () => {
  const { users, loading } = useContext(DataContext);

  return (
    <Row className={styles["trt-user-card-wrapper"]} gutter={[16, 16]}>
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => (
              <Col {...spanForThreeInline}>
                <Card shadow size="small" key={`trt-user-card-skeleton${i}`}>
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
        : users?.map((user, i) => {
            return (
              <Col key={`trt-user-${i + 1}`} {...spanForThreeInline}>
                <UserCard user={user} />
              </Col>
            );
          })}
    </Row>
  );
};
