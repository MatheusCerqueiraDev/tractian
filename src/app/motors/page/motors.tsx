import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Card } from "../../../common/components/Card/Card";
import { SkeletonBuilder } from "../../../common/components/SkeletonBuilder/SkeletonBuilder";
import { IAssetsProps } from "../../../common/interfaces/assets.interfaces";
import { showNotificationError } from "../../../common/utils/notifications.utils";
import { getAssets } from "../../../pages/dashboard/services/dashboard.service";
import { MotorCard } from "../components/MotorCard/MotorCard";
import styles from "./motors.module.scss";

const formColSpans = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 12,
  xl: 12,
  xxl: 12,
};

export const Motors = () => {
  const [assets, setAssets] = useState<IAssetsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadAssets = useCallback(async () => {
    setLoading(true);
    try {
      const loadedAssets = await getAssets();
      setAssets(loadedAssets);
    } catch (error: any) {
      showNotificationError({
        message: "Houve um impasse ao carregar ativos.",
        description: error?.response?.data?.message,
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <Row className={styles["trt-motors-card-wrapper"]} gutter={[16, 16]}>
      {loading
        ? Array(6)
            .fill(0)
            .map((_, i) => (
              <Col xs={12}>
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
              <Col key={asset.id} {...formColSpans}>
                <MotorCard motor={asset} />
              </Col>
            );
          })}
    </Row>
  );
};
