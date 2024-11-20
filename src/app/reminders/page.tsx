"use client";

import { useState, useMemo } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { ActivityOverview } from "./components/ActivityOverview";
import { ReminderFilters } from "./components/ReminderFilters";
import { ReminderItem } from "./components/ReminderItem";
import { AddReminderModal } from "./components/AddReminderModal";
import Calendar from "react-calendar";
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isWithinInterval,
} from "date-fns";
import "react-calendar/dist/Calendar.css";

const reminders = [
  {
    id: 1,
    title: "Web Development Project Due",
    date: "2024-11-20T23:59:59",
    course: "Web Development",
    priority: "high",
    type: "assignment",
    completed: false,
    description: "Final project submission including documentation",
  },
  {
    id: 2,
    title: "Database Midterm",
    date: "2024-11-15T14:30:00",
    course: "Database Systems",
    priority: "high",
    type: "exam",
    completed: false,
    description: "Chapters 1-5 covered",
  },
  {
    id: 3,
    title: "Algorithm Assignment",
    date: "2024-11-18T23:59:59",
    course: "Data Structures",
    priority: "medium",
    type: "assignment",
    completed: true,
    description: "Implementation of sorting algorithms",
  },
];

export default function Reminders() {
  const [showAddReminder, setShowAddReminder] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<"week" | "month" | "year">("week");

  // Get week's activity data based on selected date
  const weekActivityData = useMemo(() => {
    const weekStart = startOfWeek(selectedDate);
    const weekEnd = endOfWeek(selectedDate);
    const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

    return daysInWeek.map((day) => {
      const formattedDay = format(day, "yyyy-MM-dd");
      const reminderCount = reminders.filter(
        (reminder) =>
          format(new Date(reminder.date), "yyyy-MM-dd") === formattedDay
      ).length;

      return {
        day: format(day, "EEE"), // Short day name (Mon, Tue, etc.)
        value: reminderCount,
      };
    });
  }, [selectedDate]);

  const getFilteredReminders = () => {
    let filtered = reminders;

    // Filter by date range
    filtered = filtered.filter((reminder) => {
      const reminderDate = new Date(reminder.date);
      const currentDate = selectedDate;

      const reminderDateStr = format(reminderDate, "yyyy-MM-dd");
      const selectedDateStr = format(currentDate, "yyyy-MM-dd");

      switch (viewMode) {
        case "week":
          return reminderDateStr === selectedDateStr;
        case "month":
          return (
            reminderDate.getMonth() === currentDate.getMonth() &&
            reminderDate.getFullYear() === currentDate.getFullYear()
          );
        case "year":
          return reminderDate.getFullYear() === currentDate.getFullYear();
        default:
          return reminderDateStr === selectedDateStr;
      }
    });

    // Filter by status
    if (filter !== "all") {
      filtered = filtered.filter((reminder) =>
        filter === "completed" ? reminder.completed : !reminder.completed
      );
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (reminder) =>
          reminder.title.toLowerCase().includes(search) ||
          reminder.course.toLowerCase().includes(search) ||
          reminder.description.toLowerCase().includes(search)
      );
    }

    return filtered;
  };

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
    <div className="space-y-6">
      <Header
        title="Reminders & Tasks"
        subtitle="Stay organized with your academic tasks"
        action={headerAction}
      />

      {/* Calendar and Activity Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Calendar View
            </h2>
            <select
              value={viewMode}
              onChange={(e) =>
                setViewMode(e.target.value as "week" | "month" | "year")
              }
              className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>

          <div className="h-[400px] calendar-container">
            <Calendar
              onChange={(value, event) => {
                if (value instanceof Date) {
                  setSelectedDate(value);
                }
              }}
              value={selectedDate}
              view={viewMode === "year" ? "year" : "month"}
              className="calendar-wrapper"
              showFixedNumberOfWeeks={true}
              tileClassName={({ date }) => {
                const hasReminder = reminders.some(
                  (reminder) =>
                    format(new Date(reminder.date), "yyyy-MM-dd") ===
                    format(date, "yyyy-MM-dd")
                );
                return hasReminder ? "has-reminder" : "";
              }}
            />
          </div>
        </div>

        {/* Activity Overview Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
          <div className="h-[400px]">
            <ActivityOverview data={weekActivityData} />
          </div>
        </div>
      </div>

      {/* Filters and Reminders List Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 md:p-6">
          {/* Filters */}
          <div className="mb-4">
            <ReminderFilters
              filter={filter}
              searchTerm={searchTerm}
              onFilterChange={setFilter}
              onSearch={setSearchTerm}
            />
          </div>

          {/* Reminders List */}
          <div className="space-y-4">
            {getFilteredReminders().map((reminder) => (
              <ReminderItem
                key={reminder.id}
                reminder={reminder}
                onToggleComplete={() => {}}
                onDelete={() => {}}
              />
            ))}
          </div>
        </div>
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
