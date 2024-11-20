import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface AcademicPerformanceProps {
  performanceData: Array<{
    x: string;
    y: number;
  }>;
}

export function AcademicPerformance({
  performanceData,
}: AcademicPerformanceProps) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Academic Performance
      </h3>
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={performanceData}
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
              domain={[0, 100]}
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
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              className="dark:fill-indigo-400"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
