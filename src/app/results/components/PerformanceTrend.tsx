import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { week: "Week 1", score: 85 },
  { week: "Week 2", score: 88 },
  { week: "Week 3", score: 82 },
  { week: "Week 4", score: 89 },
  { week: "Week 5", score: 90 },
  { week: "Week 6", score: 87 },
];

export function PerformanceTrend() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={performanceData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255, 255, 255, 0.1)"
          className="dark:opacity-20"
        />
        <XAxis
          dataKey="week"
          tick={{ fill: "#666" }}
          className="dark:text-gray-400"
        />
        <YAxis
          domain={[60, 100]}
          tick={{ fill: "currentColor" }}
          className="dark:text-gray-400"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--bg-color)",
            border: "1px solid var(--border-color)",
            borderRadius: "4px",
            color: "var(--text-color)",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{
            stroke: "#3b82f6",
            strokeWidth: 2,
            r: 4,
            fill: "#fff",
          }}
          activeDot={{
            r: 6,
            stroke: "#3b82f6",
            strokeWidth: 2,
            fill: "#fff",
          }}
          name="Performance Score"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
