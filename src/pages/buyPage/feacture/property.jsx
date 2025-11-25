// import React from 'react';
// import { 
//   Search, 
//   LayoutGrid, 
//   List, 
//   Maximize2, 
//   Plus, 
//   Minus, 
//   Bed, 
//   Bath, 
//   Maximize, 
//   Heart,
//   MapPin
// } from 'lucide-react';
// import Property1 from './property1';
// import PropertyListingPage from './property2';

// const PropertyListing = () => {
//   // Mock data to replicate the cards
 

//   return (
//     <div className="min-h-screen bg-white p-6 md:p-10 font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- Header Section --- */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
//           <div>
//             <h4 className="text-[#2B8CAD] font-medium text-sm md:text-base mb-1">
//               Property Listing
//             </h4>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Find top listings and trusted agents.
//             </h1>
//           </div>
          
//           {/* View Toggles */}
//           <div className="flex items-center gap-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-lg">
//             <button className="p-2 bg-[#2B8CAD] text-white rounded shadow-sm">
//               <LayoutGrid size={20} />
//             </button>
//             <button className="p-2 text-gray-500 hover:text-gray-700">
//               <List size={20} />
//             </button>
//           </div>
//         </div>

//         {/* --- Filter Bar --- */}
//         <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col lg:flex-row gap-4">
//           <div className="relative flex-grow">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input 
//               type="text" 
//               placeholder="Search by location, city, or neighborhood..." 
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B8CAD]/20 text-sm"
//             />
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
//             <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
//               <option>All Types</option>
//               <option>Apartment</option>
//               <option>House</option>
//             </select>
            
//             <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
//               <option>Any Price</option>
//               <option>$100k - $200k</option>
//             </select>
            
//             <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
//               <option>Any</option>
//               <option>2+ Beds</option>
//             </select>

//             <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white font-medium py-2.5 px-6 rounded-lg transition-colors w-full">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* --- Main Content Grid --- */}
//         <Property1/>
//         <PropertyListingPage/>
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;
import React, { useState } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
} from 'lucide-react';
import Property1 from './property1';
import PropertyListingPage from './property2';

const PropertyListing = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen bg-white p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h4 className="text-[#2B8CAD] font-medium text-sm md:text-base mb-1">
              Property Listing
            </h4>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Find top listings and trusted agents.
            </h1>
          </div>
          
          {/* View Toggles */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-lg">
            
            {/* Grid View Button */}
            <button 
              className={`p-2 rounded shadow-sm ${
                view === "grid" ? "bg-[#2B8CAD] text-white" : "text-gray-500"
              }`}
              onClick={() => setView("grid")}
            >
              <LayoutGrid size={20} />
            </button>

            {/* List View Button */}
            <button 
              className={`p-2 rounded ${
                view === "list" ? "bg-[#2B8CAD] text-white" : "text-gray-500"
              }`}
              onClick={() => setView("list")}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* --- Filter Bar --- */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by location, city, or neighborhood..." 
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B8CAD]/20 text-sm"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
              <option>All Types</option>
              <option>Apartment</option>
              <option>House</option>
            </select>
            
            <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
              <option>Any Price</option>
              <option>$100k - $200k</option>
            </select>
            
            <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
              <option>Any</option>
              <option>2+ Beds</option>
            </select>

            <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white font-medium py-2.5 px-6 rounded-lg transition-colors w-full">
              Search
            </button>
       
          </div>
        </div>

        {/* --- Conditional Rendering --- */}
        {view === "grid" ? <Property1 /> : <PropertyListingPage />}

      </div>
    </div>
  );
};

export default PropertyListing;
