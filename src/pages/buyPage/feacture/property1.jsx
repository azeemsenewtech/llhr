import { Bath, Bed, Heart, MapPin, Maximize, Maximize2, Minus, Plus } from 'lucide-react';
import React from 'react';

const Property1 = () => {
     const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Gorgeous Home for Sale",
      address: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      price: "$820,000"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Gorgeous Home for Sale",
      address: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      price: "$820,000"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Gorgeous Home for Sale",
      address: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      price: "$820,000"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Gorgeous Home for Sale",
      address: "Los Angeles City, CA, USA",
      beds: 23,
      baths: 34,
      sqft: 1200,
      price: "$820,000"
    }
  ];
    return (
        <div>
            <div className="flex gap-10">
                      
                      {/* Left Column: Map View */}
                      <div className="lg:col-span-5 xl:col-span-4 h-[400px] w-[50%]  lg:h-full relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
                        
                        {/* Map Placeholder Image */}
                        <img 
                          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                          alt="Map View" 
                          className="w-full h-full object-cover opacity-80"
                        />
                        
                        {/* Map Header Overlay */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                          <span className="bg-white px-3 py-1.5 rounded-lg text-sm font-bold text-gray-800 shadow-sm">
                            Map View
                          </span>
                          <button className="bg-white p-1.5 rounded-lg shadow-sm hover:bg-gray-50">
                            <Maximize2 size={16} className="text-gray-600" />
                          </button>
                        </div>
            
                        {/* Simulated Map Pins */}
                        <div className="absolute top-1/3 left-1/4">
                          <div className="bg-[#2B8CAD] p-2 rounded-full shadow-lg ring-4 ring-white/50 animate-bounce">
                            <MapPin size={20} className="text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/3">
                          <div className="bg-[#2B8CAD] p-1.5 rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
            
                        {/* Map Controls */}
                        <div className="absolute top-16 right-4 flex flex-col gap-2">
                          <button className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50 text-gray-600">
                            <Plus size={18} />
                          </button>
                          <button className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-50 text-gray-600">
                            <Minus size={18} />
                          </button>
                        </div>
                      </div>
            
                      {/* Right Column: Property Grid */}
                      <div className="lg:col-span-7 xl:col-span-8   pr-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          {properties.map((property) => (
                            <div key={property.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                              
                              {/* Image Section */}
                              <div className="relative h-48 md:h-56">
                                <img 
                                  src={property.image} 
                                  alt={property.title} 
                                  className="w-full h-full object-cover"
                                />
                                
                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2">
                                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 rounded">
                                    Featured
                                  </span>
                                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 rounded">
                                    For Sale
                                  </span>
                                </div>
            
                                {/* Image Dots (Simulated) */}
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                                </div>
                              </div>
            
                              {/* Content Section */}
                              <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">
                                  {property.title}
                                </h3>
                                <p className="text-xs text-gray-500 mb-4">
                                  {property.address}
                                </p>
            
                                {/* Stats */}
                                <div className="flex items-center gap-3 mb-5">
                                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <Bed size={14} className="text-gray-400" />
                                    <span className="text-xs font-medium text-gray-600">x{property.beds}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <Bath size={14} className="text-gray-400" />
                                    <span className="text-xs font-medium text-gray-600">x{property.baths}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                    <Maximize size={14} className="text-gray-400" />
                                    <span className="text-xs font-medium text-gray-600">{property.sqft} sq</span>
                                  </div>
                                </div>
            
                                {/* Footer */}
                                <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                                  <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                                    {property.price}
                                  </button>
                                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-400 hover:text-red-500 transition-colors">
                                    <Heart size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                        </div>
                      </div>
            
                    </div>
        </div>
    );
}

export default Property1;
