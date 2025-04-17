"use client";

import { useState } from "react";
import { Search, ChevronDown, Star, StarOff, Plus, Grid, Menu, MoreHorizontal, Bell, Home, Users, Book, ShoppingCart, Upload } from "lucide-react";

import Image from "next/image";

export default function WorkspaceUI() {
  const [starred, setStarred] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isWorkspacesOpen, setIsWorkspacesOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen text-gray-800 flex flex-col">
      {/* Top Navbar (Full Width) */}
      <div className="flex items-center p-3 border-b border-gray-200 bg-white w-full">
        <div className="flex items-center mr-4">
          <button
            className="p-2 mr-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={16} className="text-gray-600" />
          </button>
          <Image
            src="/logo.png"
            alt="Workspace Logo"
            width={100}
            height={24}
            className="object-contain"
          />
        </div>
        {/* Search bar */}
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
        {/* notifs & Help & profile */}
        <div className="flex items-center ml-auto">
          <button className="p-2">
            <span className="text-xs text-gray-600">? Help</span>
          </button>
          <button className="p-2">
            <Bell size={16} className="text-gray-600" />
          </button>
          <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2">
            L
          </div>
        </div>
      </div>

      {/* Content Below Navbar */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div
          className={`border-r border-gray-200 flex flex-col transition-all duration-100 ${
            isSidebarOpen ? "w-[15.5vw]" : "w-12"
          }`}
        >
          <div className="flex flex-col">
            {isSidebarOpen ? (
              <>
                <div className="flex items-center justify-between px-4 py-4">
                  <button
                    className="flex items-center font-bold text-sm"
                    onClick={() => setIsHomeOpen(!isHomeOpen)}
                  >
                    <h2>Home</h2>
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform ${isHomeOpen ? "rotate-0" : "rotate-180"}`}
                    />
                  </button>
                </div>
                {isHomeOpen && (
                  <div className="text-xs text-gray-600 mb-4 px-4">
                    Your starred bases, interfaces, and workspaces will appear here
                  </div>
                )}

                <div className="flex items-center justify-between px-4 mb-4">
                  <button
                    className="flex items-center font-bold text-sm"
                    onClick={() => setIsWorkspacesOpen(!isWorkspacesOpen)}
                  >
                    <h2>All workspaces</h2>
                    <div className="flex ml-1">
                      <Plus size={14} className="mr-1" />
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${isWorkspacesOpen ? "rotate-0" : "rotate-180"}`}
                      />
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-4 py-4">
                <Home size={16} className="text-gray-600" />
                <Users size={16} className="text-gray-600" />
              </div>
            )}
          </div>

          <div className="mt-auto border-t border-gray-200">
            {isSidebarOpen ? (
              <>
                <div className="p-4 pb-0 pt-6 flex items-center">
                  <Book size={16} className="mr-2 text-gray-600" />
                  <span className="text-xs font-medium">Templates and apps</span>
                </div>
                <div className="p-4 pb-0 flex items-center">
                  <ShoppingCart size={16} className="mr-2 text-gray-600" />
                  <span className="text-xs font-medium">Marketplace</span>
                </div>
                <div className="p-4 pb-0 flex items-center">
                  <Upload size={16} className="mr-2 text-gray-600" />
                  <span className="text-xs font-medium">Import</span>
                </div>
                <div className="p-4 flex items-center">
                  <button className="bg-[rgb(22,110,225)] text-white px-4 py-1.5 rounded text-xs font-medium w-full text-left flex items-center justify-center">
                    <Plus size={14} className="mr-2" />
                    Create
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-4 py-4">
                <Book size={16} className="text-gray-600" />
                <ShoppingCart size={16} className="text-gray-600" />
                <Upload size={16} className="text-gray-600" />
                <button className="text-gray-600 p-2 rounded">
                  <Plus size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Workspace Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold mr-2 text-[1.6rem]">Workspace</h1>
              <div className="bg-gray-200 py-0.5 px-2 flex">
                <div className="flex items-center text-[11px] font-medium text-gray-600 mr-2">
                  FREE PLAN
                </div>
                <p className="text-[10px] pr-2.5">&#8226;</p>
                <button className="text-[11px] font-medium text-blue-400 hover:underline">
                  UPGRADE
                </button>
              </div>
              <button className="ml-2" onClick={() => setStarred(!starred)}>
                {starred ? (
                  <Star size={16} className="text-gray-400" fill="white" />
                ) : (
                  <StarOff size={16} className="text-gray-400" />
                )}
              </button>
            </div>
            {/* Right hand side*/}
            <div className="">
              {/* Create & Share & ... */}
              <div className="flex items-center">
                <button className="bg-[rgb(22,110,225)] text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700">
                  Create
                </button>
                <button className="ml-2 border border-gray-300 px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-100">
                  Share
                </button>
                <button className="ml-2 border border-gray-300 p-1.5 rounded hover:bg-gray-100">
                  <MoreHorizontal size={14} />
                </button>
              </div>
              {/* Collaborators */}
              <div className="px-4 pb-4">
                <h2 className="font-bold text-sm">Collaborators</h2>
                <div className="flex items-center">
                  <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    L
                  </div>
                  <span className="ml-2 text-xs font-medium">You (owner)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="px-4 pb-4 flex items-center justify-between">
            <div className="flex items-center">
              <button className="flex items-center mr-4 text-s font-medium text-gray-600">
                Opened by you <ChevronDown size={14} className="ml-1" />
              </button>
              <button className="flex items-center text-s font-medium text-gray-600">
                Show all types <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="flex">
              <button
                className={`p-1.5 rounded ${viewMode === "list" ? "bg-gray-100" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <Menu size={14} />
              </button>
              <button
                className={`p-1.5 rounded ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid size={14} />
              </button>
            </div>
          </div>

          {/* Workspace Items */}
          <div className="px-4 grid grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded p-3 flex items-center hover:bg-gray-50">
              <div className="bg-blue-500 text-white w-12 h-12 rounded flex items-center justify-center mr-3">
                <span className="font-medium text-lg">Un</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Untitled Base</h3>
                <p className="text-xs text-gray-500">Base opened 12 minutes ago</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-3 flex items-center hover:bg-gray-50">
              <div className="bg-green-600 text-white w-12 h-12 rounded flex items-center justify-center mr-3">
                <span className="font-medium text-lg">Un</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Untitled Base</h3>
                <p className="text-xs text-gray-500">Base opened 12 minutes ago</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-3 flex items-center hover:bg-gray-50">
              <div className="bg-green-600 text-white w-12 h-12 rounded flex items-center justify-center mr-3">
                <span className="font-medium text-lg">Ew</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">ewer</h3>
                <p className="text-xs text-gray-500">Base opened 3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}