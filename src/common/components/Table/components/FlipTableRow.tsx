import { Row } from "antd";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

export interface IFlipTableRowProps<T = any> {
  children?: (React.ReactNode & { props: { record: T } })[];
  className?: string;
  "data-row-key"?: string;
  renderHoverRow?: (record: T) => React.ReactNode;
}

export const FlipTableRow = <T,>({
  children,
  className,
  renderHoverRow,
  ...props
}: IFlipTableRowProps<T>) => {
  const record = children?.[0]?.props?.record;
  const targetRef = useRef<HTMLTableRowElement>(null);
  const [rowHeight, setRowHeight] = useState(0);

  const handleResize = useCallback(
    () => setRowHeight(targetRef?.current?.clientHeight ?? 0),
    [targetRef?.current]
  );

  useLayoutEffect(() => {
    if (targetRef?.current && targetRef.current !== null) {
      handleResize();
      window?.addEventListener("resize", handleResize);
    }
    return () => window?.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <tr
        ref={targetRef}
        className={`trt-flip-table-row-main-content ${className}`}
        {...props}
      >
        {children}
        {!!renderHoverRow && (
          <div className="trt-flip-table-row-hover-content ant-table-cell ant-table-cell-fix-right">
            <Row
              justify="end"
              align="middle"
              wrap={false}
              style={{ height: rowHeight }}
            >
              {renderHoverRow(record)}
            </Row>
          </div>
        )}
      </tr>
    </>
  );
};
