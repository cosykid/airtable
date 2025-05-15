"use client";

import { useState } from "react";
import { ChevronDown, Menu, Grid, Star, StarOff } from "lucide-react";
import WorkspaceBase from "~/app/_workspaceComponents/workspaceBase";

export default function MainContent({ baseList }: { baseList: [number, string, string][] }) {
  const [viewMode, setViewMode] = useState("grid");
  const [starred, setStarred] = useState(true);

  return (
    <div className="flex-1 ml-8 mt-3">
      {/* Workspace Header */}
      <div className="p-4 flex flex-around items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-2 text-[1.6rem]">Workspace</h1>
          <div className="bg-gray-200 py-0.5 px-2 flex rounded-md">
            <div className="flex items-center text-[11px] font-medium text-gray-600 mr-2">FREE PLAN</div>
            <p className="text-[10px] pr-2.5">&#8226;</p>
            <button className="text-[11px] font-medium text-blue-400 hover:underline">UPGRADE</button>
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
      </div>

      {/* Base list */}
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {baseList.map(([id, title, lastAccessed]) => (
          <WorkspaceBase key={id} title={title} lastOpened={lastAccessed} />
        ))}
      </div>
    </div>
  );
}
