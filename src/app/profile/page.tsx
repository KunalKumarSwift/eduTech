"use client";

import { useState } from "react";
import {
  UserCircleIcon,
  AcademicCapIcon,
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { Header } from "../components/common/Header";
import { TabGroup } from "../components/common/TabGroup";
import { ProfileHeader } from "./components/ProfileHeader";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { AcademicPerformance } from "./components/AcademicPerformance";
import Image from "next/image";

const tabs = [
  { name: "Personal Info", icon: UserCircleIcon },
  { name: "Academic", icon: AcademicCapIcon },
  { name: "Settings", icon: CogIcon },
  { name: "Notifications", icon: BellIcon },
  { name: "Security", icon: ShieldCheckIcon },
];

const PROFILE_IMAGE_URL = "/avatar.svg"; // Make sure to add an avatar.png in your public folder

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

  const headerAction = (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <Image
          src={PROFILE_IMAGE_URL}
          alt="Profile"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Header
        title="Profile Settings"
        subtitle="Manage your account settings and preferences"
        action={headerAction}
      />

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
        <ProfileHeader
          name="John Doe"
          course="Computer Science"
          year="Year 2"
          studentId="CS2023001"
          gpa="3.8"
          profilePicture={PROFILE_IMAGE_URL}
        />
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="p-4 md:p-6">
            <nav className="flex space-x-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors
                    ${
                      activeTab === tab.name
                        ? "bg-indigo-600 text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4 md:p-6">
          {activeTab === "Personal Info" && (
            <PersonalInfoForm
              isEditing={isEditing}
              onEditToggle={() => setIsEditing(!isEditing)}
            />
          )}

          {activeTab === "Academic" && (
            <AcademicPerformance performanceData={samplePerformanceData} />
          )}

          {activeTab === "Settings" && (
            <div className="text-gray-600 dark:text-gray-400">
              Settings content coming soon...
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="text-gray-600 dark:text-gray-400">
              Notifications preferences coming soon...
            </div>
          )}

          {activeTab === "Security" && (
            <div className="text-gray-600 dark:text-gray-400">
              Security settings coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
