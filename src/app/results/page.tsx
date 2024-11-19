"use client";

import { useState } from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { StatsCard } from "./components/StatsCard";
import { GradeDistribution } from "./components/GradeDistribution";
import { PerformanceTrend } from "./components/PerformanceTrend";
import { CourseResultsTable } from "./components/CourseResultsTable";

const statsData = [
  {
    title: "Current GPA",
    value: "3.8",
    trend: "+0.2 from last semester",
    trendUp: true,
    icon: AcademicCapIcon,
    color: "text-green-600",
  },
  {
    title: "Completed Courses",
    value: "12",
    trend: "2 in progress",
    trendUp: true,
    icon: BookOpenIcon,
    color: "text-blue-600",
  },
  {
    title: "Assignment Score",
    value: "95%",
    trend: "Average submission rate",
    trendUp: true,
    icon: ClipboardDocumentIcon,
    color: "text-indigo-600",
  },
  {
    title: "Class Rank",
    value: "Top 5%",
    trend: "Among 200 students",
    trendUp: true,
    icon: UserGroupIcon,
    color: "text-purple-600",
  },
];

const courseResults = [
  {
    id: 1,
    course: "Web Development",
    code: "CS301",
    grade: "A",
    score: 92,
    credits: 3,
    status: "completed",
    semester: "Fall 2023",
  },
  {
    id: 2,
    course: "Database Systems",
    code: "CS302",
    grade: "A-",
    score: 88,
    credits: 3,
    status: "completed",
    semester: "Fall 2023",
  },
  // Add more course results...
];

export default function Results() {
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [selectedView, setSelectedView] = useState("all");

  const headerAction = (
    <div className="flex space-x-2">
      <select
        value={selectedPeriod}
        onChange={(e) => setSelectedPeriod(e.target.value)}
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      >
        <option value="current">Current Semester</option>
        <option value="previous">Previous Semester</option>
        <option value="all">All Time</option>
      </select>
    </div>
  );

  return (
    <div className="space-y-6">
      <Header
        title="Academic Results"
        subtitle="Track your academic performance and progress"
        action={headerAction}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Grade Distribution
          </h2>
          <div className="h-[300px]">
            <GradeDistribution />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Performance Trend
          </h2>
          <div className="h-[300px]">
            <PerformanceTrend />
          </div>
        </div>
      </div>

      {/* Course Results Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Course Results
            </h2>
            <select
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
              className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <option value="all">All Courses</option>
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </div>
          <CourseResultsTable results={courseResults} />
        </div>
      </div>
    </div>
  );
}
