import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const data = [
{
  name: 'Work',
  value: 65,
  color: '#A78BFA'
},
{
  name: 'Life',
  value: 35,
  color: '#7C3AED'
} // Dark purple
];
export function WorkLifeBalance() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-bold text-gray-900 mb-6">
        Work-Life Balance
      </h3>

      <div className="flex-1 flex items-center gap-6">
        {/* Legend */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-purple-200" />
            <span className="text-sm text-gray-500">Work</span>
            <span className="text-sm font-bold text-gray-900 ml-auto">65%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-purple-600" />
            <span className="text-sm text-gray-500">Life</span>
            <span className="text-sm font-bold text-gray-900 ml-auto">35%</span>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="flex-1 h-32 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={55}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none">

                {data.map((entry, index) =>
                <Cell key={`cell-${index}`} fill={entry.color} />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>);

}