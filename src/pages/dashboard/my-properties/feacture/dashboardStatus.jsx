import React from 'react';

const DashboardStats = () => {
  // Data matching the image provided
  const statsData = [
    { value: "178+", label: "Total Properties" },
    { value: "178+", label: "Available Properties" },
    { value: "8", label: "Occupied Properties" },
    { value: "17", label: "Avg. UHAR Score" },
    { value: "68%", label: "Average Profitability" },
    { value: "$2,34", label: "Average Rent" },
  ];

  return (
    <div className="w-full px-1 py-6 bg-gray-50">
      {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col laptop, 6 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 max-w-7xl mx-auto">
        {statsData.map((stat, index) => (
          <StatCard 
            key={index} 
            className=""
            value={stat.value} 
            label={stat.label} 
          />
        ))}
      </div>
    </div>
  );
};

// Reusable Card Component
const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-500">
        {/* Building Icon SVG */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="text-[#2d8cbb] font-bold text-lg leading-none mb-1">
          {value}
        </span>
        <span className="text-gray-500 text-[11px] font-medium uppercase tracking-wide leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
};

export default DashboardStats;