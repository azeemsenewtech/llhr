import React from 'react';
// Using lucide-react for the building icon, standard in many React setups
import { Building2 } from 'lucide-react';

const ContractStats = () => {
  // Data derived exactly from the image
  const stats = [
    { label: "Active Contracts", value: "17", icon: Building2 },
    { label: "Pending Signature", value: "12", icon: Building2 },
    { label: "Drafts", value: "2", icon: Building2 },
    { label: "Total Contracts", value: "5", icon: Building2 },
  ];

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* 
        Grid Layout:
        - 1 column on mobile (grid-cols-1)
        - 2 columns on tablet (md:grid-cols-2)
        - 4 columns on desktop (lg:grid-cols-4)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            label={stat.label}
            value={stat.value}
            Icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, Icon }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-4 shadow-sm min-w-[200px]">
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-[#2d8cbb]" strokeWidth={1.5} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="text-[#2d8cbb] font-bold text-xl leading-none mb-1">
          {value}
        </span>
        <span className="text-gray-500 text-sm font-medium">
          {label}
        </span>
      </div>
    </div>
  );
};

export default ContractStats;