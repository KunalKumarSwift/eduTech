import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Activity {
  id: number;
  name: string;
  date: string;
  type: string;
  course: string;
}

export function ActivityList({ activities }: { activities: Activity[] }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm overflow-hidden sm:rounded-lg">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {activities.map((activity) => (
          <li key={activity.id}>
            <Link
              href="#"
              className="block hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                        {activity.name}
                      </p>
                      <div className="mt-2 flex items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {activity.date}
                        </span>
                        <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {activity.course}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
