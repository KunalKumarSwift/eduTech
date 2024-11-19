interface ReminderFiltersProps {
  filter: string;
  searchTerm: string; // Add this line
  onFilterChange: (filter: string) => void;
  onSearch: (searchTerm: string) => void; // Add this line
}

export function ReminderFilters({
  filter,
  onFilterChange,
  onSearch,
}: ReminderFiltersProps) {
  return (
    <div className="flex space-x-4 mb-6">
      <div className="flex-1">
        <input
          type="search"
          placeholder="Search reminders..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
      </div>
      <select
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="high">High Priority</option>
      </select>
    </div>
  );
}
