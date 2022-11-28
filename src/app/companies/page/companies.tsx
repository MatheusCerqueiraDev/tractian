import React, { useContext } from "react";
import { Row } from "antd";
import { DataContext } from "../../../common/context/data";
import { CompaniesTable } from "../components/CompaniesTable/CompaniesTable";
import { Spin } from "../../../common/components/Spin/Spin";

export const Companies = () => {
  const { companies, loading } = useContext(DataContext);

  return (
    <Row gutter={[16, 16]}>
      {loading ? <Spin /> : <CompaniesTable companies={companies} />}
    </Row>
  );
};
