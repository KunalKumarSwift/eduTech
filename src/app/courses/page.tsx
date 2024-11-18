// "use client";

// import { useState } from "react";
// import { ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";
// import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
// import { Tab } from "@headlessui/react";

// const courses = [
//   {
//     id: 1,
//     name: "Web Development",
//     instructor: "Dr. Sarah Wilson",
//     progress: 75,
//     nextClass: "2024-03-15T10:00:00",
//     students: 45,
//     grade: "A",
//     completion: 75,
//     category: "Computer Science",
//     color: "blue",
//   },
//   // Add more courses...
// ];

// const progressData = [
//   {
//     id: "Completed",
//     label: "Completed",
//     value: 75,
//     color: "hsl(207, 90%, 54%)",
//   },
//   {
//     id: "Remaining",
//     label: "Remaining",
//     value: 25,
//     color: "hsl(207, 90%, 87%)",
//   },
// ];

// export default function Courses() {
//   const [selectedTab, setSelectedTab] = useState(0);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//             My Courses
//           </h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             Track your progress and manage your courses
//           </p>
//         </div>
//         <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//           Browse Courses
//         </button>
//       </div>

//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl bg-indigo-900/20 p-1 mb-8">
//           <Tab
//             className={({ selected }) =>
//               `w-full rounded-lg py-2.5 text-sm font-medium leading-5
//               ${
//                 selected
//                   ? "bg-white dark:bg-gray-800 shadow text-indigo-700 dark:text-indigo-400"
//                   : "text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-indigo-600"
//               }`
//             }
//           >
//             All Courses
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `w-full rounded-lg py-2.5 text-sm font-medium leading-5
//               ${
//                 selected
//                   ? "bg-white dark:bg-gray-800 shadow text-indigo-700 dark:text-indigo-400"
//                   : "text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-indigo-600"
//               }`
//             }
//           >
//             In Progress
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `w-full rounded-lg py-2.5 text-sm font-medium leading-5
//               ${
//                 selected
//                   ? "bg-white dark:bg-gray-800 shadow text-indigo-700 dark:text-indigo-400"
//                   : "text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-indigo-600"
//               }`
//             }
//           >
//             Completed
//           </Tab>
//         </Tab.List>

//         <Tab.Panels>
//           <Tab.Panel>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {courses.map((course) => (
//                 <div
//                   key={course.id}
//                   className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
//                 >
//                   <div className="p-6">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                           {course.name}
//                         </h3>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {course.instructor}
//                         </p>
//                       </div>
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium bg-${course.color}-100 text-${course.color}-800`}
//                       >
//                         {course.category}
//                       </span>
//                     </div>

//                     <div className="mt-4 h-32">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={progressData}
//                             cx="50%"
//                             cy="50%"
//                             innerRadius={30}
//                             outerRadius={40}
//                             paddingAngle={5}
//                             dataKey="value"
//                           >
//                             {progressData.map((entry, index) => (
//                               <Cell
//                                 key={`cell-${index}`}
//                                 fill={entry.color}
//                                 strokeWidth={0}
//                               />
//                             ))}
//                           </Pie>
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>

//                     <div className="mt-4 grid grid-cols-2 gap-4">
//                       <div className="flex items-center">
//                         <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
//                         <span className="text-sm text-gray-600 dark:text-gray-300">
//                           Next:{" "}
//                           {new Date(course.nextClass).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex items-center">
//                         <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
//                         <span className="text-sm text-gray-600 dark:text-gray-300">
//                           {course.students} Students
//                         </span>
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//                         <div
//                           className="bg-indigo-600 h-2.5 rounded-full"
//                           style={{ width: `${course.progress}%` }}
//                         ></div>
//                       </div>
//                       <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                         {course.progress}% Complete
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Tab.Panel>
//           {/* Add similar panels for In Progress and Completed */}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   );
// }

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header
        title="My Courses"
        subtitle="Track your progress and manage your courses"
        action={headerAction}
      />

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-indigo-900/20 p-1 mb-8">
          {["All Courses", "In Progress", "Completed"].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
