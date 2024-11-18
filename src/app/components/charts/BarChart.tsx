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
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="y" fill={color} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
