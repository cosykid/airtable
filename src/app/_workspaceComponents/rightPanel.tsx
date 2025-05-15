"use client";

import { MoreHorizontal } from "lucide-react";

export default function RightPanel() {
  return (
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
  );
}
