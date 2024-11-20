"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/common/Header";
import { RecordingCard } from "./components/RecordingCard";
import { ViewingStats } from "./components/ViewingStats";

const recordings = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    course: "Web Development",
    instructor: "Dr. Sarah Wilson",
    duration: "1:15:00",
    date: "2024-03-10",
    thumbnail: "/thumbnails/react-hooks.jpg",
    views: 156,
    progress: 45,
    bookmarked: true,
  },
  {
    id: 2,
    title: "Database Design Principles",
    course: "Database Systems",
    instructor: "Prof. Michael Chen",
    duration: "1:30:00",
    date: "2024-03-08",
    thumbnail: "/thumbnails/database-design.jpg",
    views: 128,
    progress: 75,
    bookmarked: false,
  },
  {
    id: 3,
    title: "Advanced JavaScript Concepts",
    course: "Web Development",
    instructor: "Dr. Sarah Wilson",
    duration: "1:45:00",
    date: "2024-03-05",
    thumbnail: "/thumbnails/advanced-js.jpg",
    views: 203,
    progress: 90,
    bookmarked: true,
  },
];

const viewsData = [
  { x: "Mon", y: 24 },
  { x: "Tue", y: 45 },
  { x: "Wed", y: 67 },
  { x: "Thu", y: 56 },
  { x: "Fri", y: 89 },
  { x: "Sat", y: 34 },
  { x: "Sun", y: 29 },
];

export default function Recordings() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsClient(true);
  }, []);
  const headerAction = (
    <div className="flex space-x-4">
      <input
        type="search"
        placeholder="Search recordings..."
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
      >
        <option value="all">All Courses</option>
        <option value="watched">Watched</option>
        <option value="unwatched">Unwatched</option>
        <option value="bookmarked">Bookmarked</option>
      </select>
    </div>
  );

  return (
    <div className="space-y-6">
      <Header
        title="Lecture Recordings"
        subtitle="Access your course recordings and learning materials"
        action={headerAction}
      />

      {/* Viewing Stats Section */}
      {isClient && (
        <div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6"
          style={{ height: "400px" }}
        >
          <ViewingStats data={viewsData} />
        </div>
      )}

      {/* Recordings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recordings.map((recording) => (
          <RecordingCard key={recording.id} recording={recording} />
        ))}
      </div>
    </div>
  );
}
