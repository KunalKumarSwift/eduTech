"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { ActivityOverview } from "./components/ActivityOverview";
import { ReminderFilters } from "./components/ReminderFilters";
import { ReminderItem } from "./components/ReminderItem";
import { AddReminderModal } from "./components/AddReminderModal";

const reminders = [
  {
    id: 1,
    title: "Web Development Project Due",
    date: "2024-03-20T23:59:59",
    course: "Web Development",
    priority: "high",
    type: "assignment",
    completed: false,
    description: "Final project submission including documentation",
  },
  // Add more reminders...
];

const activityData = [
  { day: "2024-03-01", value: 3 },
  { day: "2024-03-05", value: 5 },
  { day: "2024-03-10", value: 2 },
  // Add more activity data...
];

export default function Reminders() {
  const [showAddReminder, setShowAddReminder] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const headerAction = (
    <button
      onClick={() => setShowAddReminder(true)}
      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <PlusIcon className="h-5 w-5 mr-2" />
      <span className="hidden sm:inline">New Reminder</span>
      <span className="sm:hidden">New</span>
    </button>
  );

  return (
    <div>
      <Header
        title="Reminders & Tasks"
        subtitle="Stay organized with your academic tasks"
        action={headerAction}
      />

      {/* Activity Overview Chart */}
      <div className="mb-6">
        <ActivityOverview data={activityData} />
      </div>

      {/* Filters */}
      <div className="mb-6">
        <ReminderFilters
          filter={filter}
          searchTerm={searchTerm}
          onFilterChange={setFilter}
          onSearch={setSearchTerm}
        />
      </div>

      {/* Reminders List */}
      <div className="space-y-4">
        {reminders.map((reminder) => (
          <ReminderItem
            key={reminder.id}
            reminder={reminder}
            onToggleComplete={() => {}}
            onDelete={() => {}}
          />
        ))}
      </div>

      {/* Add Reminder Modal */}
      <AddReminderModal
        isOpen={showAddReminder}
        onClose={() => setShowAddReminder(false)}
        onSubmit={() => {}}
      />
    </div>
  );
}
