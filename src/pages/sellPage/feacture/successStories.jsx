import React from 'react';

// --- SVG Icons ---

const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gray-500">
    <path d="M2 11h20v2H2v-2zm0 0V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4H2z" />
    <path d="M4 11v6h2v-4h12v4h2v-6H4z" />
  </svg>
);

const BathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gray-500">
    <path d="M20 13V4h-2v9H6V4H4v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />
    <path d="M2 15h20v2H2z" />
  </svg>
);

const SqFtIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>
);

const GraphUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-white mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75l5.5-1.25l-1.25 5.5" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#2c8cb5]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SuccessStories = () => {
  const properties = [
    {
      id: 1,
      title: "Gorgeous Home for Sale",
      location: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      soldInDays: 12,
      aboveAsking: "$55K",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Gorgeous Home for Sale",
      location: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      soldInDays: 12,
      aboveAsking: "$55K",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Gorgeous Home for Sale",
      location: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      soldInDays: 12,
      aboveAsking: "$55K",
      image: "/assets/image/house.png"
    }
  ];

  return (
    <section className="py-12 relative mb-20 px-4 bg-white font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h4 className="text-[#5a9bd5] font-medium text-xs uppercase tracking-wide mb-1">
            Success Stories
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b49]">
            Recently sold in your area
          </h2>
        </div>

        {/* Grid - using max-w-sm to constrain width on large screens if needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-[380px] mx-auto w-full"
            >
              
              {/* Image Container - Reduced Height to h-48 (12rem) */}
              <div className="relative h-48 w-full">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Sold Badge */}
                <div className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Sold
                </div>

                {/* Above Asking Banner */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[92%] bg-[#2c8cb5]/90 backdrop-blur-sm text-white text-[11px] font-medium py-1.5 rounded-md flex items-center justify-center shadow-sm">
                  <GraphUpIcon />
                  Sold +{property.aboveAsking} above asking
                </div>
              </div>

              {/* Content Body - Reduced Padding to p-4 */}
              <div className="p-4">
                {/* Title & Location */}
                <div className="mb-4">
                  {/* Reduced Title Font Size */}
                  <h3 className="text-base font-bold text-slate-800 mb-0.5">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-[11px]">
                    {property.location}
                  </p>
                </div>

                {/* Stats Row - Tighter Spacing */}
                <div className="flex gap-2 mb-4">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-xl border border-gray-100">
                    <BedIcon />
                    <span className="text-[11px] font-semibold text-gray-600">x{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-xl border border-gray-100">
                    <BathIcon />
                    <span className="text-[11px] font-semibold text-gray-600">x{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-xl border border-gray-100">
                    <SqFtIcon />
                    <span className="text-[11px] font-semibold text-gray-600">{property.sqft} sq</span>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 mb-4" />

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <button className="bg-[#2c8cb5] hover:bg-[#237699] text-white text-[11px] font-semibold py-2 px-3 rounded transition-colors">
                    Sold in {property.soldInDays} days
                  </button>
                  
                  {/* Smaller Clock Circle */}
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                    <ClockIcon />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;