import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// --- Mock Data ---
const performanceData = [
  {
    id: 1,
    name: 'Luxury Apartment',
    shortName: 'Luxury Apt',
    monthly: 2500,
    annualStr: '$116,400', // Matches image text exactly (even if math varies)
    monthlyStr: '$2500/mo',
  },
  {
    id: 2,
    name: 'Modern Studio',
    shortName: 'Modern Studio',
    monthly: 1800,
    annualStr: '$21,600',
    monthlyStr: '$1800/mo',
  },
  {
    id: 3,
    name: 'Family House',
    shortName: 'Family House',
    monthly: 3200,
    annualStr: '$38,400',
    monthlyStr: '$3200/mo',
  },
  {
    id: 4,
    name: 'Cozy Loft',
    shortName: 'Cozy Loft',
    monthly: 2200,
    annualStr: '$26,400',
    monthlyStr: '$2200/mo',
  },
];

const PropertyPerformance = () => {
  return (
    <div className="p-6 bg-white min-h-[500px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Left Card: Bar Chart */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Monthly Income by Property
          </h3>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                barSize={60}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="shortName" 
                  axisLine={true} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 11 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 11 }}
                  domain={[0, 3500]}
                  ticks={[0, 800, 1600, 2400, 3200]}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar 
                  dataKey="monthly" 
                  fill="#2684ae" 
                  radius={[2, 2, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Legend */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#2684ae] rounded-sm"></div>
              <span className="text-sm text-[#2684ae] font-medium">Monthly Income ($)</span>
            </div>
          </div>
        </div>

        {/* Right Card: Summary List */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Property Performance Summary
          </h3>

          <div className="flex flex-col gap-0">
            {performanceData.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex items-start justify-between py-5 ${
                  index !== performanceData.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="mt-1 w-5 h-5 bg-[#2684ae] rounded-[4px] flex-shrink-0"></div>
                  
                  {/* Text Details */}
                  <div>
                    <h4 className="text-base font-bold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 mt-0.5">Annual income</p>
                  </div>
                </div>

                {/* Price Details */}
                <div className="text-right">
                  <p className="text-base font-bold text-[#2684ae]">
                    {item.annualStr}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {item.monthlyStr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyPerformance;