import React from 'react';
import {
  LayoutGrid,
  Folder,
  Calendar,
  Sparkles,
  Clock,
  BarChart2,
  LogOut,
  X } from
'lucide-react';
export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full flex flex-col border-r border-gray-100 p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
          <X size={20} strokeWidth={3} className="text-orange-400" />
        </div>
        <span className="text-xl font-bold text-gray-900">Octada</span>
      </div>

      {/* Main Menu */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
          Main
        </h3>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 bg-gray-900 text-white rounded-xl transition-colors">

            <LayoutGrid size={18} />
            <span className="font-medium">Overview</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">

            <Folder size={18} />
            <span className="font-medium">Projects</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">

            <Calendar size={18} />
            <span className="font-medium">Calendar</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">

            <Sparkles size={18} />
            <span className="font-medium">AI Insights</span>
          </a>
        </nav>
      </div>

      {/* Tools Menu */}
      <div className="flex-1">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
          Tools
        </h3>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">

            <Clock size={18} />
            <span className="font-medium">Time Tracker</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">

            <BarChart2 size={18} />
            <span className="font-medium">Analytics</span>
          </a>
        </nav>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors mt-auto">
        <LogOut size={18} />
        <span className="font-medium">Logout</span>
      </button>
    </div>);

}