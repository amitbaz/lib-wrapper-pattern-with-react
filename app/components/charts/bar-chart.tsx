"use client";
import chartsWrapper from "@/app/chartsWrapper";

chartsWrapper.echarts.use([
  chartsWrapper.BarChart,
  chartsWrapper.CanvasRenderer,
]);

export default function BarChartComponent() {
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
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
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
