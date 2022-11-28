import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import SolidGauge from "highcharts/modules/solid-gauge";
import HighchartsMore from "highcharts/highcharts-more";

if (typeof Highcharts === "object" && typeof window !== "undefined") {
  HighchartsMore(Highcharts);
  SolidGauge(Highcharts);
}

interface DataProps {
  data: number;
  height?: number;
  title?: string;
  color?: string;
  dataLabelYAxis?: number;
}

export const Chart = ({
  data,
  height = 250,
  title,
  color = "#FFFFFF",
  dataLabelYAxis = -12,
}: DataProps) => {
  const options = {
    chart: {
      backgroundColor: null,
      height: height,
      type: "solidgauge",
    },

    title: {
      text: title ?? undefined,
      style: { color: color },
    },

    pane: {
      center: ["50%", "50%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions?.legend?.backgroundColor || "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },

    series: [
      {
        data: [data],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            `<span style="font-size:25px; color:${color}">{y} %</span><br/>` +
            `<span style="font-size:12px;opacity:0.4; color:${color} ">Health Status</span>` +
            "</div>",
        },
        tooltip: {
          valueSuffix: "Health Status",
        },
      },
    ],

    // Horizontal Axis
    yAxis: {
      max: 100,
      min: 0,
      stops: [
        [0.1, "#DF5353"], // red
        [0.5, "#DDDF0D"], // yellow
        [0.9, "#55BF3B"], // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: { distance: 25, style: { color: color, fontSize: 18 } },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: dataLabelYAxis,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
