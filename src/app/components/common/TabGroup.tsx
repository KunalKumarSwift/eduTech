interface Tab {
  name: string;
  icon?: any;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export function TabGroup({ tabs, activeTab, onChange }: TabGroupProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
      <div className="inline-flex md:flex w-max md:w-full space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onChange(tab.name)}
            className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap ${
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
    </div>
  );
}
