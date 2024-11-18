import {
  PlayIcon,
  BookmarkIcon,
  ShareIcon,
  CloudArrowDownIcon,
  ClockIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

interface RecordingProps {
  recording: {
    id: number;
    title: string;
    course: string;
    instructor: string;
    duration: string;
    date: string;
    thumbnail: string;
    views: number;
    progress: number;
    bookmarked: boolean;
  };
}

export function RecordingCard({ recording }: RecordingProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img
          src={recording.thumbnail}
          alt={recording.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <PlayIcon className="h-8 w-8 text-gray-900" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-white text-sm">
          {recording.duration}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {recording.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {recording.course} • {recording.instructor}
            </p>
          </div>
          <button
            className={`p-1 rounded-full ${
              recording.bookmarked
                ? "text-yellow-500 hover:text-yellow-600"
                : "text-gray-400 hover:text-gray-500"
            }`}
          >
            <BookmarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-1.5 rounded-full"
              style={{ width: `${recording.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {recording.date}
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {recording.views} views
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <ShareIcon className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <CloudArrowDownIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
