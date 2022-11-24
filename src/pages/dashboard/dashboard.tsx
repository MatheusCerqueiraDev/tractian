import { Col, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "../../common/components/Card/Card";
import { IAssetsProps } from "../../common/interfaces/assets.interfaces";
import { showNotificationError } from "../../common/utils/notifications.utils";
import { getAssets } from "./services/dashboard.service";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Dashboard = (props: HighchartsReact.Props) => {
  const [assets, setAssets] = useState<IAssetsProps[]>([]);
  const [loading, setLoading] = useState(false);

  // const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // const options: Highcharts.Options = {
  //   title: {
  //     text: "My chart",
  //   },
  //   series: [
  //     {
  //       type: "",
  //       data: [1, 2, 3],
  //     },
  //   ],
  // };

  const loadAssets = useCallback(async () => {
    setLoading(true);
    try {
      const loadedAssets = await getAssets();
      setAssets(loadedAssets);
      // setOptions({ title: { text: "My chart" }, series: [{ data: data }] });
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

  return <Row gutter={[16, 16]}></Row>;
};
