import { Col, Row, Typography } from "antd";
import { Card } from "../../../common/components/Card/Card";
import { ICompanyCardProps } from "../../../common/interfaces/companies.interface";

export const CompaniesCard = ({ company }: ICompanyCardProps) => {
  return (
    <Card shadow size="small">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24}>
          <Typography.Title level={3}>{company.name}</Typography.Title>
        </Col>
      </Row>
    </Card>
  );
};
