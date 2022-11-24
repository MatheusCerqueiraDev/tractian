import React from "react";
import { Card as AntCard, CardProps as AntCardProps } from "antd";

export type CardProps = AntCardProps & {
  shadow?: boolean;
};

export const Card = ({ shadow = false, className, ...props }: CardProps) => {
  return (
    <div className="trt-card-wrapper">
      <AntCard className={`${shadow ? "trt-card-shadow" : ""}`} {...props} />
    </div>
  );
};
