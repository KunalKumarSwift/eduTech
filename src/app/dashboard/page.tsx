"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpenIcon,
  ClipboardDocumentIcon,
  ChartBarIcon,
  UserGroupIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { StatsCard } from "../components/common/StatsCard";
import { ActivityList } from "./components/ActivityList";

const stats = [
  {
    name: "Courses Enrolled",
    value: "5",
    icon: BookOpenIcon,
    trend: "+1 this semester",
    trendUp: true, // Add trendUp property
    color: "text-blue-600",
  },
  {
    name: "Assignments Due",
    value: "3",
    icon: ClipboardDocumentIcon,
    trend: "2 due tomorrow",
    trendUp: false, // Add trendUp property
    color: "text-red-600",
  },
  {
    name: "Average Grade",
    value: "85%",
    icon: ChartBarIcon,
    trend: "+5% from last term",
    trendUp: true, // Add trendUp property
    color: "text-green-600",
  },
  {
    name: "Attendance Rate",
    value: "92%",
    icon: UserGroupIcon,
    trend: "Last 30 days",
    trendUp: true, // Add trendUp property
    color: "text-purple-600",
  },
];

const recentActivity = [
  {
    id: 1,
    name: "Submitted assignment for Web Development",
    date: "2 hours ago",
    type: "submission",
    course: "Web Development",
  },
  {
    id: 2,
    name: "Attended Data Structures lecture",
    date: "1 day ago",
    type: "attendance",
    course: "Data Structures",
  },
  {
    id: 3,
    name: "Received grade for Algorithms quiz",
    date: "2 days ago",
    type: "grade",
    course: "Algorithms",
  },
];

export default function Dashboard() {
  return (
    <div className="bg-[var(--background)]">
      <Header
        title="Welcome back, John!"
        subtitle="Here's what's happening with your courses."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <StatsCard
            key={stat.name}
            title={stat.name}
            value={stat.value}
            trend={stat.trend}
            trendUp={stat.trendUp} // Pass trendUp prop
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-6 md:mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h2>
          <Link
            href="/activity"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center"
          >
            View all
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ActivityList activities={recentActivity} />
      </div>

      {/* Quick Actions */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Upcoming Deadlines
          </h3>
          {/* Add upcoming deadlines content */}
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Course Progress
          </h3>
          {/* Add course progress content */}
        </div>
      </div>
    </div>
  );
}
