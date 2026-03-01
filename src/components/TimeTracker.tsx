import React from 'react';
import { Pause, Square } from 'lucide-react';
export function TimeTracker() {
  return (
    <div className="bg-gray-950 p-6 rounded-2xl shadow-sm text-white h-full flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-6 z-10">
        <h3 className="font-medium text-gray-200">Time Tracker</h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
            <Pause size={14} fill="currentColor" />
          </button>
          <button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
            <Square size={12} fill="currentColor" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-end pb-2 z-10">
        <div className="relative w-48 h-24 overflow-hidden">
          {/* Gauge Background */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[12px] border-gray-800 box-border" />

          {/* Gauge Progress (Gradient) */}
          <svg className="absolute top-0 left-0 w-48 h-48 rotate-[180deg]">
            <defs>
              <linearGradient
                id="gaugeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">

                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            <circle
              cx="96"
              cy="96"
              r="84" // 96 - 12 (border width)
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="12"
              strokeDasharray="264" // Half circumference approx
              strokeDashoffset="60"
              strokeLinecap="round"
              className="opacity-90" />

          </svg>
        </div>

        <div className="text-4xl font-mono font-bold mt-[-10px]">40:38</div>
      </div>
    </div>);

}