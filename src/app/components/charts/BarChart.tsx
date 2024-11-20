import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { BarChartProps } from "./types";

export function BarChart({
  data,
  color = "#4f46e5",
  height = "100%",
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          className="stroke-gray-200 dark:stroke-gray-700"
        />
        <XAxis
          dataKey="x"
          tick={{ fill: "currentColor" }}
          axisLine={{ stroke: "currentColor" }}
        />
        <YAxis
          tick={{ fill: "currentColor" }}
          axisLine={{ stroke: "currentColor" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--background)",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            color: "var(--foreground)",
          }}
        />
        <Bar
          dataKey="y"
          fill={color}
          radius={[4, 4, 0, 0]}
          className="dark:fill-indigo-400"
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
