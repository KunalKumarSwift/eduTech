import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: any; // Using any for icon component type
  color: string;
}

export function StatsCard({
  title,
  value,
  trend,
  trendUp,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <div className="mt-1 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {value}
            </p>
          </div>
        </div>
        <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {trendUp ? (
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 text-red-500" />
        )}
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
          {trend}
        </span>
      </div>
    </div>
  );
}
