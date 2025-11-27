import { CheckCircle, Download, Eye, FileText, Trash2 } from "lucide-react";

const InfoColumn = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm font-medium text-gray-500 mb-1">{label}</span>
    <span className="text-sm font-medium text-cyan-600">{value}</span>
  </div>
);
const ActionButton = ({ icon: Icon, label, colorClass = "text-cyan-600" }) => (
  <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
    <Icon size={16} className={`mr-2 ${colorClass}`} />
    <span className={`text-sm font-medium ${colorClass}`}>{label}</span>
  </button>
);
const DocumentCard = () => {
    return (
       <div className="w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mt-6">
      {/* Card Header: Icon, Title, Status */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div className="flex items-start gap-4">
          {/* Document Icon Box */}
          <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg shrink-0">
            <FileText className="text-cyan-600" size={24} />
          </div>
          
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Ownership Deed - Luxury Apartment.pdf
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Luxury Apartment Downtown
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <CheckCircle className="text-green-500" size={20} />
          <span className="bg-[#1e7e9e] text-white text-xs px-3 py-1 rounded-md font-medium">
            Verified
          </span>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <InfoColumn label="Type" value="Ownership Proof" />
        <InfoColumn label="Upload Date" value="2025-11-01" />
        <InfoColumn label="Size" value="2.3 MB" />
        <InfoColumn label="Version" value="1.0" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-transparent md:border-none">
        <ActionButton icon={Eye} label="View" />
        <ActionButton icon={Download} label="Download" />
        <ActionButton icon={Trash2} label="Delete" colorClass="text-cyan-600" />
      </div>
    </div>
    );
}

export default DocumentCard;
