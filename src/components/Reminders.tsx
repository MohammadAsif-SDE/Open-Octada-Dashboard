import React from 'react';
import { ChevronLeft, ChevronRight, Video } from 'lucide-react';
export function Reminders() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Reminders</h3>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600">
            <ChevronLeft size={18} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-4">What's coming up next:</p>

      <div className="bg-gray-50 rounded-xl p-4 flex gap-4 items-center mt-auto">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-green-600">
          <Video size={20} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-sm truncate">
            Today's Meeting
          </h4>
          <p className="text-gray-500 text-xs truncate">
            Review campaign results with team.
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-bold rounded uppercase">
            Work
          </span>
          <span className="text-gray-400 text-xs font-medium">14:00</span>
        </div>
      </div>
    </div>);

}