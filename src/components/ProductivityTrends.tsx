import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell } from
'recharts';
const data = [
{
  name: 'S',
  value: 3,
  type: 'light'
},
{
  name: 'M',
  value: 8,
  type: 'active'
},
{
  name: 'T',
  value: 5,
  type: 'light'
},
{
  name: 'W',
  value: 10,
  type: 'active'
},
{
  name: 'T',
  value: 7,
  type: 'striped'
},
{
  name: 'F',
  value: 9,
  type: 'active'
},
{
  name: 'S',
  value: 4,
  type: 'light'
}];

export function ProductivityTrends() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Productivity Trends
          </h3>
          <p className="text-gray-500 text-sm">Daily focus hours</p>
        </div>
      </div>

      <div className="flex flex-1 gap-8">
        {/* Left Stats */}
        <div className="flex flex-col justify-center min-w-[120px]">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold text-gray-900">18</span>
            <span className="text-gray-500 text-xl font-medium">h</span>
          </div>
          <p className="text-gray-500 text-sm mb-3">logged this week</p>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold w-fit">
            +12% vs last week
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={32}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: '#9CA3AF',
                  fontSize: 12
                }}
                dy={10} />

              <Tooltip
                cursor={{
                  fill: 'transparent'
                }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-black text-white text-xs py-1 px-3 rounded-lg mb-2">
                        {payload[0].value} hours
                      </div>);

                  }
                  return null;
                }} />

              <Bar dataKey="value" radius={[16, 16, 16, 16]}>
                {data.map((entry, index) =>
                <Cell
                  key={`cell-${index}`}
                  fill={
                  entry.type === 'active' ?
                  '#7C3AED' :
                  entry.type === 'striped' ?
                  'url(#stripedPattern)' :
                  '#E9D5FF'
                  } />

                )}
              </Bar>
              <defs>
                <pattern
                  id="stripedPattern"
                  patternUnits="userSpaceOnUse"
                  width="4"
                  height="4"
                  patternTransform="rotate(45)">

                  <rect
                    width="2"
                    height="4"
                    transform="translate(0,0)"
                    fill="#7C3AED"
                    opacity="0.3" />

                </pattern>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>);

}