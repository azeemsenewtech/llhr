
// import React, { useEffect, useState } from 'react';
// import { Bath, Bed, Heart, Maximize, MapPin, Maximize2, Plus, Minus } from 'lucide-react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix Leaflet icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// // ACCEPT PROPS HERE
// const Property1 = () => {
//   const [properties, setProperties] = useState([])
  
//  useEffect(() => {
//   fetch('https://eb.senew-tech.com/api/v1/products')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // Set properties here
//       setProperties(data.products);
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }, [2000]);

//   const mapCenter = [34.0700, -118.3500];

//   return (
//     <div className='relative mb-[150px] '>
//       <div className="flex lg:flex-row flex-col-reverse gap-10">
        
//         {/* Left Column: Map */}
//         <div className="lg:col-span-5 xl:col-span-4 md:w-[50%] h-[400px] lg:h-[600px]  w-full relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm z-0">
//           <MapContainer center={mapCenter} zoom={10} scrollWheelZoom={false} className="w-full h-full">
//             <TileLayer
//               attribution='&copy; OpenStreetMap contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {/* {properties.map((property) => (
//               <Marker key={property.id} position={[property.lat, property.lng]}>
//                  <Popup>
//                     <div className="md:w-[150px] w-full font-sans">
//                         <img src={property.image} className="w-full h-20 object-cover rounded mb-2"/>
//                         <p className="font-bold font-poppin text-sm">{property.price}</p>
//                         <p className="text-xs font-poppin text-gray-500">{property.title}</p>
//                     </div>
//                  </Popup>
//               </Marker>
//             ))} */}
//           </MapContainer>
//         </div>

//         {/* Right Column: Grid */}
//         <div className="lg:col-span-7 xl:col-span-8 pr-1">
          
//           {/* Empty State Check */}
//           {properties.length === 0 && (
//              <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl">
//                 <p className="text-gray-400 font-poppin">No properties found matching your filters.</p>
//              </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {properties.map((property) => (
//               <div key={property.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
//                 <div className="relative h-48 md:h-56">
//                   <img src={property.image} alt={property.title} className="w-full h-full object-cover"/>
//                   <div className="absolute top-3 left-3 flex gap-2">
//                     <span className="bg-white/90 backdrop-blur-sm px-2 py-1 font-poppin text-[10px] font-bold uppercase tracking-wider text-gray-800 rounded">
//                       {property.type}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-poppin font-bold text-gray-800 mb-1">{property.title}</h3>
//                   <p className="text-xs font-poppin text-gray-500 mb-4">{property.address}</p>
//                   <div className="flex items-center gap-3 mb-5">
//                     <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
//                       <Bed size={14} className="text-gray-400" />
//                       <span className="text-xs font-poppin font-medium text-gray-600">{property.beds}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
//                       <Bath size={14} className="text-gray-400" />
//                       <span className="text-xs font-poppin font-medium text-gray-600">{property.baths}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
//                       <Maximize size={14} className="text-gray-400" />
//                       <span className="text-xs font-poppin font-medium text-gray-600">{property.sqft} sq</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center pt-2 border-t border-gray-50">
//                     <button className="bg-[#2B8CAD]  hover:bg-[#237896] text-white text-sm font-poppin font-semibold px-4 py-2 rounded-lg transition-colors">
//                       {property.price}
//                     </button>
//                     <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-400 hover:text-red-500 transition-colors">
//                       <Heart size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Property1;
import React, { useEffect, useState } from 'react';
import { Bath, Bed, Heart, Maximize, MapPin, Maximize2, Plus, Minus } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Property1 = () => {
  const [properties, setProperties] = useState([]);

  // Fetch API data on component mount
  useEffect(() => {
    fetch('https://eb.senew-tech.com/api/v1/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProperties(data.data); // Use the correct array from your API
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const mapCenter = [34.0700, -118.3500]; // Default map center

  return (
    <div className='relative mb-[150px]'>
      <div className="flex lg:flex-row flex-col-reverse gap-10">

        {/* Left Column: Map */}
        <div className="lg:col-span-5 xl:col-span-4 md:w-[50%] h-[400px] lg:h-[600px] w-full relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm z-0">
          <MapContainer center={mapCenter} zoom={10} scrollWheelZoom={false} className="w-full h-full">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Optional: add markers if your API has lat/lng */}
            {properties.map((property) =>
              property.lat && property.lng ? (
                <Marker key={property._id} position={[property.lat, property.lng]}>
                  <Popup>
                    <div className="md:w-[150px] w-full font-sans">
                      <img src={property.image?.url} className="w-full h-20 object-cover rounded mb-2" />
                      <p className="font-bold font-poppin text-sm">{property.name}</p>
                      <p className="text-xs font-poppin text-gray-500">{property.brand}</p>
                    </div>
                  </Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>
        </div>

        {/* Right Column: Product Cards */}
        <div className="lg:col-span-7 xl:col-span-8 pr-1">
          
          {/* Empty State */}
          {properties.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-gray-400 font-poppin">No products found.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((product) => (
              <div key={product._id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                
                {/* Image */}
              {/* Image */}
<div className="relative h-48 md:h-56">
  <img 
    src={product.category?.image?.url} 
    alt={product.category?.image?.alt || product.name} 
    className="w-full h-full object-cover"
  />
  <div className="absolute top-3 left-3 flex gap-2">
    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 font-poppin text-[10px] font-bold uppercase tracking-wider text-gray-800 rounded">
      {product.category?.name}
    </span>
  </div>
</div>


                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-poppin font-bold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-xs font-poppin text-gray-500 mb-2">{product.brand}</p>
                  <p className="text-xs font-poppin text-gray-500 mb-4">{product.description}</p>

                  {/* Stats Placeholder (optional, since your API doesn't have beds/baths/sqft) */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      <Bed size={14} className="text-gray-400" />
                      <span className="text-xs font-poppin font-medium text-gray-600">N/A</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      <Bath size={14} className="text-gray-400" />
                      <span className="text-xs font-poppin font-medium text-gray-600">N/A</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      <Maximize size={14} className="text-gray-400" />
                      <span className="text-xs font-poppin font-medium text-gray-600">N/A</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                    <button className="bg-[#2B8CAD] hover:bg-[#237896] text-white text-sm font-poppin font-semibold px-4 py-2 rounded-lg transition-colors">
                      View
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
