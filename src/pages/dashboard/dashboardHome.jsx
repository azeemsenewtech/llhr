import React from 'react';
import { Building2, FileText, DollarSign, Bell } from 'lucide-react';

const DashboardOverview = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <StatCard 
          icon={Building2} 
          value="178+" 
          label="Active Properties" 
          iconColor="text-blue-500" 
          bgColor="bg-blue-50"
        />
        <StatCard 
          icon={FileText} 
          value="3/3" 
          label="Active Contracts" 
            iconColor="text-blue-500" 
          bgColor="bg-blue-50"
        />
        <StatCard 
          icon={DollarSign} 
          value="$0" 
          label="This Month Revenue" 
            iconColor="text-blue-500" 
          bgColor="bg-blue-50"
        />
        <StatCard 
          icon={Bell} 
          value="5" 
          label="Pending Offers" 
           iconColor="text-blue-500" 
          bgColor="bg-blue-50"
         
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. Property Overview */}
        <CardContainer title="Property Overview">
          <div className="space-y-5 mb-6">
            <PropertyItem 
              name="Luxury Apartment Downtown" 
              price="$2,500/mo" 
              status="Active" 
              statusColor="bg-[#1787B1] text-white"
            />
            <PropertyItem 
              name="Modern Studio near Park" 
              price="$1,800/mo" 
              status="Active" 
              statusColor="bg-[#1787B1] text-white"
            />
            <PropertyItem 
              name="Family House with Garden" 
              price="$3,200/mo" 
              status="Draft" 
              statusColor="bg-gray-100 text-gray-600"
            />
          </div>
          <ViewAllButton text="View All Properties" />
        </CardContainer>

        {/* 2. Contracts Overview */}
        <CardContainer title="Contracts Overview">
          <div className="space-y-6 mb-6">
            <ContractItem 
              property="Luxury Apartment Downtown"
              tenant="Sarah Johnson"
              endDate="2025-12-15"
              status="Active"
              statusColor="bg-[#1787B1] text-white"
            />
             <div className="h-px bg-gray-100 w-full"></div>
            <ContractItem 
              property="Modern Studio near Park"
              tenant="Mike Brown"
              endDate="2025-11-30"
              status="Pending"
              statusColor="bg-gray-100 text-gray-600"
            />
          </div>
          <ViewAllButton text="View All Contracts" />
        </CardContainer>

        {/* 3. Payment Summary */}
        <CardContainer title="Payment Summary">
          <div className="space-y-6 mb-6">
            <PaymentItem 
              property="Luxury Apartment Downtown"
              tenant="Sarah Johnson"
              dueDate="2025-11-01"
              amount="$2,500"
            />
            <div className="h-px bg-gray-100 w-full"></div>
            <PaymentItem 
              property="Modern Studio near Park"
              tenant="Mike Brown"
              dueDate="2025-11-05"
              amount="$1,800"
            />
          </div>
          <ViewAllButton text="View All Payments" />
        </CardContainer>

        {/* 4. Notifications Panel */}
        <CardContainer title="Notifications Panel">
          <div className="space-y-6 mb-6">
            <NotificationItem 
              text="New offer received for Luxury Apartment Downtown"
              time="2 hours ago"
            />
            <div className="h-px bg-gray-100 w-full"></div>
            <NotificationItem 
              text="Payment received from Sarah Johnson - $2,500"
              time="5 hours ago"
            />
            <div className="h-px bg-gray-100 w-full"></div>
            <NotificationItem 
              text="Contract renewal reminder for Modern Studio"
              time="1 day ago"
            />
          </div>
          <ViewAllButton text="View All Notifications" />
        </CardContainer>

      </div>
    </div>
  );
};

/* --- Helper Components --- */

const StatCard = ({ icon: Icon, value, label, iconColor, bgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
    <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center shrink-0`}>
      <Icon className={iconColor} size={24} strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  </div>
);

const CardContainer = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-full">
    <h2 className="text-lg font-bold text-[#1787B1] mb-6">{title}</h2>
    <div className="flex-1 flex flex-col justify-between">
      {children}
    </div>
  </div>
);

const PropertyItem = ({ name, price, status, statusColor }) => (
  <div className="flex items-start justify-between py-1">
    <div>
      <h4 className="text-sm font-semibold text-slate-800">{name}</h4>
      <p className="text-sm text-slate-500 mt-1">{price}</p>
    </div>
    <span className={`px-3 py-1 rounded-md text-xs font-semibold ${statusColor}`}>
      {status}
    </span>
  </div>
);

const ContractItem = ({ property, tenant, endDate, status, statusColor }) => (
  <div className="flex items-start justify-between">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <h4 className="text-sm font-semibold text-slate-800">{property}</h4>
      </div>
      <p className="text-xs text-slate-500 mb-0.5">{tenant}</p>
      <p className="text-xs text-slate-400">Ends: {endDate}</p>
    </div>
    <span className={`px-3 py-1 rounded-md text-xs font-semibold ${statusColor}`}>
      {status}
    </span>
  </div>
);

const PaymentItem = ({ property, tenant, dueDate, amount }) => (
  <div className="flex items-start justify-between">
    <div>
      <h4 className="text-sm font-semibold text-slate-800 mb-1">{property}</h4>
      <p className="text-xs text-slate-500 mb-0.5">{tenant}</p>
      <p className="text-xs text-slate-400">Due: {dueDate}</p>
    </div>
    <span className="text-[#1787B1] font-bold text-sm">{amount}</span>
  </div>
);

const NotificationItem = ({ text, time }) => (
  <div className="flex gap-3 items-start">
    <div className="w-2 h-2 bg-[#1787B1] rounded-full mt-1.5 shrink-0"></div>
    <div>
      <p className="text-sm font-medium text-slate-800 leading-snug">{text}</p>
      <p className="text-xs text-slate-400 mt-1">{time}</p>
    </div>
  </div>
);

const ViewAllButton = ({ text }) => (
  <button className="w-full py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-gray-50 hover:text-slate-800 transition-colors mt-2">
    {text}
  </button>
);

export default DashboardOverview;