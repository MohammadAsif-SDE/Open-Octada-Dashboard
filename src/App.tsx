import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StatsCards } from './components/StatsCards';
import { ProductivityTrends } from './components/ProductivityTrends';
import { WorkLifeBalance } from './components/WorkLifeBalance';
import { TimeTracker } from './components/TimeTracker';
import { Reminders } from './components/Reminders';
import { AIInsights } from './components/AIInsights';
export function App() {
  return <div className="min-h-screen bg-black p-4 flex items-center justify-center font-sans">
      {/* Main Container - Rounded Window Look */}
      <div className="w-full max-w-[1400px] h-[900px] bg-[#F8F9FA] rounded-[32px] overflow-hidden flex shadow-2xl relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8">
            <TopBar />

            {/* Greeting */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Hello, Alex!
              </h1>
              <p className="text-gray-500">Here's your weekly overview</p>
            </div>

            {/* Stats Row */}
            <StatsCards />

            {/* Middle Row: Charts */}
            <div className="grid grid-cols-12 gap-6 mb-6 h-[280px]">
              <div className="col-span-8 h-full">
                <ProductivityTrends />
              </div>
              <div className="col-span-4 h-full">
                <WorkLifeBalance />
              </div>
            </div>

            {/* Bottom Row: Widgets */}
            <div className="grid grid-cols-12 gap-6 h-[240px]">
              <div className="col-span-4 h-full">
                <TimeTracker />
              </div>
              <div className="col-span-5 h-full">
                <Reminders />
              </div>
              <div className="col-span-3 h-full relative">
                {/* Overlapping effect for AI card */}
                <div className="absolute -top-12 bottom-0 left-0 right-0">
                  <AIInsights />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}