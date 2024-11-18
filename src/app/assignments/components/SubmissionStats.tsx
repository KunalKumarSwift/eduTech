import { BarChart } from "../../components/charts/BarChart";
import { ChartContainer } from "../../components/common/ChartContainer";

interface SubmissionStatsProps {
  data: Array<{
    month: string;
    onTime: number;
    late: number;
    missed: number;
  }>;
}

export function SubmissionStats({ data }: SubmissionStatsProps) {
  const formattedData = data.map((item) => ({
    x: item.month,
    y: item.onTime + item.late + item.missed,
    onTime: item.onTime,
    late: item.late,
    missed: item.missed,
  }));

  return (
    <ChartContainer title="Submission Statistics">
      <BarChart data={formattedData} />
    </ChartContainer>
  );
}
