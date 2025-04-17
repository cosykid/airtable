"use client";

import { useState } from "react";
import { Search, ChevronDown, Star, StarOff, Plus, Grid, Menu, MoreHorizontal, Home, Users, Book, ShoppingCart, Upload } from "lucide-react";
import { api } from "~/trpc/react";
import Image from "next/image";
import WorkspaceBase from "~/app/_components/workspaceBase";

export default function WorkspaceUI({
  baseList,
}: {
  baseList: [string, string][];
}) {
  const [starred, setStarred] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isWorkspacesOpen, setIsWorkspacesOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const utils = api.useUtils();
  const { data: bases } = api.base.getAll.useQuery();

  const createBase = api.base.create.useMutation({
    onSuccess: (newBase) => {
      utils.base.getAll.setData(undefined, (prev) =>
        prev ? [newBase, ...prev] : [newBase]
      );
    },
  });

  return (
    <div className="h-screen text-gray-800 flex flex-col">
      {/* Top Navbar (Full Width) */}
      <div className="flex items-center p-1.5 border-b border-gray-200 bg-white w-full">
        <div className="flex items-center mr-4">
          <button
            className="p-2 mr-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={16} className="hover:cursor-pointer text-gray-600" />
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
              <use href="/icon_definitions.svg#Bell"/>
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
                  onClick={() => {
                    // sign out
                    window.location.href = "/api/auth/signout";
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Content Below Navbar */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div
          className={`border-r border-gray-200 flex flex-col transition-all duration-50 ${
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
                    <h2 className="font-medium">Home</h2>
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform ${isHomeOpen ? "rotate-0" : "rotate-180"}`}
                    />
                  </button>
                </div>
                {isHomeOpen && (
                  <div
                    className={`overflow-hidden transition-all duration-50 ease-in-out px-4 mb-4
                      ${isSidebarOpen ? "max-w-full opacity-100" : "max-w-0 opacity-0"}
                    `}
                  >
                    <p className="text-xs text-gray-60 max-h-8">
                      Your starred bases, interfaces, and workspaces will appear here
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between px-4 mb-4">
                  <button
                    className="flex items-center font-bold text-sm"
                    onClick={() => setIsWorkspacesOpen(!isWorkspacesOpen)}
                  >
                    <h2 className="font-medium">All workspaces</h2>
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
                  <button
                    onClick={() => createBase.mutate({ title: "Untitled Base" })}
                    className="hover:cursor-pointer bg-[rgb(22,110,225)] text-white px-4 py-[8.8px] mb-1.5 rounded text-xs font-medium w-full text-left flex items-center justify-center
                              transition-transform duration-150 ease-in-out
                              hover:scale-105 active:scale-95 hover:brightness-110 active:brightness-90">
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
        <div className="flex-1 flex">
          {/* Middle section */}
          <div className="flex-1 ml-8 mt-3 m">
            {/* Workspace Header */}
            <div className="p-4 flex flex-around items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold mr-2 text-[1.6rem]">Workspace</h1>
                <div className="bg-gray-200 py-0.5 px-2 flex rounded-md">
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
            </div> {/* Filter Controls */}

            {/* Base list */}
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(bases ?? baseList).map((b, index) => {
                const title = typeof b === "object" && "title" in b ? b.title : b[0];
                const lastAccessed = typeof b === "object" && "lastAccessed" in b ? new Date(b.lastAccessed).toLocaleString() : "";

                return (
                  <WorkspaceBase
                    key={typeof b === "object" && "id" in b ? b.id : index}
                    title={title}
                    lastOpened={lastAccessed}
                  />
                );
              })}
            </div> {/* Baselist*/}
          </div> {/* Middle Section */}

          {/* Right hand side*/}
          <div className="w-[300px] p-4.5">
            {/* Create & Share & ... */}
            <div className="flex items-center ml-2 mt-3">
              <button className="bg-[rgb(22,110,225)] text-white px-3.5 py-2 rounded text-xs font-medium hover:bg-blue-700">
                Create
              </button>
              <button className="ml-2 border border-gray-300 px-3.5 py-2 rounded text-xs font-medium hover:bg-gray-100">
                Share
              </button>
              <button className="ml-2 border border-gray-300 p-2 px-3 rounded hover:bg-gray-100">
                <MoreHorizontal size={14} />
              </button>
            </div>
            {/* Collaborators */}
            <div className="p-2 pt-3 pb-4 mt-3">
              <h2 className="mt-1 font-medium text-m">Collaborators</h2>
              <div className="pt-3 flex items-center">
                <div className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  L
                </div>
                <span className="ml-2 text-xs font-medium">You (owner)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}