import { LineChart } from "../../components/charts/LineChart";
import { ChartContainer } from "../../components/common/ChartContainer";

interface ViewingStatsProps {
  data: Array<{
    x: string;
    y: number;
  }>;
}

export function ViewingStats({ data }: ViewingStatsProps) {
  return (
    <ChartContainer title="Weekly Viewing Activity">
      <LineChart data={data} />
    </ChartContainer>
  );
}
