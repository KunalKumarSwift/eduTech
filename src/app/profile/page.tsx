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

const tabs = [
  { name: "Personal Info", icon: UserCircleIcon },
  { name: "Academic", icon: AcademicCapIcon },
  { name: "Settings", icon: CogIcon },
  { name: "Notifications", icon: BellIcon },
  { name: "Security", icon: ShieldCheckIcon },
];

// Add this sample data near the top of the file, after imports
const samplePerformanceData = [
  { x: "Mathematics", y: 95 },
  { x: "Computer Science", y: 92 },
  { x: "Physics", y: 88 },
  { x: "English", y: 85 },
  { x: "History", y: 90 },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <Header
        title="Profile Settings"
        subtitle="Manage your account settings and preferences"
      />

      <div className="mb-6">
        <ProfileHeader
          name="John Doe"
          course="Computer Science"
          year="Year 2"
          studentId="CS2023001"
          gpa="3.8"
          profilePicture="/profile-picture.jpg"
        />
      </div>

      {/* Scrollable tabs container on mobile */}
      <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
        <div className="inline-flex md:flex w-max md:w-full space-x-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap ${
                activeTab === tab.name
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {activeTab === "Personal Info" && (
          <PersonalInfoForm
            isEditing={isEditing}
            onEditToggle={() => setIsEditing(!isEditing)}
          />
        )}

        {activeTab === "Academic" && (
          <div className="p-4 md:p-6">
            <AcademicPerformance performanceData={samplePerformanceData} />
          </div>
        )}

        {/* Add other tab content components */}
      </div>
    </div>
  );
}
