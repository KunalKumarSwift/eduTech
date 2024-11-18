import { CogIcon } from "@heroicons/react/24/outline";

interface ProfileHeaderProps {
  name: string;
  course: string;
  year: string;
  studentId: string;
  gpa: string;
  profilePicture: string;
}

export function ProfileHeader({
  name,
  course,
  year,
  studentId,
  gpa,
  profilePicture,
}: ProfileHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 p-1 bg-white dark:bg-gray-700 rounded-full shadow-sm">
            <CogIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {course} • {year}
          </p>
          <div className="mt-2 flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Student ID: {studentId}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              GPA: {gpa}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
