import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

interface ActivityData {
  day: string;
  value: number;
}

interface ActivityOverviewProps {
  data: ActivityData[];
}

export function ActivityOverview({ data }: ActivityOverviewProps) {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Weekly Activity Overview
      </h2>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "currentColor", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "currentColor", fontSize: 12 }}
              allowDecimals={false}
              domain={[0, "auto"]}
            />
            <Tooltip
              cursor={{ fill: "rgba(79, 70, 229, 0.1)" }}
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                color: "var(--foreground)",
              }}
            />
            <Bar
              dataKey="value"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
              animationDuration={300}
              className="dark:fill-indigo-400"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
