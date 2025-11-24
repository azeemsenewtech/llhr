import React from 'react';
import { FileText, Star, Eye, Download } from 'lucide-react';

const PaymentCard = () => {
  return (
    <div className=" p-6">
      <div className=" bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div className="flex gap-4">
            {/* Icon Box */}
            <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#1a8bb5]" strokeWidth={1.5} />
            </div>
            
            {/* Title & Subtitle */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Luxury Apartment Downtown
              </h3>
              <p className="text-gray-500 text-sm mt-0.5">Sarah Johnson</p>
            </div>
          </div>

          {/* Right Side: Score & Status */}
          <div className="flex items-center gap-6 self-end md:self-auto">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-gray-400 font-medium">Property Score</span>
              <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                <Star className="w-3 h-3 fill-current" />
                92/100
              </div>
            </div>
            
            <span className="bg-[#1a8bb5] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
              Paid
            </span>
          </div>
        </div>

        {/* --- Details Grid Section --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 mb-8">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-medium mb-1">Paid Date</span>
            <span className="text-[#1a8bb5] text-sm font-medium">2025-01-01</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-medium mb-1">Method</span>
            <span className="text-[#1a8bb5] text-sm font-medium">Bank Transfer</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-medium mb-1">Due Date</span>
            <span className="text-[#1a8bb5] text-sm font-medium">2025-11-01</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-medium mb-1">Transaction ID</span>
            <span className="text-[#1a8bb5] text-sm font-medium">TXN-2025-001</span>
          </div>
        </div>

        {/* --- Footer Section: Amount & Actions --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="w-full md:w-auto">
             <span className="text-[#1a8bb5] font-bold text-2xl tracking-tight">
               $2,500
             </span>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 text-[#1a8bb5] hover:bg-sky-50 px-5 py-2 rounded-lg border border-gray-200 text-sm font-semibold transition-all">
              <Eye className="w-4 h-4" />
              View
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 text-[#1a8bb5] hover:bg-sky-50 px-5 py-2 rounded-lg border border-gray-200 text-sm font-semibold transition-all">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentCard;