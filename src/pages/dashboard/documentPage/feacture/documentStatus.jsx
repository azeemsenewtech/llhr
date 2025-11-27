import React from 'react';
import { DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="flex flex-1 items-center p-4 bg-white border border-gray-200 rounded-xl min-w-[200px]">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
        <Icon size={24} strokeWidth={2} />
      </div>
      
      {/* Text Content */}
      <div className="ml-4">
        <h3 className="text-2xl font-bold text-sky-700">
          {value}
        </h3>
        <p className="text-sm font-medium text-slate-600">
          {label}
        </p>
      </div>
    </div>
  );
};

const DashboardStats = () => {
  const statsData = [
    {
      id: 1,
      icon: DollarSign,
      value: 5,
      label: 'Total Documents',
    },
    {
      id: 2,
      icon: Clock, // Represents the clock icon
      value: 12,
      label: 'Verified',
    },
    {
      id: 3,
      icon: CheckCircle, // Represents the checkmark icon
      value: 23,
      label: 'Pending Review',
    },
    {
      id: 4,
      icon: CheckCircle,
      value: 23,
      label: 'Pending Review',
    },
    {
      id: 5,
      icon: AlertCircle, // Represents the exclamation icon
      value: 5,
      label: 'Avg Score',
    },
  ];

  return (
    <div className="w-full p-2 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;