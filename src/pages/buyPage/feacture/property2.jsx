// import React, { useState } from 'react';
// import { 
//   RotateCcw, 
//   Heart, 
//   Bed, 
//   Bath, 
//   Maximize, 
//   Check 
// } from 'lucide-react';

// const PropertyListingPage = () => {
//   // Mock Data
//   const properties = Array(9).fill({
//     id: 1,
//     title: "Gorgeous Home for Sale",
//     address: "Los Angeles City, CA, USA",
//     beds: 23,
//     baths: 34,
//     sqft: 1200,
//     price: "$820,000",
//     image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//   });

//   return (
//     <div className="min-h-screen w-full p-4 md:p-4 font-sans text-gray-800">
//       <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
        
//         {/* --- LEFT SIDEBAR (FILTERS) --- */}
//         <div className="w-full lg:w-1/4 min-w-[280px]">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-lg font-bold text-[#2B8CAD]">Filters</h2>
//               <button className="flex items-center gap-1 text-xs text-[#2B8CAD] hover:text-[#237896]">
//                 <RotateCcw size={12} />
//                 Reset
//               </button>
//             </div>

//             {/* Price Range */}
//             <div className="mb-8">
//               <label className="text-sm font-bold text-[#2B8CAD] mb-4 block">Price Range</label>
//               {/* Custom Range Visual */}
//               <div className="relative h-2 bg-gray-200 rounded-full mb-3 mt-2">
//                 <div className="absolute left-0 right-0 h-full bg-[#2B8CAD] rounded-full"></div>
//                 <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2B8CAD] rounded-full cursor-pointer"></div>
//                 <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2B8CAD] rounded-full cursor-pointer"></div>
//               </div>
//               <div className="flex justify-between text-xs font-bold text-gray-600">
//                 <span>$0</span>
//                 <span>$2,000,000</span>
//               </div>
//             </div>

//             {/* Bedrooms */}
//             <div className="mb-6">
//               <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Bedrooms</label>
//               <div className="grid grid-cols-3 gap-2 mb-2">
//                 <button className="py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">1+</button>
//                 <button className="py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">2+</button>
//                 <button className="py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">3+</button>
//               </div>
//               <button className="w-full py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">5+</button>
//             </div>

//             {/* Bathrooms */}
//             <div className="mb-6">
//               <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Bathrooms</label>
//               <div className="grid grid-cols-3 gap-2">
//                 <button className="py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">1+</button>
//                 <button className="py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">2+</button>
//                 <button className="py-2 border border-gray-200 rounded-lg text-sm hover:border-[#2B8CAD] hover:text-[#2B8CAD]">3+</button>
//               </div>
//             </div>

//             {/* Property Type */}
//             <div className="mb-6">
//               <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Property Type</label>
//               <div className="space-y-3">
//                 {['Single Family', 'Townhouse', 'Condo', 'Multi-Family'].map((type) => (
//                   <label key={type} className="flex items-center gap-3 cursor-pointer group">
//                     <div className="w-5 h-5 border border-gray-200 rounded flex items-center justify-center group-hover:border-[#2B8CAD]">
//                       {/* Simulated Checkbox */}
//                     </div>
//                     <span className="text-sm text-gray-600">{type}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Home Features */}
//             <div className="mb-8">
//               <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Home Features</label>
//               <div className="space-y-3">
//                 {['Pool', 'Garage', 'Fireplace', 'Hardwood Floors', 'Central AC', 'Dishwasher'].map((feature) => (
//                   <label key={feature} className="flex items-center gap-3 cursor-pointer group">
//                     <div className="w-5 h-5 border border-gray-200 rounded flex items-center justify-center group-hover:border-[#2B8CAD]">
//                     </div>
//                     <span className="text-sm text-gray-600">{feature}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="space-y-3">
//               <button className="w-full bg-[#2B8CAD] text-white py-3 rounded-lg font-semibold hover:bg-[#237896] transition-colors shadow-sm">
//                 Apply Filters
//               </button>
//               <button className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
//                 Reset All
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* --- RIGHT CONTENT (GRID) --- */}
//         <div className="w-full lg:w-3/4">
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
//             {properties.map((property, index) => (
//               <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                
//                 {/* Image Section */}
//                 <div className="relative h-56">
//                   <img 
//                     src={property.image} 
//                     alt={property.title} 
//                     className="w-full h-full object-cover"
//                   />
//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 flex gap-2">
//                     <span className="bg-white/95 px-3 py-1 text-[10px] font-bold text-gray-800 rounded shadow-sm uppercase tracking-wide">Featured</span>
//                     <span className="bg-white/95 px-3 py-1 text-[10px] font-bold text-gray-800 rounded shadow-sm uppercase tracking-wide">For Sale</span>
//                   </div>
                  
//                   {/* Image Dots */}
//                   <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
//                     <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//                     <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
//                     <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5">
//                   <h3 className="text-base font-bold text-gray-800 mb-1">{property.title}</h3>
//                   <p className="text-xs text-gray-500 mb-4">{property.address}</p>

//                   {/* Stats Row */}
//                   <div className="flex items-center gap-3 mb-5">
//                     <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded border border-gray-100 min-w-[60px] justify-center">
//                       <Bed size={14} className="text-gray-400" />
//                       <span className="text-xs font-medium text-gray-600">x{property.beds}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded border border-gray-100 min-w-[60px] justify-center">
//                       <Bath size={14} className="text-gray-400" />
//                       <span className="text-xs font-medium text-gray-600">x{property.baths}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded border border-gray-100 min-w-[80px] justify-center">
//                       <Maximize size={14} className="text-gray-400" />
//                       <span className="text-xs font-medium text-gray-600">{property.sqft} sq</span>
//                     </div>
//                   </div>

//                   {/* Footer */}
//                   <div className="flex justify-between items-center pt-2 border-t border-gray-50">
//                     <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
//                       {property.price}
//                     </button>
//                     <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-gray-400">
//                       <Heart size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}

//           </div>
          
//           {/* Pagination (Optional - to match scrolling/extra content feel) */}
//           <div className="mt-8 flex justify-center">
//              <button className="text-[#2B8CAD] text-sm font-semibold hover:underline">Load More Listings</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PropertyListingPage;
import React, { useState, useMemo } from 'react';
import { 
  RotateCcw, 
  Heart, 
  Bed, 
  Bath, 
  Maximize, 
  Check 
} from 'lucide-react';

// --- Enhanced Mock Data for Demonstration ---
const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Modern Family Home",
    address: "Beverly Hills, CA, USA",
    beds: 5,
    baths: 4,
    sqft: 3200,
    price: "$2,400,000",
    priceValue: 2400000,
    type: "Single Family",
    features: ["Pool", "Garage", "Fireplace"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Downtown Condo",
    address: "Los Angeles City, CA, USA",
    beds: 2,
    baths: 2,
    sqft: 1200,
    price: "$820,000",
    priceValue: 820000,
    type: "Condo",
    features: ["Central AC", "Dishwasher"],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Cozy Townhouse",
    address: "West Hollywood, CA, USA",
    beds: 3,
    baths: 3,
    sqft: 1800,
    price: "$1,100,000",
    priceValue: 1100000,
    type: "Townhouse",
    features: ["Hardwood Floors", "Garage"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Luxury Villa",
    address: "Malibu, CA, USA",
    beds: 6,
    baths: 5,
    sqft: 4500,
    price: "$5,200,000",
    priceValue: 5200000,
    type: "Single Family",
    features: ["Pool", "Fireplace", "Central AC", "Hardwood Floors"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Urban Loft",
    address: "Arts District, LA",
    beds: 1,
    baths: 1,
    sqft: 950,
    price: "$650,000",
    priceValue: 650000,
    type: "Condo",
    features: ["Hardwood Floors"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Suburban Multi-Family",
    address: "Pasadena, CA, USA",
    beds: 8,
    baths: 6,
    sqft: 5000,
    price: "$3,100,000",
    priceValue: 3100000,
    type: "Multi-Family",
    features: ["Garage", "Dishwasher"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const PropertyListingPage = () => {
  // --- State for Filters ---
  const [filters, setFilters] = useState({
    priceRange: [0, 6000000],
    bedrooms: null, // null means any, 1, 2, 3, 5
    bathrooms: null,
    propertyTypes: [], // array of strings
    features: [] // array of strings
  });

  // --- Handlers ---

  // Handle Bed/Bath selection
  const handleSingleSelect = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? null : value // toggle off if clicked again
    }));
  };

  // Handle Checkbox selection (Types/Features)
  const handleMultiSelect = (key, value) => {
    setFilters(prev => {
      const currentList = prev[key];
      if (currentList.includes(value)) {
        return { ...prev, [key]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [key]: [...currentList, value] };
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      priceRange: [0, 6000000],
      bedrooms: null,
      bathrooms: null,
      propertyTypes: [],
      features: []
    });
  };

  // --- Filtering Logic ---
  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(property => {
      // Filter by Beds (logic: exact match or greater usually, here using exact for simplicity of specific buttons, or >= logic)
      if (filters.bedrooms && property.beds < filters.bedrooms) return false;

      // Filter by Baths
      if (filters.bathrooms && property.baths < filters.bathrooms) return false;

      // Filter by Property Type
      if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(property.type)) return false;

      // Filter by Features (must have ALL selected features)
      if (filters.features.length > 0) {
        const hasAllFeatures = filters.features.every(f => property.features.includes(f));
        if (!hasAllFeatures) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen w-full p-4 md:p-4 font-sans text-gray-800 ">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* --- LEFT SIDEBAR (FILTERS) --- */}
        <div className="w-full lg:w-1/4 min-w-[280px]">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-4">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-[#2B8CAD]">Filters</h2>
              <button 
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-[#2B8CAD] hover:text-[#237896] transition-colors"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            </div>

            {/* Price Range (Visual only for this demo, logic implied) */}
            <div className="mb-8">
              <label className="text-sm font-bold text-[#2B8CAD] mb-4 block">Price Range</label>
              <div className="relative h-2 bg-gray-200 rounded-full mb-3 mt-2">
                <div className="absolute left-0 right-1/4 h-full bg-[#2B8CAD] rounded-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2B8CAD] rounded-full cursor-pointer shadow-sm"></div>
                <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2B8CAD] rounded-full cursor-pointer shadow-sm"></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-gray-600">
                <span>$0</span>
                <span>$6M+</span>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="mb-6">
              <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Bedrooms</label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {[1, 2, 3].map(num => (
                  <button 
                    key={num}
                    onClick={() => handleSingleSelect('bedrooms', num)}
                    className={`py-2 border rounded-lg text-sm transition-all ${
                      filters.bedrooms === num 
                        ? 'bg-[#2B8CAD] text-white border-[#2B8CAD]' 
                        : 'border-gray-200 hover:border-[#2B8CAD] hover:text-[#2B8CAD]'
                    }`}
                  >
                    {num}+
                  </button>
                ))}
              </div>
              <button 
                onClick={() => handleSingleSelect('bedrooms', 5)}
                className={`w-full py-2 border rounded-lg text-sm transition-all ${
                  filters.bedrooms === 5 
                    ? 'bg-[#2B8CAD] text-white border-[#2B8CAD]' 
                    : 'border-gray-200 hover:border-[#2B8CAD] hover:text-[#2B8CAD]'
                }`}
              >
                5+
              </button>
            </div>

            {/* Bathrooms */}
            <div className="mb-6">
              <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Bathrooms</label>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map(num => (
                  <button 
                    key={num}
                    onClick={() => handleSingleSelect('bathrooms', num)}
                    className={`py-2 border rounded-lg text-sm transition-all ${
                      filters.bathrooms === num 
                        ? 'bg-[#2B8CAD] text-white border-[#2B8CAD]' 
                        : 'border-gray-200 hover:border-[#2B8CAD] hover:text-[#2B8CAD]'
                    }`}
                  >
                    {num}+
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div className="mb-6">
              <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Property Type</label>
              <div className="space-y-3">
                {['Single Family', 'Townhouse', 'Condo', 'Multi-Family'].map((type) => {
                  const isSelected = filters.propertyTypes.includes(type);
                  return (
                    <label 
                      key={type} 
                      className="flex items-center gap-3 cursor-pointer group select-none"
                      onClick={() => handleMultiSelect('propertyTypes', type)}
                    >
                      <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#2B8CAD] border-[#2B8CAD]' : 'border-gray-200 group-hover:border-[#2B8CAD]'
                      }`}>
                        {isSelected && <Check size={14} className="text-white" />}
                      </div>
                      <span className={`text-sm ${isSelected ? 'text-[#2B8CAD] font-medium' : 'text-gray-600'}`}>{type}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Home Features */}
            <div className="mb-8">
              <label className="text-sm font-bold text-[#2B8CAD] mb-3 block">Home Features</label>
              <div className="space-y-3">
                {['Pool', 'Garage', 'Fireplace', 'Hardwood Floors', 'Central AC', 'Dishwasher'].map((feature) => {
                   const isSelected = filters.features.includes(feature);
                   return (
                    <label 
                      key={feature} 
                      className="flex items-center gap-3 cursor-pointer group select-none"
                      onClick={() => handleMultiSelect('features', feature)}
                    >
                      <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#2B8CAD] border-[#2B8CAD]' : 'border-gray-200 group-hover:border-[#2B8CAD]'
                      }`}>
                        {isSelected && <Check size={14} className="text-white" />}
                      </div>
                      <span className={`text-sm ${isSelected ? 'text-[#2B8CAD] font-medium' : 'text-gray-600'}`}>{feature}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full bg-[#2B8CAD] text-white py-3 rounded-lg font-semibold hover:bg-[#237896] transition-colors shadow-sm">
                Apply Filters
              </button>
              <button 
                onClick={resetFilters}
                className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset All
              </button>
            </div>

          </div>
        </div>

        {/* --- RIGHT CONTENT (GRID) --- */}
        <div className="w-full lg:w-3/4">
          
          {/* Results Count Header */}
         

          {filteredProperties.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="p-4 bg-gray-50 rounded-full mb-3">
                 <RotateCcw className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">No properties found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your filters.</p>
              <button onClick={resetFilters} className="mt-4 text-[#2B8CAD] font-medium hover:underline">Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  
                  {/* Image Section */}
                  <div className="relative h-46 group">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/95 px-3 py-1 text-[10px] font-bold text-gray-800 rounded shadow-sm uppercase tracking-wide">Featured</span>
                      <span className="bg-white/95 px-3 py-1 text-[10px] font-bold text-gray-800 rounded shadow-sm uppercase tracking-wide">For Sale</span>
                    </div>
                    
                    {/* Image Dots */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 bg-[#f9fcff]">
                    <h3 className="text-base font-bold text-gray-800 mb-1">{property.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{property.address}</p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded border border-gray-100 min-w-[60px] justify-center">
                        <Bed size={14} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-600">x{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded border border-gray-100 min-w-[60px] justify-center">
                        <Bath size={14} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-600">x{property.baths}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded border border-gray-100 min-w-[80px] justify-center">
                        <Maximize size={14} className="text-gray-400" />
                        <span className="text-xs font-medium text-gray-600">{property.sqft} sq</span>
                      </div>
                    </div>

                    {/* Tags (for debugging/visual confirmation of filters) */}
                   

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                      <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
                        {property.price}
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-gray-400">
                        <Heart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {filteredProperties.length > 0 && (
            <div className="mt-8 flex justify-center">
               <button className="text-[#2B8CAD] text-sm font-semibold hover:underline">Load More Listings</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PropertyListingPage;