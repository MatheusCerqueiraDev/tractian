import { CloseOutlined } from "@ant-design/icons";
import { Modal as AntModal, ModalProps as AntModalProps } from "antd";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Modal.module.scss";

export interface ModalProps extends AntModalProps {
  children?: React.ReactNode;
}

export const Modal = ({ className, ...props }: ModalProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);

  const handleScrollShadowDisplay = useCallback(() => {
    setShowTopShadow((targetRef?.current?.scrollTop ?? 0) > 1);
    setShowBottomShadow(
      (targetRef.current?.scrollTop ?? 0) <
        (targetRef.current?.scrollHeight ?? 0) -
          (targetRef.current?.clientHeight ?? 0) -
          1
    );
  }, [targetRef?.current]);

  useLayoutEffect(() => {
    if (targetRef?.current && targetRef.current !== null) {
      handleScrollShadowDisplay();
      targetRef.current.addEventListener("scroll", handleScrollShadowDisplay);
    }
  }, []);

  return (
    <div className={styles["trt-card-wrapper"]}>
      <AntModal
        modalRender={(node) => <Card bodyStyle={{ padding: 0 }}>{node}</Card>}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        bodyProps={{ ref: targetRef }}
        {...props}
        className={`trt-custom-modal ${className ?? ""} ${
          showTopShadow ? "trt-custom-modal--top-shadow-scroll" : ""
        }  ${showBottomShadow ? "trt-custom-modal--bottom-shadow-scroll" : ""}`}
        closeIcon={<CloseOutlined className={styles["trt-modal-close-icon"]} />}
      />
    </div>
  );
};
