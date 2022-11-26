import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Card } from "../../common/components/Card/Card";
import { Chart } from "../../common/components/Chart/Chart";
import { SkeletonBuilder } from "../../common/components/SkeletonBuilder/SkeletonBuilder";
import { IAssetsProps } from "../../common/interfaces/assets.interfaces";
import { getAssets } from "../../common/services/assets.service";
import { showNotificationError } from "../../common/utils/notifications.utils";
import { spanForThreeInline } from "../../common/utils/PWASpans";

export const Dashboard = () => {
  // const { assets, setAssets, loading, setLoading } = useContext(AssetsContext);

  const [assets, setAssets] = useState<IAssetsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadAssets = useCallback(async () => {
    setLoading(true);
    try {
      const loadedAssets = await getAssets();
      console.log("oi", loadedAssets);
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
