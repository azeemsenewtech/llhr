import React from 'react';
import { 
  FileText, 
  Clock, 
  XCircle, 
  Eye, 
  Download, 
  Trash2, 
  Upload,
  CheckCircle 
} from 'lucide-react';

// Reusable Helper for Data Columns
const InfoColumn = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm font-medium text-gray-400 mb-1">{label}</span>
    <span className="text-sm font-medium text-cyan-600">{value}</span>
  </div>
);

// Reusable Helper for Action Buttons
const ActionButton = ({ icon: Icon, label, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-cyan-600 ${className}`}
  >
    <Icon size={16} className="mr-2" />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const DocumentCard = ({ data }) => {
  const isRejected = data.status === 'rejected';
  
  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg shrink-0">
            <FileText className="text-cyan-600" size={24} />
          </div>
          
          {/* Title */}
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              {data.fileName}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {data.project}
            </p>
          </div>
        </div>

        {/* Status Badge Logic */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          {data.status === 'pending' && (
            <>
              <Clock className="text-amber-400" size={20} />
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md font-medium">
                Pending
              </span>
            </>
          )}
          {data.status === 'rejected' && (
            <>
              <XCircle className="text-red-500" size={20} />
              <span className="bg-[#dc2646] text-white text-xs px-3 py-1 rounded-md font-medium">
                Rejected
              </span>
            </>
          )}
        </div>
      </div>

      {/* --- Metadata Grid --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <InfoColumn label="Type" value={data.type} />
        <InfoColumn label="Upload Date" value={data.uploadDate} />
        <InfoColumn label="Size" value={data.size} />
        <InfoColumn label="Version" value={data.version} />
      </div>

      {/* --- Rejection Alert Box (Conditional) --- */}
      {isRejected && (
        <div className="w-full bg-red-50 border border-red-100 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-red-800">
            Rejection Reason: <span className="font-normal">{data.rejectionReason}</span>
          </p>
        </div>
      )}

      {/* --- Action Buttons --- */}
      <div className="flex flex-wrap justify-end gap-3 pt-2">
        <ActionButton icon={Eye} label="View" />
        <ActionButton icon={Download} label="Download" />
        
        {/* Extra button for Rejected items */}
        {isRejected && (
          <ActionButton icon={Upload} label="Upload New Version" />
        )}
        
        <ActionButton icon={Trash2} label="Delete" />
      </div>
    </div>
  );
};

const DocumentList1 = () => {
  // Sample data replicating the screenshot
  const documents = [
    {
      id: 1,
      fileName: 'Ownership Deed - Luxury Apartment.pdf',
      project: 'Luxury Apartment Downtown',
      type: 'Ownership Proof',
      uploadDate: '2025-11-01',
      size: '2.3 MB',
      version: '1.0',
      status: 'pending', 
    },
    {
      id: 2,
      fileName: 'Ownership Deed - Luxury Apartment.pdf',
      project: 'Luxury Apartment Downtown',
      type: 'Floorplan',
      uploadDate: '2025-11-01',
      size: '2.3 MB',
      version: '1.0',
      status: 'rejected',
      rejectionReason: 'Image quality too low, please upload higher resolution'
    },
  ];

  return (
    <div className="min-h-screen  pt-4 font-sans">
      <div className=" w-full">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} data={doc} />
        ))}
      </div>
    </div>
  );
};

export default DocumentList1;