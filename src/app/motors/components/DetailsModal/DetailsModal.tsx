import React from "react";
import {
  CalendarOutlined,
  DashboardOutlined,
  FileTextOutlined,
  FireOutlined,
  InboxOutlined,
  LineChartOutlined,
  RedoOutlined,
  RollbackOutlined,
  SettingOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { Modal } from "../../../../common/components/Modal/Modal";
import { IAssetsProps } from "../../../../common/interfaces/assets.interfaces";
import styles from "./DetailsModal.module.scss";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import moment from "moment";
import { toNumber } from "../../../../common/utils/textUtils";

interface IDetailsModalProps {
  details: IAssetsProps;
  onCancel: () => void;
  visible: boolean;
  loading: boolean;
}

Exporting(Highcharts);

export const DetailsModal = ({
  onCancel,
  visible = false,
  details,
  loading,
}: IDetailsModalProps) => {
  return (
    <Modal
      onCancel={onCancel}
      visible={visible}
      centered
      width={"min(650px, 95vw)"}
      footer={
        <>
          <Button
            onClick={onCancel}
            icon={
              <RollbackOutlined className={styles["trt-motor-details-icon"]} />
            }
            type="link"
            className={styles["trt-footer-button"]}
          >
            CLOSE
          </Button>
        </>
      }
      bodyStyle={{
        maxHeight: "calc(100vh - 166px)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      title={
        <div>
          <Row
            align="middle"
            justify="start"
            style={{ flexDirection: "column" }}
          >
            <Typography.Title level={2}>{details.name}</Typography.Title>
            <Typography.Text>
              MOTOR HEALTH: {Number(details.healthscore)}%
            </Typography.Text>
          </Row>
        </div>
      }
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} className={styles["trt-chart-wrapper"]}>
          <Row gutter={[16, 16]}>
            <Col xs={10}></Col>
            <Col xs={14}>
              <Row gutter={[16, 16]}>
                <Col xs={24}>
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    SPECIFICATIONS
                  </Typography.Title>
                </Col>
                {details.specifications.maxTemp && (
                  <Col xs={24} md={8} className={styles["trt-motor-info"]}>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      <FireOutlined
                        className={styles["trt-specifications-icon"]}
                      />{" "}
                      {toNumber(details.specifications.maxTemp)} C°
                    </Typography.Title>
                    <Typography.Text>Temperature</Typography.Text>
                  </Col>
                )}
                {details.specifications.power && (
                  <Col xs={24} md={8} className={styles["trt-motor-info"]}>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      <ThunderboltOutlined
                        className={styles["trt-specifications-icon"]}
                      />{" "}
                      {toNumber(details.specifications.power)} kWh
                    </Typography.Title>
                    <Typography.Text>Killowatt Hour</Typography.Text>
                  </Col>
                )}
                {details.specifications.rpm && (
                  <Col xs={24} md={8} className={styles["trt-motor-info"]}>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      <RedoOutlined
                        className={styles["trt-specifications-icon"]}
                      />{" "}
                      {details.specifications.rpm} RPM
                    </Typography.Title>
                    <Typography.Text>Rotation per minute</Typography.Text>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Row gutter={[16, 16]} style={{ width: "100%" }} justify="center">
            <Col xs={24}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                GENERAL INFOS
              </Typography.Title>
            </Col>
            <Col xs={24} md={8} className={styles["trt-motor-info"]}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <SettingOutlined
                  className={styles["trt-specifications-icon"]}
                />{" "}
                {details.model}
              </Typography.Title>
              <Typography.Text>Asset Model</Typography.Text>
            </Col>
            <Col xs={24} md={8} className={styles["trt-motor-info"]}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <FileTextOutlined
                  className={styles["trt-specifications-icon"]}
                />{" "}
                {details.sensors}
              </Typography.Title>
              <Typography.Text>Sensors Model</Typography.Text>
            </Col>
            <Col xs={24} md={8} className={styles["trt-motor-info"]}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <LineChartOutlined
                  className={styles["trt-specifications-icon"]}
                />{" "}
                {details.healthscore}%
              </Typography.Title>
              <Typography.Text>Asset Health</Typography.Text>
            </Col>
            <Col xs={24} md={8} className={styles["trt-motor-info"]}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <InboxOutlined className={styles["trt-specifications-icon"]} />{" "}
                {details.metrics.totalCollectsUptime}
              </Typography.Title>
              <Typography.Text>Total Pickups</Typography.Text>
            </Col>
            <Col xs={24} md={8} className={styles["trt-motor-info"]}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <CalendarOutlined
                  className={styles["trt-specifications-icon"]}
                />{" "}
                {moment(details.metrics.lastUptimeAt).format("MM/DD/YYYY")}
              </Typography.Title>
              <Typography.Text>Last Update</Typography.Text>
            </Col>
            <Col xs={24} md={8} className={styles["trt-motor-info"]}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                <DashboardOutlined
                  className={styles["trt-specifications-icon"]}
                />{" "}
                {moment
                  .utc(
                    moment
                      .duration(details.metrics.totalUptime, "hours")
                      .as("milliseconds")
                  )
                  .format("HH:mm")}
                hours
              </Typography.Title>
              <Typography.Text>Total Uptime</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
