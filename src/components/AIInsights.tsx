import React from 'react';
import { Sparkles, MoreHorizontal } from 'lucide-react';
export function AIInsights() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg text-white h-full flex flex-col relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
          <Sparkles size={12} className="text-purple-200" />
          <span className="text-xs font-medium text-purple-100">
            AI Insights
          </span>
        </div>
        <button className="text-purple-200 hover:text-white">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <p className="text-sm font-medium leading-relaxed mb-6 relative z-10">
        On Wednesday you're{' '}
        <span className="font-bold text-white">overloaded</span>. Should we move{' '}
        <span className="font-bold text-white">2 tasks</span> to Thursday?
      </p>

      <div className="flex flex-col gap-2 mt-auto relative z-10">
        <button className="w-full py-2 px-4 rounded-xl bg-gray-900/40 hover:bg-gray-900/60 text-sm font-medium transition-colors border border-white/10">
          Ignore
        </button>
        <button className="w-full py-2 px-4 rounded-xl bg-white text-purple-900 hover:bg-gray-100 text-sm font-bold transition-colors shadow-lg">
          Reschedule
        </button>
      </div>
    </div>);

}