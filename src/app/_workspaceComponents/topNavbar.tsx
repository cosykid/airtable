"use client";

import Image from "next/image";
import { Search } from "lucide-react";

type TopNavbarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  showDropdown: boolean;
  setShowDropdown: (open: boolean) => void;
};

export default function TopNavbar({ setIsSidebarOpen, isSidebarOpen, setShowDropdown, showDropdown }: TopNavbarProps) {
  return (
    <div className="flex items-center p-1.5 border-b border-gray-200 bg-white w-full">
      <div className="flex items-center mr-4">
        <button className="p-2 mr-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <svg className="w-4 h-4 text-gray-600"><use href="/icon_definitions.svg#Menu" /></svg>
        </button>
        <Image src="/logo.png" alt="Workspace Logo" width={100} height={24} className="object-contain" />
      </div>

      <div className="relative flex-1">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-90">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400 bg-white" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-1.5 bg-white border border-gray-300 text-sm focus:ring-1 hover:cursor-pointer rounded-full shadow-sm"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className="text-xs text-gray-400">⌘ K</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center ml-auto">
        <button className="p-2">
          <span className="text-xs text-gray-600 flex">
            <svg className="w-4 h-4 text-gray-600 mr-1" fill="currentColor">
              <use href="/icon_definitions.svg#Question" />
            </svg>
            <p className="text-[14px] mr-2">Help</p>
          </span>
        </button>
        <button className="p-2">
          <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor">
              <use href="/icon_definitions.svg#Bell" />
            </svg>
          </span>
        </button>
        <div className="relative">
          <button
            className="bg-yellow-500 text-black rounded-full w-7 h-7 flex items-center justify-center text-xs mx-2.5 hover:cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            L
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => (window.location.href = "/api/auth/signout")}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
