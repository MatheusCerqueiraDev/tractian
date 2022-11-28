import { Row } from "antd";
import React, { useContext } from "react";
import { Spin } from "../../../../common/components/Spin/Spin";
import { DataContext } from "../../../../common/context/data";
import { UnitsTable } from "../components/UnitsTable/UnitsTable";

export const Units = () => {
  const { units, loading } = useContext(DataContext);

  return (
    <Row gutter={[16, 16]}>
      {loading ? <Spin /> : <UnitsTable units={units} />}
    </Row>
  );
};
