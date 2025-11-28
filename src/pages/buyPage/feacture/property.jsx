// // import React from 'react';
// // import { 
// //   Search, 
// //   LayoutGrid, 
// //   List, 
// //   Maximize2, 
// //   Plus, 
// //   Minus, 
// //   Bed, 
// //   Bath, 
// //   Maximize, 
// //   Heart,
// //   MapPin
// // } from 'lucide-react';
// // import Property1 from './property1';
// // import PropertyListingPage from './property2';

// // const PropertyListing = () => {
// //   // Mock data to replicate the cards
 

// //   return (
// //     <div className="min-h-screen bg-white p-6 md:p-10 font-sans">
// //       <div className="max-w-7xl mx-auto">
        
// //         {/* --- Header Section --- */}
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
// //           <div>
// //             <h4 className="text-[#2B8CAD] font-medium text-sm md:text-base mb-1">
// //               Property Listing
// //             </h4>
// //             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
// //               Find top listings and trusted agents.
// //             </h1>
// //           </div>
          
// //           {/* View Toggles */}
// //           <div className="flex items-center gap-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-lg">
// //             <button className="p-2 bg-[#2B8CAD] text-white rounded shadow-sm">
// //               <LayoutGrid size={20} />
// //             </button>
// //             <button className="p-2 text-gray-500 hover:text-gray-700">
// //               <List size={20} />
// //             </button>
// //           </div>
// //         </div>

// //         {/* --- Filter Bar --- */}
// //         <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col lg:flex-row gap-4">
// //           <div className="relative flex-grow">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
// //             <input 
// //               type="text" 
// //               placeholder="Search by location, city, or neighborhood..." 
// //               className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B8CAD]/20 text-sm"
// //             />
// //           </div>
          
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
// //             <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
// //               <option>All Types</option>
// //               <option>Apartment</option>
// //               <option>House</option>
// //             </select>
            
// //             <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
// //               <option>Any Price</option>
// //               <option>$100k - $200k</option>
// //             </select>
            
// //             <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white">
// //               <option>Any</option>
// //               <option>2+ Beds</option>
// //             </select>

// //             <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white font-medium py-2.5 px-6 rounded-lg transition-colors w-full">
// //               Search
// //             </button>
// //           </div>
// //         </div>

// //         {/* --- Main Content Grid --- */}
// //         <Property1/>
// //         <PropertyListingPage/>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyListing;
// import React, { useState } from 'react';
// import { 
//   Search, 
//   LayoutGrid, 
//   List, 
// } from 'lucide-react';
// import Property1 from './property1';
// import PropertyListingPage from './property2';

// const PropertyListing = () => {
//   const [view, setView] = useState("grid");

//   return (
//     <div className="min-h-screen relative bg-white p-6 md:p-10 font-sans">
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
            
//             {/* Grid View Button */}
//             <button 
//               className={`p-2 rounded shadow-sm ${
//                 view === "grid" ? "bg-[#2B8CAD] text-white" : "text-gray-500"
//               }`}
//               onClick={() => setView("grid")}
//             >
//               <LayoutGrid size={20} />
//             </button>

//             {/* List View Button */}
//             <button 
//               className={`p-2 rounded ${
//                 view === "list" ? "bg-[#2B8CAD] text-white" : "text-gray-500"
//               }`}
//               onClick={() => setView("list")}
//             >
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

//         {/* --- Conditional Rendering --- */}
//         {view === "grid" ? <Property1 /> : <PropertyListingPage />}

//       </div>
//     </div>
//   );
// };

// export default PropertyListing;
import React, { useState, useEffect } from 'react';
import { Search, LayoutGrid, List, ChevronDown } from 'lucide-react';
import Property1 from './property1';
import PropertyListingPage from './property2';

// 1. MASTER DATA (With specific types and prices for testing)
const INITIAL_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa",
    address: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: 3200,
    price: "$1,820,000",
    type: "House",
    lat: 34.0736,
    lng: -118.4004
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cozy Downtown Apt",
    address: "West Hollywood, CA",
    beds: 2,
    baths: 1,
    sqft: 900,
    price: "$450,000",
    type: "Apartment",
    lat: 34.0900,
    lng: -118.3617
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-2a5133757918?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Estate",
    address: "Bel Air, CA",
    beds: 6,
    baths: 5,
    sqft: 4500,
    price: "$3,200,000",
    type: "House",
    lat: 34.1000,
    lng: -118.4400
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "City Loft",
    address: "Downtown LA, CA",
    beds: 1,
    baths: 1,
    sqft: 800,
    price: "$250,000",
    type: "Apartment",
    lat: 34.0407,
    lng: -118.2468
  },
   {
    id: 5,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa",
    address: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: 3200,
    price: "$1,820,000",
    type: "House",
    lat: 34.0736,
    lng: -118.4004
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cozy Downtown Apt",
    address: "West Hollywood, CA",
    beds: 2,
    baths: 1,
    sqft: 900,
    price: "$450,000",
    type: "Apartment",
    lat: 34.0900,
    lng: -118.3617
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600596542815-2a5133757918?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Estate",
    address: "Bel Air, CA",
    beds: 6,
    baths: 5,
    sqft: 4500,
    price: "$3,200,000",
    type: "House",
    lat: 34.1000,
    lng: -118.4400
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "City Loft",
    address: "Downtown LA, CA",
    beds: 1,
    baths: 1,
    sqft: 800,
    price: "$250,000",
    type: "Apartment",
    lat: 34.0407,
    lng: -118.2468
  }
];

const PropertyListing = () => {
  const [view, setView] = useState("grid");
  
  // 2. STATE FOR FILTERS
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Types");
  const [filterPrice, setFilterPrice] = useState("Any Price");
  const [filterBeds, setFilterBeds] = useState("Any");
  
  // 3. STATE FOR FILTERED RESULTS
  const [filteredProperties, setFilteredProperties] = useState(INITIAL_PROPERTIES);

  // 4. FILTERING LOGIC
  const handleFilter = () => {
    let result = INITIAL_PROPERTIES;

    // A. Search Text
    if (searchTerm) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // B. Type
    if (filterType !== "All Types") {
      result = result.filter(item => item.type === filterType);
    }

    // C. Beds
    if (filterBeds !== "Any") {
      const minBeds = parseInt(filterBeds); 
      result = result.filter(item => item.beds >= minBeds);
    }

    // D. Price
    if (filterPrice !== "Any Price") {
      result = result.filter(item => {
        // Convert "$1,820,000" to number 1820000
        const priceValue = parseInt(item.price.replace(/[$,]/g, ""));
        
        if (filterPrice === "$100k - $500k") return priceValue >= 100000 && priceValue <= 500000;
        if (filterPrice === "$500k - $1M") return priceValue > 500000 && priceValue <= 1000000;
        if (filterPrice === "$1M+") return priceValue > 1000000;
        return true;
      });
    }

    setFilteredProperties(result);
  };

  // Run filter automatically when inputs change
  useEffect(() => {
    handleFilter();
  }, [searchTerm, filterType, filterPrice, filterBeds]);

  return (
    <div className="min-h-screen relative bg-white p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h4 className="text-[#2B8CAD] font-poppin font-medium text-sm md:text-base mb-1">Property Listing</h4>
            <h1 className="text-3xl md:text-4xl font-poppin font-bold text-gray-900">Find top listings and trusted agents.</h1>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-lg">
            <button 
              className={`p-2 rounded shadow-sm ${view === "grid" ? "bg-[#2B8CAD] text-white" : "text-gray-500"}`}
              onClick={() => setView("grid")}
            >
            <svg width="16" height="16" viewBox="0 0 16 16"  fill={view === "grid" ? "#2B8CAD" : "#989da7"} // <-- conditional fill
  stroke={view === "grid" ? "white" : "#2B8CAD"}  xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 6H14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10H14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 2V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2V14" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
            <button 
              className={`p-2 rounded ${view === "list" ? "bg-[#2B8CAD] text-white" : "text-gray-500"}`}
              onClick={() => setView("list")}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl  mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-primary/5 font-poppin pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B8CAD]/20 text-sm"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            
            {/* Type Filter */}
            <div className="relative">
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="w-full bg-primary/5 font-poppin appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-600 focus:outline-none bg-white focus:ring-2 focus:ring-[#2B8CAD]/20 cursor-pointer">
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            
            {/* Price Filter */}
            <div className="relative">
              <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="w-full font-poppin bg-primary/5 appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-600 focus:outline-none bg-white focus:ring-2 focus:ring-[#2B8CAD]/20 cursor-pointer">
                <option>Any Price</option>
                <option>$100k - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            
            {/* Beds Filter */}
            <div className="relative">
              <select value={filterBeds} onChange={(e) => setFilterBeds(e.target.value)} className="w-full font-poppin bg-primary/5 appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm text-gray-600 focus:outline-none bg-white focus:ring-2 focus:ring-[#2B8CAD]/20 cursor-pointer">
                <option>Any</option>
                <option>2+ Beds</option>
                <option>4+ Beds</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>

            <button onClick={handleFilter} className="bg-[#2B8CAD] hover:bg-[#237896] font-poppin text-white font-medium py-2.5 px-6 rounded-lg transition-colors w-full">
              Search
            </button>
          </div>
        </div>

        {/* --- Pass Filtered Data to Child --- */}
        {view === "grid" ? (
          <Property1 properties={filteredProperties} /> 
        ) : (
          <PropertyListingPage properties={filteredProperties} />
        )}

      </div>
    </div>
  );
};

export default PropertyListing;