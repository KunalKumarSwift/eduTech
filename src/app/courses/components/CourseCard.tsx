import { ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { PieChart } from "../../components/charts/PieChart";

interface CourseCardProps {
  course: {
    id: number;
    name: string;
    instructor: string;
    progress: number;
    nextClass: string;
    students: number;
    grade: string;
    completion: number;
    category: string;
    color: string;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  const progressData = [
    {
      id: "Completed",
      label: "Completed",
      value: course.progress,
      color: "hsl(207, 90%, 54%)",
    },
    {
      id: "Remaining",
      label: "Remaining",
      value: 100 - course.progress,
      color: "hsl(207, 90%, 87%)",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {course.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {course.instructor}
            </p>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium bg-${course.color}-100 text-${course.color}-800`}
          >
            {course.category}
          </span>
        </div>

        <div className="mt-4 h-32">
          <PieChart data={progressData} />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Next: {new Date(course.nextClass).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center">
            <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {course.students} Students
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {course.progress}% Complete
          </p>
        </div>
      </div>
    </div>
  );
}
