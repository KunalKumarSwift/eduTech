// "use client";

// import { useState } from "react";
// import {
//   UserCircleIcon,
//   AcademicCapIcon,
//   CogIcon,
//   BellIcon,
//   KeyIcon,
//   ShieldCheckIcon,
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

// const performanceData = [
//   {
//     id: "performance",
//     data: [
//       { x: "Sem 1", y: 3.5 },
//       { x: "Sem 2", y: 3.7 },
//       { x: "Sem 3", y: 3.8 },
//       { x: "Sem 4", y: 3.9 },
//     ],
//   },
// ];

// const tabs = [
//   { name: "Personal Info", icon: UserCircleIcon },
//   { name: "Academic", icon: AcademicCapIcon },
//   { name: "Settings", icon: CogIcon },
//   { name: "Notifications", icon: BellIcon },
//   { name: "Security", icon: ShieldCheckIcon },
// ];

// export default function Profile() {
//   const [activeTab, setActiveTab] = useState("Personal Info");
//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//           Profile Settings
//         </h1>
//         <p className="mt-2 text-gray-600 dark:text-gray-400">
//           Manage your account settings and preferences
//         </p>
//       </div>

//       {/* Profile Overview */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
//         <div className="flex items-center space-x-6">
//           <div className="relative">
//             <img
//               src="/profile-picture.jpg"
//               alt="Profile"
//               className="w-24 h-24 rounded-full object-cover"
//             />
//             <button className="absolute bottom-0 right-0 p-1 bg-white dark:bg-gray-700 rounded-full shadow-sm">
//               <CogIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
//             </button>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//               John Doe
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               Computer Science • Year 2
//             </p>
//             <div className="mt-2 flex items-center space-x-4">
//               <span className="text-sm text-gray-500 dark:text-gray-400">
//                 Student ID: CS2023001
//               </span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">
//                 GPA: 3.8
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="flex space-x-1 mb-8">
//         {tabs.map((tab) => (
//           <button
//             key={tab.name}
//             onClick={() => setActiveTab(tab.name)}
//             className={`flex items-center px-4 py-2 rounded-lg ${
//               activeTab === tab.name
//                 ? "bg-indigo-600 text-white"
//                 : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
//             }`}
//           >
//             <tab.icon className="h-5 w-5 mr-2" />
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       {/* Content Sections */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
//         {activeTab === "Personal Info" && (
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                 Personal Information
//               </h3>
//               <button
//                 onClick={() => setIsEditing(!isEditing)}
//                 className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 {isEditing ? "Save Changes" : "Edit Profile"}
//               </button>
//             </div>
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   disabled={!isEditing}
//                   defaultValue="John Doe"
//                   className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   disabled={!isEditing}
//                   defaultValue="john.doe@university.edu"
//                   className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
//                 />
//               </div>
//               {/* Add more fields */}
//             </div>
//           </div>
//         )}

//         {activeTab === "Academic" && (
//           <div className="p-6">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
//               Academic Performance
//             </h3>
//             <div className="h-64 mb-6">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={performanceData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
//                   <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="gpa"
//                     stroke="#4f46e5"
//                     fill="#4f46e5"
//                     fillOpacity={0.15}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="gpa"
//                     stroke="#4f46e5"
//                     strokeWidth={2}
//                     dot={{ r: 4 }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         )}
//         {/* Add content for other tabs */}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import {
  UserCircleIcon,
  AcademicCapIcon,
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { TabGroup } from "../components/common/TabGroup";
import { ProfileHeader } from "./components/ProfileHeader";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { AcademicPerformance } from "./components/AcademicPerformance";

const performanceData = [
  { x: "Sem 1", y: 3.5 },
  { x: "Sem 2", y: 3.7 },
  { x: "Sem 3", y: 3.8 },
  { x: "Sem 4", y: 3.9 },
];

const tabs = [
  { name: "Personal Info", icon: UserCircleIcon },
  { name: "Academic", icon: AcademicCapIcon },
  { name: "Settings", icon: CogIcon },
  { name: "Notifications", icon: BellIcon },
  { name: "Security", icon: ShieldCheckIcon },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header
        title="Profile Settings"
        subtitle="Manage your account settings and preferences"
      />

      <ProfileHeader
        name="John Doe"
        course="Computer Science"
        year="Year 2"
        studentId="CS2023001"
        gpa="3.8"
        profilePicture="/profile-picture.jpg"
      />

      <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {activeTab === "Personal Info" && (
          <PersonalInfoForm
            isEditing={isEditing}
            onEditToggle={() => setIsEditing(!isEditing)}
          />
        )}

        {activeTab === "Academic" && (
          <AcademicPerformance performanceData={performanceData} />
        )}

        {/* Add other tab content components as needed */}
      </div>
    </div>
  );
}
