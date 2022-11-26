import React, { useContext, useState } from "react";
import styles from "./MotorCard.module.scss";
import { Button, Col, Image, Row, Switch, Tooltip, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "../../../../common/components/Card/Card";
import {
  EUAssetStatus,
  IMotorCardProps,
} from "../../../../common/interfaces/assets.interfaces";
import { motorStatusDictionary } from "../ContractType/MotorStatus";
import { DetailsModal } from "../DetailsModal/DetailsModal";

export const MotorCard = ({ motor, loading }: IMotorCardProps) => {
  const [detailModalActive, setDetailModalActive] = useState(false);

  return (
    <>
      <DetailsModal
        details={motor}
        loading={loading}
        onCancel={() => setDetailModalActive(false)}
        visible={detailModalActive}
      />
      <Card
        shadow
        size="small"
        bodyStyle={{ maxWidth: "100%", cursor: "pointer" }}
        onClick={() => setDetailModalActive(true)}
      >
        <Row
          gutter={[8, 8]}
          style={{
            margin: "0 24px 0 8px",
            minHeight: 170,
          }}
        >
          <Col xs={24}>
            <Row
              wrap={false}
              justify="space-between"
              align="middle"
              style={{ height: "100%", maxWidth: "100%" }}
            >
              <Col flex="auto">
                <Typography.Title
                  level={3}
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    maxWidth: "100%",
                  }}
                  ellipsis={{
                    tooltip: `${motor?.name}`,
                  }}
                >
                  {motor?.name}
                </Typography.Title>
              </Col>
              <Tooltip
                title={`ADMINS can turn ${
                  motor.status === EUAssetStatus.inDowntime ? "on" : "off"
                }`}
                mouseEnterDelay={0}
                mouseLeaveDelay={0}
                placement="bottom"
              >
                <Col flex="none" className={styles["trt-motor-switch"]}>
                  <Switch
                    className={styles["trt-motor-inner-switch"]}
                    checked={
                      motor.status === EUAssetStatus.inDowntime ? false : true
                    }
                    loading={loading}
                    disabled
                  />
                </Col>
              </Tooltip>
            </Row>
          </Col>
          <Col xs={24}>
            <Row
              justify="space-between"
              align="middle"
              style={{ height: "100%" }}
            >
              <Col xs={8}>
                <Image
                  preview={false}
                  src={motor?.image}
                  alt={motor?.name}
                  style={{ maxWidth: "100%", maxHeight: "90px" }}
                  height="auto"
                  width="auto"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} className={styles["trt-card-footer"]}>
            <Button
              type="link"
              onClick={() => setDetailModalActive(true)}
              className={styles["trt-motor-modal-button"]}
              icon={<EyeOutlined className={styles["trt-modal-icon"]} />}
            >
              DETAILS
            </Button>

            {motorStatusDictionary[motor.status]}
          </Col>
        </Row>
        <div
          className={styles["trt-motor-active"]}
          style={{
            background:
              motor.status === EUAssetStatus.inDowntime
                ? "#00000026"
                : "#52c41a",
          }}
        />
      </Card>
    </>
  );
};
