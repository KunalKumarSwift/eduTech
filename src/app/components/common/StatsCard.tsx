import { StatsCardProps } from "./types";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

export function StatsCard({
  title,
  value,
  trend,
  icon: Icon,
  color,
}: StatsCardProps) {
  const trendUp = trend?.includes("+");

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow duration-200">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {title}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {value}
            </div>
            {trend && (
              <div
                className={`mt-1 text-sm ${
                  trendUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend}
              </div>
            )}
          </div>
          <Icon className="h-12 w-12 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </div>
  );
}
