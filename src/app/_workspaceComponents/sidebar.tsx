"use client";

import { Book, ChevronDown, Home, Plus, ShoppingCart, Upload, Users } from "lucide-react";

export default function Sidebar({
  isSidebarOpen,
  isHomeOpen,
  setIsHomeOpen,
  isWorkspacesOpen,
  setIsWorkspacesOpen,
  createBase,
}: any) {
  return (
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
                className={`overflow-hidden transition-all duration-50 ease-in-out px-4 mb-4 ${
                  isSidebarOpen ? "max-w-full opacity-100" : "max-w-0 opacity-0"
                }`}
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
                    className={`transition-transform ${
                      isWorkspacesOpen ? "rotate-0" : "rotate-180"
                    }`}
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
                className="hover:cursor-pointer bg-[rgb(22,110,225)] text-white px-4 py-[8.8px] mb-1.5 rounded text-xs font-medium w-full text-left flex items-center justify-center transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 hover:brightness-110 active:brightness-90"
              >
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
  );
}