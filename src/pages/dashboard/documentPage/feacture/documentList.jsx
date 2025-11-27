import React from 'react';
import { 
  Search, 
  Filter, 
  Upload, 
  FileText, 
  CheckCircle, 
  Eye, 
  Download, 
  Trash2 
} from 'lucide-react';
import DocumentCard from './documentCard';
import DocumentList1 from './documentList1';

// Reusable component for the metadata columns (Type, Date, Size, etc.)


// Reusable component for the action buttons (View, Download, Delete)


// const DocumentCard = () => {
//   return (
//     <div className="w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mt-6">
//       {/* Card Header: Icon, Title, Status */}
//       <div className="flex flex-col md:flex-row justify-between items-start mb-8">
//         <div className="flex items-start gap-4">
//           {/* Document Icon Box */}
//           <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg shrink-0">
//             <FileText className="text-cyan-600" size={24} />
//           </div>
          
//           {/* Title & Subtitle */}
//           <div>
//             <h3 className="text-lg font-bold text-slate-800">
//               Ownership Deed - Luxury Apartment.pdf
//             </h3>
//             <p className="text-sm text-gray-500 mt-1">
//               Luxury Apartment Downtown
//             </p>
//           </div>
//         </div>

//         {/* Status Badge */}
//         <div className="flex items-center gap-2 mt-4 md:mt-0">
//           <CheckCircle className="text-green-500" size={20} />
//           <span className="bg-[#1e7e9e] text-white text-xs px-3 py-1 rounded-md font-medium">
//             Verified
//           </span>
//         </div>
//       </div>

//       {/* Metadata Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//         <InfoColumn label="Type" value="Ownership Proof" />
//         <InfoColumn label="Upload Date" value="2025-11-01" />
//         <InfoColumn label="Size" value="2.3 MB" />
//         <InfoColumn label="Version" value="1.0" />
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-transparent md:border-none">
//         <ActionButton icon={Eye} label="View" />
//         <ActionButton icon={Download} label="Download" />
//         <ActionButton icon={Trash2} label="Delete" colorClass="text-cyan-600" />
//       </div>
//     </div>
//   );
// };

const DocumentList = () => {
  return (
    <div className=" mt-4 p-8 rounded-xl  bg-white min-h-screen font-sans">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
        <h2 className="text-xl font-bold text-[#1e7e9e]">All Documents</h2>
        
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search documents..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Filter Button */}
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
            <Filter size={18} />
          </button>

          {/* Upload Button */}
          <button className="flex items-center px-4 py-2 bg-[#1e7e9e] text-white rounded-lg hover:bg-cyan-700 transition-colors">
            <Upload size={18} className="mr-2" />
            <span className="text-sm font-medium">Upload Document</span>
          </button>
        </div>
      </div>

      {/* Render the Card */}
      <DocumentCard />
      <DocumentList1/>

    </div>
  );
};

export default DocumentList;