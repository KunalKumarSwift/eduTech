// "use client";

// import { useState } from "react";
// import {
//   AcademicCapIcon,
//   ArrowTrendingUpIcon,
//   ArrowTrendingDownIcon,
//   BookOpenIcon,
//   ClipboardDocumentIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";

// const gradeDistribution = [
//   { label: "A", value: 30, color: "rgb(34, 197, 94)" },
//   { label: "B", value: 40, color: "rgb(59, 130, 246)" },
//   { label: "C", value: 20, color: "rgb(234, 179, 8)" },
//   { label: "D", value: 8, color: "rgb(249, 115, 22)" },
//   { label: "F", value: 2, color: "rgb(239, 68, 68)" },
// ];

// const performanceTrend = [
//   { week: "Week 1", value: 85 },
//   { week: "Week 2", value: 88 },
//   { week: "Week 3", value: 82 },
//   { week: "Week 4", value: 89 },
//   { week: "Week 5", value: 90 },
//   { week: "Week 6", value: 87 },
// ];

// const courseResults = [
//   {
//     id: 1,
//     course: "Web Development",
//     grade: "A",
//     score: 92,
//     trend: "up",
//     assignments: 15,
//     quizzes: 5,
//     projects: 2,
//   },
//   {
//     id: 2,
//     course: "Data Structures",
//     grade: "B",
//     score: 85,
//     trend: "up",
//     assignments: 12,
//     quizzes: 4,
//     projects: 1,
//   },
//   {
//     id: 3,
//     course: "Algorithms",
//     grade: "A",
//     score: 90,
//     trend: "down",
//     assignments: 10,
//     quizzes: 6,
//     projects: 2,
//   },
// ];

// const statsCards = [
//   {
//     title: "GPA",
//     value: "3.8",
//     trend: "+0.2 from last semester",
//     trendUp: true,
//     icon: AcademicCapIcon,
//     color: "green",
//   },
//   {
//     title: "Completed Courses",
//     value: "12",
//     trend: "2 in progress",
//     trendUp: true,
//     icon: BookOpenIcon,
//     color: "blue",
//   },
//   {
//     title: "Assignments",
//     value: "95%",
//     trend: "Submission rate",
//     trendUp: true,
//     icon: ClipboardDocumentIcon,
//     color: "indigo",
//   },
//   {
//     title: "Class Rank",
//     value: "Top 5%",
//     trend: "Among 200 students",
//     trendUp: true,
//     icon: UserGroupIcon,
//     color: "purple",
//   },
// ];

// interface PieChartData {
//   value: number;
//   color: string;
//   label: string;
// }

// const PieChart = ({ data }: { data: PieChartData[] }) => {
//   const total = data.reduce(
//     (sum: number, item: PieChartData) => sum + item.value,
//     0
//   );
//   let currentAngle = 0;

//   return (
//     <div className="relative h-48">
//       <div className="flex">
//         <div className="w-48">
//           <svg
//             viewBox="0 0 100 100"
//             className="transform -rotate-90 w-full h-full"
//           >
//             {data.map((item, i) => {
//               const angle = (item.value / total) * 360;
//               const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
//               const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
//               const x2 =
//                 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
//               const y2 =
//                 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);

//               const largeArcFlag = angle > 180 ? 1 : 0;

//               const pathData = `
//                 M 50 50
//                 L ${x1} ${y1}
//                 A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
//                 Z
//               `;

//               currentAngle += angle;

//               return (
//                 <path
//                   key={i}
//                   d={pathData}
//                   fill={item.color}
//                   className="transition-all duration-300 hover:opacity-80"
//                 >
//                   <title>{`${item.label}: ${item.value}%`}</title>
//                 </path>
//               );
//             })}
//           </svg>
//           <div className="absolute top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2 text-center">
//             <div className="text-2xl font-bold text-gray-900 dark:text-white">
//               {total}
//             </div>
//             <div className="text-xs text-gray-500 dark:text-gray-400">
//               Total
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 pl-4 space-y-2">
//           {data.map((item, i) => (
//             <div key={i} className="flex items-center">
//               <div
//                 className="w-3 h-3 rounded-full mr-2"
//                 style={{ backgroundColor: item.color }}
//               />
//               <span className="text-sm text-gray-600 dark:text-gray-400">
//                 {item.label} ({item.value}%)
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// interface DataPoint {
//   value: number;
// }

// const LineChart = ({ data }: { data: DataPoint[] }) => {
//   const maxValue = Math.max(...data.map((d: DataPoint) => d.value));
//   const minValue = Math.min(...data.map((d: DataPoint) => d.value));
//   const range = maxValue - minValue;

//   const points = data.map((d, i) => ({
//     x: (i / (data.length - 1)) * 100,
//     y: 100 - ((d.value - minValue) / range) * 80,
//   }));

//   const pathData = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;

//   return (
//     <div className="h-48 relative">
//       <svg className="w-full h-full" preserveAspectRatio="none">
//         {/* Grid lines */}
//         {[0, 25, 50, 75, 100].map((y) => (
//           <line
//             key={y}
//             x1="0"
//             y1={y}
//             x2="100"
//             y2={y}
//             stroke="#e5e7eb"
//             strokeWidth="0.5"
//             vectorEffect="non-scaling-stroke"
//           />
//         ))}

//         {/* Line */}
//         <path
//           d={pathData}
//           fill="none"
//           stroke="#6366f1"
//           strokeWidth="2"
//           vectorEffect="non-scaling-stroke"
//           className="transition-all duration-300"
//         />

//         {/* Area under the line */}
//         <path
//           d={`${pathData} L 100,100 L 0,100 Z`}
//           fill="#6366f1"
//           fillOpacity="0.1"
//         />

//         {/* Points */}
//         {points.map((point, i) => (
//           <circle
//             key={i}
//             cx={point.x}
//             cy={point.y}
//             r="3"
//             fill="#6366f1"
//             className="transition-all duration-300 hover:r-[4px]"
//           >
//             <title>{`${data[i].week}: ${data[i].value}%`}</title>
//           </circle>
//         ))}
//       </svg>

//       {/* X-axis labels */}
//       <div className="flex justify-between mt-2 text-sm text-gray-500">
//         {data.map((d, i) => (
//           <div key={i} className="transform -rotate-45 origin-top-left">
//             {d.week}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function Results() {
//   const [selectedPeriod, setSelectedPeriod] = useState("semester");

//   return (
//     <div className="flex-1 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Academic Results
//           </h1>
//           <p className="mt-2 text-gray-600 dark:text-gray-400">
//             Track your academic performance and progress
//           </p>
//         </div>
//         <select
//           value={selectedPeriod}
//           onChange={(e) => setSelectedPeriod(e.target.value)}
//           className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
//         >
//           <option value="semester">Current Semester</option>
//           <option value="year">Academic Year</option>
//           <option value="all">All Time</option>
//         </select>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {statsCards.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
//                   {stat.title}
//                 </p>
//                 <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
//                   {stat.value}
//                 </p>
//               </div>
//               <div className={`p-3 bg-${stat.color}-100 rounded-full`}>
//                 <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
//               </div>
//             </div>
//             <div
//               className={`mt-4 flex items-center ${
//                 stat.trendUp ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {stat.trendUp ? (
//                 <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
//               ) : (
//                 <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
//               )}
//               <span className="text-sm font-medium">{stat.trend}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Grade Distribution */}
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
//           <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//             Grade Distribution
//           </h2>
//           <PieChart data={gradeDistribution} />
//         </div>

//         {/* Performance Trend */}
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
//           <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//             Performance Trend
//           </h2>
//           <LineChart data={performanceTrend} />
//         </div>
//       </div>

//       {/* Course Results Table */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
//           <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Course Results
//           </h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//             <thead className="bg-gray-50 dark:bg-gray-900">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Grade
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Score
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Trend
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Details
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//               {courseResults.map((course) => (
//                 <tr
//                   key={course.id}
//                   className="hover:bg-gray-50 dark:hover:bg-gray-700"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900 dark:text-white">
//                       {course.course}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         course.grade === "A"
//                           ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                           : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//                       }`}
//                     >
//                       {course.grade}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900 dark:text-white">
//                       {course.score}%
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {course.trend === "up" ? (
//                       <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
//                     ) : (
//                       <ArrowTrendingDownIcon className="h-5 w-5 text-red-500" />
//                     )}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {course.assignments} assignments • {course.quizzes} quizzes
//                     • {course.projects} projects
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { StatsCard } from "../components/common/StatsCard";
import { ChartContainer } from "../components/common/ChartContainer";
import { PieChart } from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";

const gradeDistribution = [
  { id: "A", label: "A", value: 30, color: "rgb(34, 197, 94)" },
  { id: "B", label: "B", value: 40, color: "rgb(59, 130, 246)" },
  { id: "C", label: "C", value: 20, color: "rgb(234, 179, 8)" },
  { id: "D", label: "D", value: 8, color: "rgb(249, 115, 22)" },
  { id: "F", label: "F", value: 2, color: "rgb(239, 68, 68)" },
];

const performanceTrend = [
  { x: "Week 1", y: 85 },
  { x: "Week 2", y: 88 },
  { x: "Week 3", y: 82 },
  { x: "Week 4", y: 89 },
  { x: "Week 5", y: 90 },
  { x: "Week 6", y: 87 },
];

const statsCards = [
  {
    title: "GPA",
    value: "3.8",
    trend: "+0.2 from last semester",
    trendUp: true,
    icon: AcademicCapIcon,
    color: "green",
  },
  // ... other stats
];

export default function Results() {
  const [selectedPeriod, setSelectedPeriod] = useState("semester");

  const headerAction = (
    <select
      value={selectedPeriod}
      onChange={(e) => setSelectedPeriod(e.target.value)}
      className="rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
    >
      <option value="semester">Current Semester</option>
      <option value="year">Academic Year</option>
      <option value="all">All Time</option>
    </select>
  );

  return (
    <div className="flex-1 p-8">
      <Header
        title="Academic Results"
        subtitle="Track your academic performance and progress"
        action={headerAction}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartContainer title="Grade Distribution">
          <PieChart data={gradeDistribution} />
        </ChartContainer>

        <ChartContainer title="Performance Trend">
          <LineChart data={performanceTrend} />
        </ChartContainer>
      </div>

      {/* Course Results Table component would go here */}
    </div>
  );
}
