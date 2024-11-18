// "use client";

// import { useState } from "react";
// import {
//   PlayIcon,
//   PauseIcon,
//   ClockIcon,
//   CalendarIcon,
//   BookmarkIcon,
//   ShareIcon,
//   CloudArrowDownIcon, // Changed from CloudDownloadIcon
// } from "@heroicons/react/24/outline";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Area,
// } from "recharts";

// const recordings = [
//   {
//     id: 1,
//     title: "Introduction to React Hooks",
//     course: "Web Development",
//     instructor: "Dr. Sarah Wilson",
//     duration: "1:15:00",
//     date: "2024-03-10",
//     thumbnail: "/thumbnails/react-hooks.jpg",
//     views: 156,
//     progress: 45,
//     bookmarked: true,
//   },
//   // Add more recordings...
// ];

// const viewsData = [
//   {
//     id: "views",
//     data: [
//       { x: "Mon", y: 24 },
//       { x: "Tue", y: 45 },
//       { x: "Wed", y: 67 },
//       { x: "Thu", y: 56 },
//       { x: "Fri", y: 89 },
//       { x: "Sat", y: 34 },
//       { x: "Sun", y: 29 },
//     ],
//   },
// ];

// export default function Recordings() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("all");

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Lecture Recordings
//           </h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             Access your course recordings and learning materials
//           </p>
//         </div>
//         <div className="flex space-x-4">
//           <input
//             type="search"
//             placeholder="Search recordings..."
//             className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//           >
//             <option value="all">All Courses</option>
//             <option value="watched">Watched</option>
//             <option value="unwatched">Unwatched</option>
//             <option value="bookmarked">Bookmarked</option>
//           </select>
//         </div>
//       </div>

//       {/* Viewing Stats */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
//         <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//           Weekly Viewing Activity
//         </h2>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={viewsData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Area
//                 type="monotone"
//                 dataKey="views"
//                 stroke="#4f46e5"
//                 fill="#4f46e5"
//                 fillOpacity={0.15}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="views"
//                 stroke="#4f46e5"
//                 strokeWidth={2}
//                 dot={{ r: 4 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Recordings Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recordings.map((recording) => (
//           <div
//             key={recording.id}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
//           >
//             <div className="relative">
//               <img
//                 src={recording.thumbnail}
//                 alt={recording.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
//                 <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
//                   <PlayIcon className="h-8 w-8 text-gray-900" />
//                 </button>
//               </div>
//               <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-white text-sm">
//                 {recording.duration}
//               </div>
//             </div>

//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white">
//                     {recording.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     {recording.course} • {recording.instructor}
//                   </p>
//                 </div>
//                 <button
//                   className={`p-1 rounded-full ${
//                     recording.bookmarked
//                       ? "text-yellow-500 hover:text-yellow-600"
//                       : "text-gray-400 hover:text-gray-500"
//                   }`}
//                 >
//                   <BookmarkIcon className="h-5 w-5" />
//                 </button>
//               </div>

//               <div className="mt-4">
//                 <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
//                   <div
//                     className="bg-indigo-600 h-1.5 rounded-full"
//                     style={{ width: `${recording.progress}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
//                 <div className="flex items-center">
//                   <CalendarIcon className="h-4 w-4 mr-1" />
//                   {recording.date}
//                 </div>
//                 <div className="flex items-center">
//                   <ClockIcon className="h-4 w-4 mr-1" />
//                   {recording.views} views
//                 </div>
//               </div>

//               <div className="mt-4 flex justify-end space-x-2">
//                 <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
//                   <ShareIcon className="h-5 w-5" />
//                 </button>
//                 <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
//                   <CloudArrowDownIcon className="h-5 w-5" />{" "}
//                   {/* Changed here */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
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
  // Add more recordings...
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const headerAction = (
    <div className="flex space-x-4">
      <input
        type="search"
        placeholder="Search recordings..."
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      >
        <option value="all">All Courses</option>
        <option value="watched">Watched</option>
        <option value="unwatched">Unwatched</option>
        <option value="bookmarked">Bookmarked</option>
      </select>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header
        title="Lecture Recordings"
        subtitle="Access your course recordings and learning materials"
        action={headerAction}
      />

      <ViewingStats data={viewsData} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recordings.map((recording) => (
          <RecordingCard key={recording.id} recording={recording} />
        ))}
      </div>
    </div>
  );
}
