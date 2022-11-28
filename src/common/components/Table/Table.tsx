/* eslint-disable indent */
import { Button, Table as AntTable, TableProps as AntTableProps } from "antd";
import React from "react";
import styled from "styled-components";
import { getHighestContrastTextColor } from "../../utils/color-utils";
import { FlipTableRow, IFlipTableRowProps } from "./components/FlipTableRow";

export type TableProps<T> = AntTableProps<T> & {
  highlightColor?: string;
  hoverRow?: {
    renderHoverRow?: (record: T) => React.ReactNode;
  };
};

const defaultItemRender = (
  page: number,
  type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
  originalElement: React.ReactNode
) => {
  switch (type) {
    case "prev":
      return (
        <Button type="link" className="page-link">
          Previous
        </Button>
      );

    case "next":
      return (
        <Button type="link" className="page-link">
          Next
        </Button>
      );

    case "page":
      return (
        <Button>
          <span>{page}</span>
        </Button>
      );
    default:
      return originalElement;
  }
};

const StyledWrapper = styled.div<{
  highlightColor?: string;
}>`
  .ant-table-wrapper.custom-antd-table {
    & .ant-table table {
      .ant-checkbox-checked .ant-checkbox-inner,
      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background-color: ${({ highlightColor }) =>
          highlightColor ?? "#1890FF"};
        border-color: ${({ highlightColor }) => highlightColor ?? "#1890FF"};
      }

      & > tbody {
        & > tr > td:last-of-type {
          border-right: 1px solid
            ${({ highlightColor }) => highlightColor ?? "#1890FF"};
        }
        & > tr:first-child > td,
        .ant-table-measure-row + tr > td {
          border-top: 1px solid
            ${({ highlightColor }) => highlightColor ?? "#1890FF"};
        }
        & > tr > td:first-of-type {
          border-left: 1px solid
            ${({ highlightColor }) => highlightColor ?? "#1890FF"};
        }
        & > tr:last-of-type > td {
          border-bottom: 1px solid
            ${({ highlightColor }) => highlightColor ?? "#1890FF"};
        }
        & > tr {
          & > td:first-child {
            background: inherit;
            & .ant-checkbox-checked .ant-checkbox-inner {
              background-color: #ffffff;
              border-color: #ffffff;
              ::after {
                border-color: ${({ highlightColor }) =>
                  highlightColor ?? "#1890FF"};
              }
            }
          }
        }
      }
      & .ant-table-tbody > tr.ant-table-row-selected > td,
      & .ant-table-tbody > tr.ant-table-row:hover > td {
        background-color: ${({ highlightColor }) =>
          highlightColor ?? "#1890FF"};
        color: ${({ highlightColor }) =>
          getHighestContrastTextColor(highlightColor)};
      }
      & .ant-table-tbody > tr.ant-table-row-selected > td *,
      & .ant-table-tbody > tr.ant-table-row:hover > td * {
        color: ${({ highlightColor }) =>
          getHighestContrastTextColor(highlightColor)};
      }

      &
        .ant-table-tbody
        > tr.ant-table-row
        > .trt-flip-table-row-hover-content
        > .ant-row {
        background: linear-gradient(
          270deg,
          ${({ highlightColor }) => highlightColor ?? "#1890FF"} 0%,
          ${({ highlightColor }) => highlightColor ?? "#1890FF"} 60%,
          rgba(255, 255, 255, 0) 100%
        );
        color: ${({ highlightColor }) =>
          getHighestContrastTextColor(highlightColor)};
      }
    }
  }
`;

const Table = ({
  pagination,
  className,
  highlightColor,
  components,
  hoverRow,
  ...props
}: TableProps<any>) => {
  return (
    <StyledWrapper
      highlightColor={highlightColor}
      className="trt-table-wrapper"
    >
      <AntTable
        {...props}
        pagination={
          pagination !== false
            ? {
                itemRender: defaultItemRender,
                position: ["bottomRight"],
                ...pagination,
                locale: {
                  items_per_page: "",
                  ...pagination?.locale,
                },
              }
            : false
        }
        className={`custom-antd-table ${className ?? ""}`}
        components={{
          ...components,
          body: {
            row: hoverRow?.renderHoverRow
              ? (props: IFlipTableRowProps<any>) => (
                  <FlipTableRow
                    {...props}
                    renderHoverRow={hoverRow?.renderHoverRow}
                  />
                )
              : undefined,
            ...components?.body,
          },
        }}
      />
    </StyledWrapper>
  );
};
Table.Column = AntTable.Column;
Table.ColumnGroup = AntTable.ColumnGroup;
Table.SELECTION_ALL = AntTable.SELECTION_ALL;
Table.SELECTION_COLUMN = AntTable.SELECTION_COLUMN;
Table.SELECTION_INVERT = AntTable.SELECTION_INVERT;
Table.SELECTION_NONE = AntTable.SELECTION_NONE;
Table.Summary = AntTable.Summary;

export { Table };
