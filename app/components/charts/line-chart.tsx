"use client";
import chartsWrapper from "@/app/chartsWrapper";

chartsWrapper.echarts.use([
  chartsWrapper.LineChart,
  chartsWrapper.CanvasRenderer,
]);

export default function LineChartComponent() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  return (
    <chartsWrapper.ReactEChartsCore
      echarts={chartsWrapper.echarts}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      option={option as any}
    />
  );
}
