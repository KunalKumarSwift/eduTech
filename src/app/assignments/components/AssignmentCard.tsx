import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

interface AssignmentProps {
  assignment: {
    id: number;
    title: string;
    course: string;
    dueDate: string;
    status: string;
    progress: number;
    priority: string;
    type: string;
    description?: string;
  };
}

export function AssignmentCard({ assignment }: AssignmentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {assignment.status === "completed" ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            ) : (
              <ClockIcon className="h-6 w-6 text-yellow-500" />
            )}
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {assignment.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {assignment.course}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                assignment.priority === "high"
                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              }`}
            >
              {assignment.priority}
            </span>
            <div className="text-right">
              <div className="text-sm text-gray-900 dark:text-white">
                Due {new Date(assignment.dueDate).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {assignment.progress}% Complete
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${assignment.progress}%` }}
            ></div>
          </div>
        </div>
        {assignment.description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {assignment.description}
          </p>
        )}
      </div>
    </div>
  );
}
