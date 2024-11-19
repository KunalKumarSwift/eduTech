interface CourseResult {
  id: number;
  course: string;
  code: string;
  grade: string;
  score: number;
  credits: number;
  status: string;
  semester: string;
}

interface CourseResultsTableProps {
  results: CourseResult[];
}

export function CourseResultsTable({ results }: CourseResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Course
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Code
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Grade
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Score
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Credits
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Semester
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {results.map((result) => (
            <tr
              key={result.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {result.course}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {result.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    result.grade.startsWith("A")
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : result.grade.startsWith("B")
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : result.grade.startsWith("C")
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {result.grade}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {result.score}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {result.credits}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    result.status === "completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                >
                  {result.status.charAt(0).toUpperCase() +
                    result.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {result.semester}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
