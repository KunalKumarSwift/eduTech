import { BarChart } from "../../components/charts/BarChart";
import { ChartContainer } from "../../components/common/ChartContainer";

interface ViewingStatsProps {
  data: Array<{
    x: string;
    y: number;
  }>;
}

export function ViewingStats({ data }: ViewingStatsProps) {
  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-4">Weekly Viewing Activity</h3>
      <div className="h-[calc(100%-2rem)]">
        <BarChart data={data} color="#4f46e5" height="100%" />
      </div>
    </div>
  );
}
