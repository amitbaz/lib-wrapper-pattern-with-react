import * as echarts from "echarts/core";
import { LineChart, BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import ReactEChartsCore from "echarts-for-react/lib/core";

const chartsWrapper = {
  echarts,
  LineChart,
  BarChart,
  CanvasRenderer,
  ReactEChartsCore,
};

export default chartsWrapper;
