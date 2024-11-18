import { TabGroupProps } from "./types";

export function TabGroup({ tabs, activeTab, onTabChange }: TabGroupProps) {
  return (
    <div className="flex space-x-1 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => onTabChange(tab.name)}
          className={`flex items-center px-4 py-2 rounded-lg ${
            activeTab === tab.name
              ? "bg-indigo-600 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {tab.icon && <tab.icon className="h-5 w-5 mr-2" />}
          {tab.name}
        </button>
      ))}
    </div>
  );
}
