import { useState } from "react";
import { Heart } from "../../../assets/icon";

const propertyData = [
  {
    id: 1,
    title: "Gorgeous Home for Sale",
    location: "Los Angeles City, CA, USA",
    beds: 3,
    baths: 2,
    area: "1200 sq",
    price: "$820,000",
    badge: "Featured",
    status: "For Sale",
    image:
      "src/assets/image/house.png",
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    location: "San Francisco, CA, USA",
    beds: 2,
    baths: 2,
    area: "980 sq",
    price: "$730,000",
    badge: "Featured",
    status: "For Sale",
    image:
        "src/assets/image/house.png",
  },
  {
    id: 3,
    title: "Modern Family House",
    location: "Austin, TX, USA",
    beds: 4,
    baths: 3,
    area: "2100 sq",
    price: "$640,000",
    badge: "Featured",
    status: "For Sale",
    image:
        "src/assets/image/house.png",
  },
  {
    id: 3,
    title: "Modern Family House",
    location: "Austin, TX, USA",
    beds: 4,
    baths: 3,
    area: "2100 sq",
    price: "$640,000",
    badge: "Featured",
    status: "For Sale",
    image:
        "src/assets/image/house.png",
  },
  {
    id: 3,
    title: "Modern Family House",
    location: "Austin, TX, USA",
    beds: 4,
    baths: 3,
    area: "2100 sq",
    price: "$640,000",
    badge: "Featured",
    status: "For Sale",
    image:
        "src/assets/image/house.png",
  },
];

const Property = () => {
   const [price, setPrice] = useState([0, 2000000]);
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase  text-sky-500">
            Property Listing
          </p>
          <h2 className="text-[40px] font-poppins font-bold text-slate-900">
            Find top listings and trusted agents.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 rounded-[24px] bg-white p-4 ">
          <input
            type="text"
            placeholder="Search by location, city, or neighborhood..."
            className="flex-1 rounded-[14px] border border-slate-200 px-4 py-3 text-sm outline-none"
          />
          <select className="rounded-[14px] border border-slate-200 px-4 py-3 text-sm text-slate-600">
            <option>All Types</option>
            <option>House</option>
            <option>Apartment</option>
          </select>
          <select className="rounded-[14px] border border-slate-200 px-4 py-3 text-sm text-slate-600">
            <option>Any Price</option>
            <option>$500k - $750k</option>
            <option>$750k - $1M</option>
          </select>
          <select className="rounded-[14px] border border-slate-200 px-4 py-3 text-sm text-slate-600">
            <option>Any</option>
            <option>2+ Beds</option>
            <option>3+ Beds</option>
          </select>
          <button className="rounded-[14px] bg-sky-500 px-16 py-3 text-sm font-semibold text-white shadow">
            Search
          </button>
        </div>

        <div className="flex gap-8">
          {/* <div className="rounded-[24px] bg-white p-4 shadow-lg">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-500">
              <span>Map View</span>
              <button className="rounded-full border border-slate-200 px-3 py-1 text-xs">
                Fullscreen
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1504616922418-96f87d10d2b1?auto=format&fit=crop&w=1200&q=80"
              alt="Map preview"
              className="h-72 w-full rounded-3xl object-cover"
            />
          </div> */}
           <div className="w-64 bg-[#F9FCFF] border border-primary/20 shadow-md rounded-[20px] p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-primary font-semibold">Filters</h2>
        <button className="text-sm text-blue-500 hover:underline">
          Reset
        </button>
      </div>

      {/* Divider */}
      <hr />

      {/* Price Range */}
      <div>
        <h3 className="mb-2 font-medium text-primary">Price Range</h3>

        <input
          type="range"
          min="0"
          max="2000000"
          step="50000"
          value={price[1]}
          onChange={(e) => setPrice([0, Number(e.target.value)])}
          className="w-full accent-blue-500"
        />

        <div className="flex justify-between text-sm text-gray-600">
          <span>${price[0].toLocaleString()}</span>
          <span>${price[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h3 className="mb-2 font-medium text-gray-700">Bedrooms</h3>
        <div className="flex flex-wrap gap-2">
          {["1+", "2+", "3+", "5+"].map((item) => (
            <button
              key={item}
              className="border rounded-md px-3 py-1 text-sm hover:bg-blue-50"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <h3 className="mb-2 font-medium text-gray-700">Bathrooms</h3>
        <div className="flex flex-wrap gap-2">
          {["1+", "2+", "3+"].map((item) => (
            <button
              key={item}
              className="border rounded-md px-3 py-1 text-sm hover:bg-blue-50"
            >
              {item}
            </button>
          ))}
        </div>
      
      </div>

      {/* Property Type */}
      <div>
        <h3 className="mb-2 font-medium text-gray-700">Property Type</h3>
        <div className="space-y-2 text-sm">
          {["Single Family", "Townhouse", "Condo", "Multi-Family"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Home Features */}
      <div>
        <h3 className="mb-2 font-medium text-gray-700">Home Features</h3>
        <div className="space-y-2 text-sm">
          {["Pool", "Garage", "Basement", "Garden"].map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              {feature}
            </label>
          ))}
        </div>
      </div>
      <div>
        <button className="w-full bg-primary text-white py-2 rounded-[10px] font-semibold shadow-md hover:bg-blue-700 transition">
          Apply Filters
        </button> 
          <button className="w-full mt-2 border border-primary/30 text-primary py-2 rounded-[10px] font-semibold shadow-md hover:bg-blue-50 transition">
         Reset All
        </button>
      </div>
    </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {propertyData.map((property) => (
              <article
                key={property.id}
                className="rounded-[24px] border border-slate-100 bg-white  shadow-sm"
              >
                <div className="relative  w-full overflow-hidden rounded-[18px]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-[200px] rounded-b-[0px] w-full  "
                  />
                  <div className="absolute left-3 top-3 flex gap-2 text-[11px] font-semibold text-white">
                    <span className="rounded-[5px] bg-white text-black px-3 py-1">
                      {property.badge}
                    </span>
                    <span className="rounded-[5px] bg-white text-black px-3 py-1">
                      {property.status}
                    </span>
                  </div>
                </div>
<div className="p-2">
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {property.title}
                </h3>
                <p className="text-sm text-slate-500">{property.location}</p>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
                  <span  className="border p-1 px-2 rounded-[25px]">{property.beds} Beds</span>
                  <span  className="border p-1 px-2 rounded-[25px]"> {property.baths} Baths</span>
                  <span  className="border p-1 px-2 rounded-[25px]">{property.area}</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button className="rounded-[10px] bg-primary px-4 py-2 text-xs font-semibold text-white">
                    {property.price}
                  </button>
                  <button className="rounded-full border border-slate-200 px-2 py-2 text-xs text-slate-500">
                 <Heart/>
                  </button>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Property;

