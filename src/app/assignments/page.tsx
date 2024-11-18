//
"use client";

import { useState } from "react";
import { Header } from "../components/common/Header";
import { AssignmentCard } from "./components/AssignmentCard";
import { SubmissionStats } from "./components/SubmissionStats";

const assignments = [
  {
    id: 1,
    title: "Final Project",
    course: "Web Development",
    dueDate: "2024-03-20T23:59:59",
    status: "pending",
    progress: 65,
    priority: "high",
    type: "project",
    description: "Final project submission including documentation",
  },
  // Add more assignments...
];

const submissionStats = [
  {
    month: "Jan",
    onTime: 12,
    late: 2,
    missed: 1,
  },
  // Add more months...
];

export default function Assignments() {
  const [filter, setFilter] = useState("all");

  const headerAction = (
    <div className="flex space-x-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
      >
        <option value="all">All Assignments</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        New Assignment
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header
        title="Assignments"
        subtitle="Track and manage your assignments"
        action={headerAction}
      />

      <SubmissionStats data={submissionStats} />

      <div className="mt-8 space-y-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}
