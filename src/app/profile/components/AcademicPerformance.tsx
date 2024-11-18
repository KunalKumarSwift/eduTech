import { LineChart } from "../../components/charts/LineChart";

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
        <LineChart data={performanceData} />
      </div>
    </div>
  );
}
