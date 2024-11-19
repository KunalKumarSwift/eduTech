import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const gradeData = [
  { name: "A", value: 30, color: "#22c55e" }, // green-500
  { name: "B", value: 40, color: "#3b82f6" }, // blue-500
  { name: "C", value: 20, color: "#eab308" }, // yellow-500
  { name: "D", value: 8, color: "#f97316" }, // orange-500
  { name: "F", value: 2, color: "#ef4444" }, // red-500
];

export function GradeDistribution() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={gradeData}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={5}
          dataKey="value"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            name,
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#666"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {`${name} (${value}%)`}
              </text>
            );
          }}
        >
          {gradeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          iconSize={10}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
