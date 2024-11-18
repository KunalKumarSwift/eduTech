// "use client";

// import { useState } from "react";
// import {
//   BellIcon,
//   CalendarIcon,
//   ClockIcon,
//   ExclamationCircleIcon,
//   CheckCircleIcon,
//   PlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// const reminders = [
//   {
//     id: 1,
//     title: "Web Development Project Due",
//     date: "2024-03-20T23:59:59",
//     course: "Web Development",
//     priority: "high",
//     type: "assignment",
//     completed: false,
//     description: "Final project submission including documentation",
//   },
//   // Add more reminders...
// ];

// const activityData = [
//   { day: "2024-03-01", value: 3 },
//   { day: "2024-03-05", value: 5 },
//   { day: "2024-03-10", value: 2 },
//   // Add more activity data...
// ];

// export default function Reminders() {
//   const [showAddReminder, setShowAddReminder] = useState(false);
//   const [filter, setFilter] = useState("all");

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Reminders & Tasks
//           </h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             Stay organized with your academic tasks
//           </p>
//         </div>
//         <button
//           onClick={() => setShowAddReminder(true)}
//           className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//         >
//           <PlusIcon className="h-5 w-5 mr-2" />
//           New Reminder
//         </button>
//       </div>

//       {/* Activity Calendar */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
//         <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//           Activity Overview
//         </h2>
//         <div className="h-52">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={activityData}>
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="value" fill="#4f46e5" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Filters and Search */}
//       <div className="flex space-x-4 mb-6">
//         <div className="flex-1">
//           <input
//             type="search"
//             placeholder="Search reminders..."
//             className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//           />
//         </div>
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//         >
//           <option value="all">All Tasks</option>
//           <option value="pending">Pending</option>
//           <option value="completed">Completed</option>
//           <option value="high">High Priority</option>
//         </select>
//       </div>

//       {/* Reminders List */}
//       <div className="space-y-4">
//         {reminders.map((reminder) => (
//           <div
//             key={reminder.id}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="checkbox"
//                   checked={reminder.completed}
//                   className="h-4 w-4 text-indigo-600 rounded"
//                 />
//                 <div>
//                   <h3
//                     className={`text-lg font-medium ${
//                       reminder.completed
//                         ? "text-gray-500 line-through"
//                         : "text-gray-900 dark:text-white"
//                     }`}
//                   >
//                     {reminder.title}
//                   </h3>
//                   <div className="flex items-center space-x-2 mt-1">
//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       {reminder.course}
//                     </span>
//                     <span className="text-gray-300 dark:text-gray-600">•</span>
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         reminder.priority === "high"
//                           ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//                           : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//                       }`}
//                     >
//                       {reminder.priority}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="text-right">
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                     <CalendarIcon className="h-4 w-4 mr-1" />
//                     {new Date(reminder.date).toLocaleDateString()}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
//                     <ClockIcon className="h-4 w-4 mr-1" />
//                     {new Date(reminder.date).toLocaleTimeString()}
//                   </div>
//                 </div>
//                 <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
//                   <XMarkIcon className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             {reminder.description && (
//               <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                 {reminder.description}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Add Reminder Modal */}
//       {showAddReminder && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Add New Reminder
//             </h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//                 />
//               </div>
//               {/* Add more form fields */}
//               <div className="flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddReminder(false)}
//                   className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//                 >
//                   Add Reminder
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
      className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <PlusIcon className="h-5 w-5 mr-2" />
      New Reminder
    </button>
  );

  const handleToggleComplete = (id: number) => {
    // Implement toggle logic
  };

  const handleDelete = (id: number) => {
    // Implement delete logic
  };

  const handleAddReminder = (data: any) => {
    // Implement add reminder logic
    setShowAddReminder(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header
        title="Reminders & Tasks"
        subtitle="Stay organized with your academic tasks"
        action={headerAction}
      />

      <ActivityOverview data={activityData} />

      <ReminderFilters
        filter={filter}
        onFilterChange={setFilter}
        onSearch={setSearchTerm}
      />

      <div className="space-y-4">
        {reminders.map((reminder) => (
          <ReminderItem
            key={reminder.id}
            reminder={reminder}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <AddReminderModal
        isOpen={showAddReminder}
        onClose={() => setShowAddReminder(false)}
        onSubmit={handleAddReminder}
      />
    </div>
  );
}
