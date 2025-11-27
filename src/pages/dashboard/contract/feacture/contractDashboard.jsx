import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  FileText, 
  Eye, 
  Download, 
  MessageSquare 
} from 'lucide-react';

const ContractsDashboard = ({ onStart}) => {
  // Mock Data based on the image
  const contracts = [
    {
      id: 1,
      title: "Luxury Apartment Downtown",
      tenant: "Sarah Johnson",
      type: "Residential Lease",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      rent: "$2,500",
      signed: "Yes",
      status: "Active",
      showDownload: true, // First card has download
    },
    {
      id: 2,
      title: "Luxury Apartment Downtown",
      tenant: "Sarah Johnson",
      type: "Residential Lease",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      rent: "$2,500",
      signed: "Yes",
      status: "Active",
      showDownload: false, // Second card in image didn't show download button
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 font-sans">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-xl font-poppin font-bold text-[#1a8bb5]">All Contracts</h1>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-grow md:flex-grow-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-200 font-poppin rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#1a8bb5]"
              placeholder="Search documents..."
            />
          </div>

          {/* Filter Button */}
          <button className="p-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 text-gray-500">
            <Filter className="h-4 w-4" />
          </button>

          {/* New Contract Button */}
          <button
           onClick={onStart}
           className="flex items-center gap-2 bg-[#1a8bb5] font-poppin hover:bg-[#157a9f] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            <Plus className="h-4 w-4" />
            New Contract
          </button>
        </div>
      </div>

      {/* Contracts List */}
      <div className="flex flex-col gap-4">
        {contracts.map((contract) => (
          <ContractCard key={contract.id} data={contract} />
        ))}
      </div>

    </div>
  );
};

const ContractCard = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Top Section: Icon, Title, Status */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          {/* File Icon Box */}
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
            <FileText className="h-6 w-6 text-[#1a8bb5]" />
          </div>
          
          {/* Title & Tenant */}
          <div>
            <h3 className="font-bold font-poppin text-gray-800 text-lg leading-tight">
              {data.title}
            </h3>
            <p className="text-gray-500 font-poppin text-sm mt-1">{data.tenant}</p>
          </div>
        </div>

        {/* Status Badge */}
        <span className="bg-[#1a8bb5] font-poppin text-white text-xs font-bold px-3 py-1 rounded-full">
          {data.status}
        </span>
      </div>

      {/* Data Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-2 mb-6">
        {/* Column 1 */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-poppin text-xs mb-1">Type</span>
          <span className="text-[#1a8bb5] font-poppin text-sm font-medium">{data.type}</span>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-poppin text-xs mb-1">Start Date</span>
          <span className="text-[#1a8bb5] font-poppin text-sm font-medium">{data.startDate}</span>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-poppin text-xs mb-1">End Date</span>
          <span className="text-[#1a8bb5] font-poppin text-sm font-medium">{data.endDate}</span>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-poppin text-xs mb-1">Monthly Rent</span>
          <span className="text-[#1a8bb5] font-poppin text-sm font-medium">{data.rent}</span>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-poppin text-xs mb-1">Signed</span>
          <span className="text-[#1a8bb5] font-poppin text-sm font-medium">{data.signed}</span>
        </div>
      </div>

      {/* Bottom Actions Section */}
      <div className="flex justify-end items-center gap-3 border-t border-transparent md:border-none pt-4 md:pt-0">
        <button className="flex items-center gap-2 font-poppin text-[#1a8bb5] hover:bg-blue-50 px-3 py-1.5 rounded-md border border-gray-100 text-sm font-medium transition-colors">
          <Eye className="h-4 w-4" />
          View
        </button>

        {data.showDownload && (
          <button className="flex items-center gap-2 font-poppin text-[#1a8bb5] hover:bg-blue-50 px-3 py-1.5 rounded-md border border-gray-100 text-sm font-medium transition-colors">
            <Download className="h-4 w-4" />
            Download
          </button>
        )}

        <button className="flex items-center gap-2 font-poppin text-[#1a8bb5] hover:bg-blue-50 px-3 py-1.5 rounded-md border border-gray-100 text-sm font-medium transition-colors">
          <MessageSquare className="h-4 w-4" />
          Chat
        </button>
      </div>
    </div>
  );
};

export default ContractsDashboard;