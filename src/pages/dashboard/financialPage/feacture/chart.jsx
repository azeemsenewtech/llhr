import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { ChevronDown } from 'lucide-react';

// --- Mock Data ---

const lineData = [
  { name: 'Jan', expenses: 2000, revenue: 8500 },
  { name: 'Feb', expenses: 2200, revenue: 8500 },
  { name: 'Mar', expenses: 1800, revenue: 9800 },
  { name: 'Apr', expenses: 2100, revenue: 9800 },
  { name: 'May', expenses: 1900, revenue: 9800 },
  { name: 'Jun', expenses: 2300, revenue: 9800 },
  { name: 'Jul', expenses: 2100, revenue: 12000 },
  { name: 'Aug', expenses: 2200, revenue: 12000 },
  { name: 'Sep', expenses: 1800, revenue: 12000 },
  { name: 'Oct', expenses: 2400, revenue: 12000 },
  { name: 'Nov', expenses: 2100, revenue: 12000 },
  { name: 'Dec', expenses: 2000, revenue: 12000 },
];

const pieData = [
  { name: 'Modern Studio', value: 19 },
  { name: 'Luxury Apartment', value: 26 },
  { name: 'Cozy Loft', value: 23 },
  { name: 'Family House', value: 33 },
];

const PIE_COLORS = ['#9CA3AF', '#3B82F6', '#1F2937', '#2684ae'];

// --- Custom Label Component for Pie Chart ---
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
  const RADIAN = Math.PI / 180;
  // Calculate position for the label
  const radius = outerRadius * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Determine text anchor based on position (left or right side)
  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <text 
      x={x} 
      y={y} 
      fill={PIE_COLORS[index]} 
      textAnchor={textAnchor} 
      dominantBaseline="central" 
      className="text-[10px] font-medium"
    >
      {`${name}: ${value}%`}
    </text>
  );
};

const DashboardCharts = () => {
  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      
      {/* Top Filter Section */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-gray-50">
          All Properties
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-gray-50">
          Last 12 Months
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Card: Rent Trends */}
        <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Rent Trends - Revenue vs Expenses</h3>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  ticks={[0, 3000, 6000, 9000, 12000]}
                  domain={[0, 13000]}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Line 
                  type="monotone" // smooths the line slightly like the image
                  dataKey="expenses" 
                  stroke="#2684ae" // Light Blue/Teal
                  strokeWidth={2}
                  dot={{ r: 4, fill: 'white', stroke: '#2684ae', strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="stepAfter" // Creates the stepped look for revenue
                  dataKey="revenue" 
                  stroke="#1F2937" // Dark Navy
                  strokeWidth={2}
                  dot={{ r: 4, fill: 'white', stroke: '#1F2937', strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Custom Legend */}
          <div className="flex justify-center items-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full border-2 border-[#2684ae] bg-white mr-1"></div>
                <div className="h-0.5 w-4 bg-[#2684ae]"></div>
              </div>
              <span className="text-sm text-[#2684ae] font-medium">Expenses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full border-2 border-gray-800 bg-white mr-1"></div>
                <div className="h-0.5 w-4 bg-gray-800"></div>
              </div>
              <span className="text-sm text-gray-700 font-medium">Revenue</span>
            </div>
          </div>
        </div>

        {/* Right Card: Income by Property */}
        <div className="border border-gray-200 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Income by Property</h3>
          
          <div className="h-[300px] w-full flex items-center justify-center relative">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderCustomizedLabel}
                    outerRadius={85}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke="white" strokeWidth={2} />
                    ))}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCharts;