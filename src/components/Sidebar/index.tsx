// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import ThemeToggle from "@/components/ThemeToggle";
// import {
//   HomeIcon,
//   BookOpenIcon,
//   ClipboardDocumentIcon,
//   VideoCameraIcon,
//   ChartBarIcon,
//   BellIcon,
//   UserIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/24/outline";

// const menuItems = [
//   { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
//   { name: "Courses", icon: BookOpenIcon, href: "/courses" },
//   { name: "Assignments", icon: ClipboardDocumentIcon, href: "/assignments" },
//   { name: "Recordings", icon: VideoCameraIcon, href: "/recordings" },
//   { name: "Results", icon: ChartBarIcon, href: "/results" },
//   { name: "Reminders", icon: BellIcon, href: "/reminders" },
//   { name: "Profile", icon: UserIcon, href: "/profile" },
// ];

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);
//   const pathname = usePathname();

//   return (
//     <aside
//       className={`bg-white dark:bg-gray-800 ${
//         isOpen ? "w-64" : "w-20"
//       } transition-all duration-300 ease-in-out fixed h-full shadow-lg`}
//     >
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700">
//           <h1
//             className={`text-xl font-bold text-gray-800 dark:text-white ${
//               !isOpen && "hidden"
//             } transition-opacity duration-300`}
//           >
//             Student Portal
//           </h1>
//           <div className="flex items-center space-x-2">
//             <ThemeToggle />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
//               aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
//             >
//               {isOpen ? (
//                 <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               ) : (
//                 <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto">
//           <ul className="p-2 space-y-1">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   href={item.href}
//                   className={`flex items-center p-2 rounded-md transition-colors duration-200 ${
//                     pathname === item.href
//                       ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
//                       : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
//                   }`}
//                 >
//                   <item.icon
//                     className={`w-6 h-6 ${
//                       pathname === item.href
//                         ? "text-blue-600 dark:text-blue-400"
//                         : "text-gray-500 dark:text-gray-400"
//                     } transition-colors duration-200`}
//                   />
//                   <span
//                     className={`ml-3 font-medium ${
//                       !isOpen && "hidden"
//                     } transition-opacity duration-200 ${
//                       pathname === item.href
//                         ? "text-blue-600 dark:text-blue-400"
//                         : "text-gray-600 dark:text-gray-300"
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Footer */}
//         <div className="p-4 border-t dark:border-gray-700">
//           <div
//             className={`flex items-center ${
//               !isOpen && "justify-center"
//             } space-x-3`}
//           >
//             <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
//               <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//             </div>
//             {isOpen && (
//               <div className="flex-1">
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//                   John Doe
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   Student
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardDocumentIcon,
  VideoCameraIcon,
  ChartBarIcon,
  BellIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { name: "Courses", icon: BookOpenIcon, href: "/courses" },
  { name: "Assignments", icon: ClipboardDocumentIcon, href: "/assignments" },
  { name: "Recordings", icon: VideoCameraIcon, href: "/recordings" },
  { name: "Results", icon: ChartBarIcon, href: "/results" },
  { name: "Reminders", icon: BellIcon, href: "/reminders" },
  { name: "Profile", icon: UserIcon, href: "/profile" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-800 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white mr-8">
              Student Portal
            </h1>
            <div className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Student
                </p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
