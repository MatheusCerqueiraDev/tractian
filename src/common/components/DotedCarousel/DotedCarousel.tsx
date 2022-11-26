import React, { ReactNode, useRef } from "react";
import { Carousel, CarouselProps } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import styled from "styled-components";
import _ from "lodash";
import { WheelEventHandler } from "react";

//Carousel based on:
//https://github.com/akiran/react-slick
//Antd uses it for they carousel but don't map all API references

export interface ICarouselProps extends CarouselProps {
  children?: ReactNode;
  className?: string;
  highlightColor?: string;
  autoplay?: boolean;
}

const DotedCarouselWrapper = styled.div<{
  highlightColor?: string;
}>`
  border: 3px solid #ffffff;
  border-radius: 8px;
  overflow: visible;
  padding: 4px;
  text-align: center;

  .trt-carousel-dots {
    display: flex;
    align-items: center;
    justify-content: space-between;

    bottom: unset;
    height: 20px;
    margin: 4px;
    &:hover {
      filter: brightness(1.2);
    }

    li,
    li.slick-active {
      align-content: center;
      margin-left: 0;

      button {
        background: ${({ highlightColor }) => highlightColor ?? "#ffffff"};
        border-radius: 32px;
        height: 12px;
      }
    }
  }
`;

export const DotedCarousel = ({
  children,
  className,
  highlightColor,
  centerMode = true,
  autoplay = false,
  ...props
}: ICarouselProps) => {
  const targetRef = useRef<CarouselRef>(null);

  const throttleNext = _.throttle(() => targetRef?.current?.next(), 100);
  const throttlePrev = _.throttle(() => targetRef?.current?.prev(), 100);

  const handleScroll: WheelEventHandler = (event) => {
    if (event.shiftKey && event.deltaY !== 0)
      return event.deltaY > 0 ? throttleNext() : throttlePrev();
    else if (event.deltaX !== 0)
      return event.deltaX > 0 ? throttleNext() : throttlePrev();
  };

  return (
    <DotedCarouselWrapper
      highlightColor={highlightColor}
      onWheelCapture={handleScroll}
    >
      <Carousel
        ref={targetRef}
        dots={{ className: "trt-carousel-dots" }}
        className={`${className ?? ""}`}
        centerMode={centerMode}
        autoplay={autoplay}
        {...props}
      >
        {children}
      </Carousel>
    </DotedCarouselWrapper>
  );
};
