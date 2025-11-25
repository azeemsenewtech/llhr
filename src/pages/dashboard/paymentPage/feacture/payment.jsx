import React from 'react';

const PropertyCard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Card Container */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8">
        
        {/* Top Section: Header & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          
          {/* Left Side: Icon & Title */}
          <div className="flex items-start gap-4">
            {/* Icon Box */}
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </div>

            {/* Text Info */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                Cozy Loft in Arts District
              </h2>
              <p className="text-sm text-gray-500 mt-1">David Martinez</p>
            </div>
          </div>

          {/* Right Side: Score & Badge */}
          <div className="flex items-center gap-6 md:gap-12">
            {/* Property Score */}
            <div className="flex flex-col items-end md:items-start">
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                Property Score
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-green-500">92/100</span>
              </div>
            </div>

            {/* Status Badge */}
            <span className="px-4 py-1.5 bg-[#DC2646] text-white text-xs font-semibold rounded-lg shadow-sm">
              Delayed
            </span>
          </div>
        </div>

        {/* Middle Section: Due Date */}
        <div className="mb-8">
          <p className="text-xs text-gray-500 font-medium">Due Date</p>
          <p className="text-cyan-600 font-medium mt-1">2025-11-01</p>
        </div>

        {/* Bottom Section: Price & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
          {/* Price */}
          <div className="w-full sm:w-auto">
            <span className="text-2xl font-bold text-cyan-600">$2,500</span>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full sm:w-auto gap-3">
            <button className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-medium text-cyan-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              Send Reminder
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-medium text-cyan-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              Contract Tenant
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;