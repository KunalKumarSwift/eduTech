export interface ChartDataPoint {
  x: string | number;
  y: number;
}

export interface LineChartProps {
  data: ChartDataPoint[];
  color?: string;
  fillColor?: string;
  height?: number | string;
}

export interface BarChartProps {
  data: ChartDataPoint[];
  color?: string;
  height?: number | string;
}

export interface PieChartData {
  id: string;
  value: number;
  color: string;
  label: string;
}

export interface PieChartProps {
  data: PieChartData[];
  height?: number | string;
}
