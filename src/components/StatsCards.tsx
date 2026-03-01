import React from 'react';
import { Briefcase, CheckCircle2, Timer, Calendar } from 'lucide-react';
export function StatsCards() {
  return (
    <div className="grid grid-cols-5 gap-6 mb-8">
      {/* Card 1: Projects */}
      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4">
          <Briefcase size={20} />
        </div>
        <div className="flex items-baseline gap-1.5 mb-1">
          <span className="text-3xl font-bold text-gray-900">12</span>
          <span className="text-gray-500 font-medium">projects</span>
        </div>
        <p className="text-gray-400 text-sm">In Progress</p>
      </div>

      {/* Card 2: Tasks */}
      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
          <CheckCircle2 size={20} />
        </div>
        <div className="flex items-baseline gap-1.5 mb-1">
          <span className="text-3xl font-bold text-gray-900">48</span>
          <span className="text-gray-500 font-medium">tasks</span>
        </div>
        <p className="text-gray-400 text-sm">Completed</p>
      </div>

      {/* Card 3: Focus Hours */}
      <div className="bg-white p-5 rounded-2xl shadow-sm">
        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 mb-4">
          <Timer size={20} />
        </div>
        <div className="flex items-baseline gap-1.5 mb-1">
          <span className="text-3xl font-bold text-gray-900">18</span>
          <span className="text-gray-500 font-medium">h</span>
        </div>
        <p className="text-gray-400 text-sm">Focus Hours</p>
      </div>

      {/* Card 4: Activity Time */}
      <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="text-3xl font-bold text-gray-900">12</span>
            <span className="text-gray-500 font-medium">days</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Activity time</p>
        </div>

        {/* Activity Dots */}
        <div className="flex gap-1 flex-wrap">
          {[...Array(24)].map((_, i) =>
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-orange-400' : i % 2 === 0 ? 'bg-purple-500' : 'bg-gray-200'}`} />

          )}
        </div>
      </div>

      {/* Card 5: Balance Circle */}
      <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-center relative">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* SVG Ring */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#F3F4F6"
              strokeWidth="12"
              fill="none" />

            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#8B5CF6"
              strokeWidth="12"
              fill="none"
              strokeDasharray="351.86"
              strokeDashoffset="100"
              strokeLinecap="round" />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-gray-900">Balance</span>
            <span className="text-[10px] text-gray-500">This week</span>
          </div>
        </div>
      </div>
    </div>);

}