"use client"

import { useState } from 'react';
import { Search, ChevronDown, Star, Plus, Menu, Grid, MoreHorizontal, StarOff } from 'lucide-react';


export default function Dashboard() {
  const [starred, setStarred] = useState(false);
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col">
        <div className="p-3 border-b border-gray-200 flex items-center">
          <button className="p-1 mr-2">
            <Menu size={20} />
          </button>
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-1 rounded">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-xs font-bold">A</span>
              </div>
            </div>
            <span className="ml-2 font-semibold"><img src="/resources/logo.svg"/></span>
          </div>
        </div>

        <div className="flex flex-col p-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Home</h2>
            <ChevronDown size={16} />
          </div>

          <div className="bg-gray-100 p-2 rounded mb-4">
            <div className="flex items-start">
              <Star size={16} className="mt-1 text-gray-400" />
              <div className="ml-2 text-sm text-gray-500">
                Your starred bases, interfaces, and workspaces will appear here
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">All workspaces</h2>
            <div className="flex">
              <Plus size={16} className="mr-1" />
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-gray-200">
          <div className="p-3 flex items-center">
            <div className="mr-2">📚</div>
            <span className="text-sm">Templates and apps</span>
          </div>
          <div className="p-3 flex items-center">
            <div className="mr-2">🛒</div>
            <span className="text-sm">Marketplace</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <div className="flex-1 flex items-center mx-2">
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-100 border-gray-300 text-sm"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <div className="text-xs text-gray-400">⌘ K</div>
              </div>
            </div>
          </div>
          <button className="ml-auto px-4 py-1 text-sm">Help</button>
        </div>

        {/* Workspace Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-2">Workspace</h1>
            <div className="flex items-center text-sm text-gray-500 border border-gray-300 rounded mr-2 px-2">
              FREE PLAN
            </div>
            <div className="text-sm text-blue-500">UPGRADE</div>
            <button className="ml-2" onClick={() => setStarred(!starred)}>
              {starred ? <Star className="text-yellow-400" /> : <StarOff />}
            </button>
          </div>
          <div className="flex">
            <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Create</button>
            <button className="border border-gray-300 px-4 py-2 rounded mr-2">Share</button>
            <button className="border border-gray-300 p-2 rounded">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="flex items-center mr-4 text-sm">
              Opened by you <ChevronDown size={16} className="ml-1" />
            </button>
            <button className="flex items-center text-sm">
              Show all types <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <div className="flex">
            <button 
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <Menu size={16} />
            </button>
            <button 
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </button>
          </div>
        </div>

        {/* Collaborators */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <h2 className="font-medium">Collaborators</h2>
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              L
            </div>
            <span className="ml-2 text-sm">You (owner)</span>
          </div>
        </div>

        {/* Workspace Items */}
        <div className="px-4">
          <div className="border border-gray-200 rounded p-4 mb-4 flex items-center">
            <div className="bg-green-600 text-white w-12 h-12 rounded-md flex items-center justify-center mr-4">
              <span className="font-medium text-lg">Ew</span>
            </div>
            <div>
              <h3 className="font-medium">ewer</h3>
              <p className="text-sm text-gray-500">Base opened 1 minute ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}