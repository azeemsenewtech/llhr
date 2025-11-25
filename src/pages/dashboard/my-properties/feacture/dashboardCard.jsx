import React from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Maximize, 
  BedDouble, 
  Bath, 
  Calendar, 
  Heart 
} from 'lucide-react';

const PropertyDashboard = () => {
  // Mock Data matching the image
  const properties = [
    {
      id: 1,
      title: "Meadowbrook Villas",
      address: "Av. Josefa Torres # 574, PE LIMA 39",
      price: "10,500",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sqft: 1500,
      beds: 4,
      baths: 2,
      status: "Active",
      leaseDate: null,
    },
    {
      id: 2,
      title: "Meadowbrook Villas",
      address: "Av. Josefa Torres # 574, PE LIMA 39",
      price: "100,500",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sqft: 1500,
      beds: 4,
      baths: 2,
      status: "Application Pending",
      leaseDate: "1/1/2025 - 12/31/2025",
    },
    {
      id: 3,
      title: "Meadowbrook Villas",
      address: "Av. Josefa Torres # 574, PE LIMA 39",
      price: "166,000",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sqft: 1500,
      beds: 4,
      baths: 2,
      status: null, // No badge
      leaseDate: "1/1/2025 - 12/31/2025",
    },
    {
      id: 4,
      title: "Meadowbrook Villas",
      address: "Av. Josefa Torres # 574, PE LIMA 39",
      price: "10,500",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sqft: 1500,
      beds: 4,
      baths: 2,
      status: "Active",
      leaseDate: null,
    },
    {
      id: 5,
      title: "Meadowbrook Villas",
      address: "Av. Josefa Torres # 574, PE LIMA 39",
      price: "100,500",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sqft: 1500,
      beds: 4,
      baths: 2,
      status: "Application Pending",
      leaseDate: "1/1/2025 - 12/31/2025",
    },
    {
      id: 6,
      title: "Meadowbrook Villas",
      address: "Av. Josefa Torres # 574, PE LIMA 39",
      price: "166,000",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sqft: 1500,
      beds: 4,
      baths: 2,
      status: null,
      leaseDate: "1/1/2025 - 12/31/2025",
    },
  ];

  return (
    <div className="min-h-screen rounded-xl bg-white p-4 md:p-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-[#2d8cbb]">All Properties</h1>
        
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative flex-grow md:flex-grow-0">
            <input 
              type="text" 
              placeholder="Search documents.." 
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm w-full md:w-64 focus:outline-none focus:border-blue-400"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>

          {/* Filter Button */}
          <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4 text-gray-500" />
          </button>

          {/* Add Button */}
          <button className="bg-[#2d8cbb] hover:bg-[#257aa3] text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
            List New Property
          </button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard className="bg-[#F9FCFF]" key={property.id} data={property} />
        ))}
      </div>
    </div>
  );
};

const PropertyCard = ({ data }) => {
  return (
    <div className="border border-gray-200 rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      {/* Image Container */}
      <div className="relative h-56 w-full mb-4">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover rounded-2xl"
        />
        
        {/* Status Badge */}
        {data.status && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wide
            ${data.status === 'Active' ? 'bg-green-500' : 'bg-[#efaa2c]'}`}>
            {data.status}
          </span>
        )}

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-400" />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-4">
          <span className="text-white font-bold text-xl drop-shadow-md">
            $ {data.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-1">
        <h3 className="text-[#333] font-bold text-lg mb-2">{data.title}</h3>
        
        {/* Address */}
        <div className="flex items-start gap-2 text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
          <span className="text-xs md:text-sm">{data.address}</span>
        </div>

        {/* Features Row */}
        <div className="flex items-center gap-6 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">{data.sqft} Sq</span>
          </div>
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">{data.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-medium">{data.baths} Baths</span>
          </div>
        </div>

        {/* Lease Date (Conditional) */}
        {data.leaseDate && (
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Calendar className="w-4 h-4 text-[#2d8cbb]" />
            <span className="text-[11px] font-medium">Lease: {data.leaseDate}</span>
          </div>
        )}

        {/* Footer Action */}
        <div className="flex justify-end mt-2">
          <button className="bg-[#2d8cbb] hover:bg-[#257aa3] text-white text-xs font-semibold px-6 py-2 rounded-md transition-colors">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDashboard;