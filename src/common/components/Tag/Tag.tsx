import React from "react";
import { Tag as AntTag, TagProps } from "antd";

export type ITagProps = TagProps & {
  wrapperClassName?: string;
  size?: "small" | "default" | "large";
};

export const colorDictionary: Record<string, string> = {
  link: "#1890FF",
  primary: "#4e128c",
  secondary: "#fa4515",
  error: "#FF4D4F",
  success: "#52C41A",
  warning: "##FAAD14",
};

export const Tag = ({
  wrapperClassName = "",
  size = "default",
  color,
  ...props
}: ITagProps) => {
  return (
    <span className={`tag-wrapper-${size} ${wrapperClassName}`}>
      <AntTag
        color={color ? colorDictionary[color] ?? color : color}
        {...props}
      />
    </span>
  );
};
