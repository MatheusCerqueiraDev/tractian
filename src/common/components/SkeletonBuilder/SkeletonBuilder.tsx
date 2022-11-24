import { Col, Row, Skeleton, SkeletonProps } from "antd";
import React from "react";

export interface IItemConfig extends SkeletonProps {
  quantity?: number;
  span?: number;
  offset?: number;
}

export interface ISkeletonBuilderProps {
  items?: IItemConfig[];
  gutter?: number | [number, number];
}

export const SkeletonBuilder = ({
  items,
  gutter = [24, 24],
}: ISkeletonBuilderProps) => {
  return (
    <Row gutter={gutter}>
      {items?.map(({ quantity = 1, span = 24, offset = 0, ...skeletonProps }) =>
        Array(quantity)
          .fill("")
          ?.map((_, index) => (
            <Col key={`skeleton-builder-${index}`} span={span} offset={offset}>
              <Skeleton {...skeletonProps} />
            </Col>
          ))
      )}
    </Row>
  );
};
