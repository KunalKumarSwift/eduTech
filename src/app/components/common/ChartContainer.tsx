export function ChartContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}
