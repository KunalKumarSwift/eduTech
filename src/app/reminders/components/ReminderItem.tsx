import {
  CalendarIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Reminder {
  id: number;
  title: string;
  date: string;
  course: string;
  priority: string;
  completed: boolean;
  description?: string;
}

interface ReminderItemProps {
  reminder: Reminder;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ReminderItem({
  reminder,
  onToggleComplete,
  onDelete,
}: ReminderItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={reminder.completed}
            onChange={() => onToggleComplete(reminder.id)}
            className="h-4 w-4 text-indigo-600 rounded"
          />
          <div>
            <h3
              className={`text-lg font-medium ${
                reminder.completed
                  ? "text-gray-500 line-through"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {reminder.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {reminder.course}
              </span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  reminder.priority === "high"
                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }`}
              >
                {reminder.priority}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {new Date(reminder.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
              <ClockIcon className="h-4 w-4 mr-1" />
              {new Date(reminder.date).toLocaleTimeString()}
            </div>
          </div>
          <button
            onClick={() => onDelete(reminder.id)}
            className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {reminder.description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {reminder.description}
        </p>
      )}
    </div>
  );
}
