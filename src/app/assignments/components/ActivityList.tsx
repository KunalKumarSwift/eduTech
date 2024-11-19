import {
  CheckCircleIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

interface Activity {
  id: number;
  name: string;
  date: string;
  type: "submission" | "attendance" | "grade";
  course: string;
}

interface ActivityListProps {
  activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "submission":
        return <CheckCircleIcon className="h-8 w-8 text-green-500" />;
      case "attendance":
        return <UserGroupIcon className="h-8 w-8 text-blue-500" />;
      case "grade":
        return <AcademicCapIcon className="h-8 w-8 text-purple-500" />;
      default:
        return null;
    }
  };

  const getActivityBackground = (type: Activity["type"]) => {
    switch (type) {
      case "submission":
        return "bg-green-50 dark:bg-green-900/20";
      case "attendance":
        return "bg-blue-50 dark:bg-blue-900/20";
      case "grade":
        return "bg-purple-50 dark:bg-purple-900/20";
      default:
        return "bg-gray-50 dark:bg-gray-900/20";
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className={`flex items-start space-x-4 p-4 rounded-lg ${getActivityBackground(
            activity.type
          )}`}
        >
          <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {activity.name}
            </p>
            <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{activity.course}</span>
              <span>•</span>
              <span>{activity.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
