import React from 'react';
import { Search, Plus, Bell } from 'lucide-react';
export function TopBar() {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Search */}
      <div className="relative w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-12 py-2.5 border-none rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 shadow-sm"
          placeholder="Search or type a command" />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-400 text-sm font-medium">⌘F</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors font-medium text-sm">
          <Plus size={18} />
          <span>New Project</span>
        </button>

        <button className="p-2.5 bg-white rounded-full text-gray-500 hover:text-gray-900 shadow-sm relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 block h-2 w-2 rounded-full bg-orange-400 ring-2 ring-white" />
        </button>

        <div className="h-10 w-10 rounded-full bg-purple-100 overflow-hidden border-2 border-white shadow-sm">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            alt="User avatar"
            className="h-full w-full object-cover" />

        </div>
      </div>
    </div>);

}