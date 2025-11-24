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

import PaymentCard from './paymentCard';

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
    <div className="min-h-screen rounded-xl bg-white p-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-[#2d8cbb]">All Properties</h1>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
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
<PaymentCard/>
    
      
    </div>
  );
};



export default PropertyDashboard;