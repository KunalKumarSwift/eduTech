import { ChartContainerProps } from "./types";

export function ChartContainer({
  title,
  children,
  className = "mb-8",
}: ChartContainerProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 ${className}`}
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="h-64">{children}</div>
    </div>
  );
}
