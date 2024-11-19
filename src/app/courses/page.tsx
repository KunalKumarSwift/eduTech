"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Header } from "../components/common/Header";
import { CourseCard } from "./components/CourseCard";

const courses = [
  {
    id: 1,
    name: "Web Development",
    instructor: "Dr. Sarah Wilson",
    progress: 75,
    nextClass: "2024-03-15T10:00:00",
    students: 45,
    grade: "A",
    completion: 75,
    category: "Computer Science",
    color: "blue",
  },
  // Add more courses...
];

export default function Courses() {
  const [selectedTab, setSelectedTab] = useState(0);

  const headerAction = (
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
      Browse Courses
    </button>
  );

  return (
    <div>
      <Header
        title="My Courses"
        subtitle="Track your progress and manage your courses"
        action={headerAction}
      />

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-indigo-900/20 p-1 mb-8 overflow-x-auto">
          {["All Courses", "In Progress", "Completed"].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `flex-shrink-0 w-auto px-4 rounded-lg py-2.5 text-sm font-medium leading-5
                ${
                  selected
                    ? "bg-white dark:bg-gray-800 shadow text-indigo-700 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-indigo-600"
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </Tab.Panel>
          {/* Add similar panels for In Progress and Completed */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
