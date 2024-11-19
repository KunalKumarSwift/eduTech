"use client";

import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <div className="px-4 py-6 md:px-6 lg:px-8 max-w-full">{children}</div>
      </main>
    </div>
  );
}
