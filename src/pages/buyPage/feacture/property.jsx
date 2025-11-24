// import { useState } from "react";
// import { Heart } from "../../../assets/icon";

// const propertyData = [
//   {
//     id: 1,
//     title: "Gorgeous Home for Sale",
//     location: "Los Angeles City, CA, USA",
//     beds: 3,
//     baths: 2,
//     area: "1200 sq",
//     price: "$820,000",
//     badge: "Featured",
//     status: "For Sale",
//     image:
//       "/assets/image/house.png",
//   },
//   {
//     id: 2,
//     title: "Luxury City Apartment",
//     location: "San Francisco, CA, USA",
//     beds: 2,
//     baths: 2,
//     area: "980 sq",
//     price: "$730,000",
//     badge: "Featured",
//     status: "For Sale",
//     image:
//         "/assets/image/house.png",
//   },
//   {
//     id: 3,
//     title: "Modern Family House",
//     location: "Austin, TX, USA",
//     beds: 4,
//     baths: 3,
//     area: "2100 sq",
//     price: "$640,000",
//     badge: "Featured",
//     status: "For Sale",
//     image:
//         "/assets/image/house.png",
//   },
//   {
//     id: 3,
//     title: "Modern Family House",
//     location: "Austin, TX, USA",
//     beds: 4,
//     baths: 3,
//     area: "2100 sq",
//     price: "$640,000",
//     badge: "Featured",
//     status: "For Sale",
//     image:
//         "/assets/image/house.png",
//   },
//   {
//     id: 3,
//     title: "Modern Family House",
//     location: "Austin, TX, USA",
//     beds: 4,
//     baths: 3,
//     area: "2100 sq",
//     price: "$640,000",
//     badge: "Featured",
//     status: "For Sale",
//     image:
//         "/assets/image/house.png",
//   },
// ];

// const Property = () => {
//    const [price, setPrice] = useState([0, 2000000]);
//   return (
//     <section className="bg-white relative pb-16 py-16">
//       <div className="mx-auto max-w-6xl space-y-8 px-6">
//         <div className="space-y-2">
//           <p className="text-sm font-semibold uppercase  text-sky-500">
//             Property Listing
//           </p>
//           <h2 className="text-[40px] font-poppins font-bold text-slate-900">
//             Find top listings and trusted agents.
//           </h2>
//         </div>

//         {/* <div className="flex flex-wrap gap-3 rounded-[24px] bg-white p-4 ">
//           <input
//             type="text"
//             placeholder="Search by location, city, or neighborhood..."
//             className="flex-1 rounded-[14px] border border-slate-200 px-4 py-3 text-sm outline-none"
//           />
//           <select className="rounded-[14px] border border-slate-200 px-4 py-3 text-sm text-slate-600">
//             <option>All Types</option>
//             <option>House</option>
//             <option>Apartment</option>
//           </select>
//           <select className="rounded-[14px] border border-slate-200 px-4 py-3 text-sm text-slate-600">
//             <option>Any Price</option>
//             <option>$500k - $750k</option>
//             <option>$750k - $1M</option>
//           </select>
//           <select className="rounded-[14px] border border-slate-200 px-4 py-3 text-sm text-slate-600">
//             <option>Any</option>
//             <option>2+ Beds</option>
//             <option>3+ Beds</option>
//           </select>
//           <button className="rounded-[14px] bg-sky-500 px-16 py-3 text-sm font-semibold text-white shadow">
//             Search
//           </button>
//         </div> */}
//          <div className="flex w-full max-w-6xl items-center justify-center p-4 bg-white">
//       <div className="flex flex-col w-full gap-3 md:flex-row">
        
//         {/* Search Input Container */}
//         <div className="relative flex-1">
//           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//             {/* Search Icon SVG */}
//             <svg
//               className="h-5 w-5 text-slate-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             placeholder="Search by location, city, or neighborhood..."
//             className="block w-full rounded-lg border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-3 text-sm text-slate-600 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
//           />
//         </div>

//         {/* Filter Dropdowns Wrapper */}
//         <div className="flex flex-col gap-3 sm:flex-row">
          
//           {/* Dropdown 1: All Types */}
//           <div className="relative min-w-[140px]">
//             <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50/50 py-3 pl-4 pr-10 text-sm text-slate-700 focus:border-sky-500 focus:bg-white focus:outline-none">
//               <option>All Types</option>
//               <option>House</option>
//               <option>Apartment</option>
//               <option>Condo</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
//               {/* Chevron Down SVG */}
//               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </div>

//           {/* Dropdown 2: Any Price */}
//           <div className="relative min-w-[140px]">
//             <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50/50 py-3 pl-4 pr-10 text-sm text-slate-700 focus:border-sky-500 focus:bg-white focus:outline-none">
//               <option>Any Price</option>
//               <option>$100k - $500k</option>
//               <option>$500k - $1M</option>
//               <option>$1M+</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
//               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </div>

//           {/* Dropdown 3: Any (Beds) */}
//           <div className="relative min-w-[100px]">
//             <select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50/50 py-3 pl-4 pr-10 text-sm text-slate-700 focus:border-sky-500 focus:bg-white focus:outline-none">
//               <option>Any</option>
//               <option>1+ Bed</option>
//               <option>2+ Bed</option>
//               <option>3+ Bed</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
//               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Search Button */}
//         <button className="rounded-lg bg-[#2389b8] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1c7aa3] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
//           Search
//         </button>
        
//       </div>
//     </div>

//         <div className="flex md:flex-row pb-16 flex-col gap-8">
//           {/* <div className="rounded-[24px] bg-white p-4 shadow-lg">
//             <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-500">
//               <span>Map View</span>
//               <button className="rounded-full border border-slate-200 px-3 py-1 text-xs">
//                 Fullscreen
//               </button>
//             </div>
//             <img
//               src="https://images.unsplash.com/photo-1504616922418-96f87d10d2b1?auto=format&fit=crop&w=1200&q=80"
//               alt="Map preview"
//               className="h-72 w-full rounded-3xl object-cover"
//             />
//           </div> */}
//            <div className="w-64 bg-[#F9FCFF] border border-primary/20 shadow-md rounded-[20px] p-4 space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg text-primary font-semibold">Filters</h2>
//         <button className="text-sm text-blue-500 hover:underline">
//           Reset
//         </button>
//       </div>

//       {/* Divider */}
//       <hr />

//       {/* Price Range */}
//       <div>
//         <h3 className="mb-2 font-medium text-primary">Price Range</h3>

//         <input
//           type="range"
//           min="0"
//           max="2000000"
//           step="50000"
//           value={price[1]}
//           onChange={(e) => setPrice([0, Number(e.target.value)])}
//           className="w-full accent-blue-500"
//         />

//         <div className="flex justify-between text-sm text-gray-600">
//           <span>${price[0].toLocaleString()}</span>
//           <span>${price[1].toLocaleString()}</span>
//         </div>
//       </div>

//       {/* Bedrooms */}
//       <div>
//         <h3 className="mb-2 font-medium text-gray-700">Bedrooms</h3>
//         <div className="flex flex-wrap gap-2">
//           {["1+", "2+", "3+", "5+"].map((item) => (
//             <button
//               key={item}
//               className="border rounded-md px-3 py-1 text-sm hover:bg-blue-50"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Bathrooms */}
//       <div>
//         <h3 className="mb-2 font-medium text-gray-700">Bathrooms</h3>
//         <div className="flex flex-wrap gap-2">
//           {["1+", "2+", "3+"].map((item) => (
//             <button
//               key={item}
//               className="border rounded-md px-3 py-1 text-sm hover:bg-blue-50"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
      
//       </div>

//       {/* Property Type */}
//       <div>
//         <h3 className="mb-2 font-medium text-gray-700">Property Type</h3>
//         <div className="space-y-2 text-sm">
//           {["Single Family", "Townhouse", "Condo", "Multi-Family"].map((type) => (
//             <label key={type} className="flex items-center gap-2">
//               <input type="checkbox" className="accent-blue-500" />
//               {type}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Home Features */}
//       <div>
//         <h3 className="mb-2 font-medium text-gray-700">Home Features</h3>
//         <div className="space-y-2 text-sm">
//           {["Pool", "Garage", "Basement", "Garden"].map((feature) => (
//             <label key={feature} className="flex items-center gap-2">
//               <input type="checkbox" className="accent-blue-500" />
//               {feature}
//             </label>
//           ))}
//         </div>
//       </div>
//       <div>
//         <button className="w-full bg-primary text-white py-2 rounded-[10px] font-semibold shadow-md hover:bg-blue-700 transition">
//           Apply Filters
//         </button> 
//           <button className="w-full mt-2 border border-primary/30 text-primary py-2 rounded-[10px] font-semibold shadow-md hover:bg-blue-50 transition">
//          Reset All
//         </button>
//       </div>
//     </div>

//           <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-1">
//             {propertyData.map((property) => (
//               <article
//                 key={property.id}
//                 className="rounded-[24px] border border-slate-100 bg-white  shadow-sm"
//               >
//                 <div className="relative  w-full overflow-hidden rounded-[18px]">
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="h-[200px] rounded-b-[0px] w-full  "
//                   />
//                   <div className="absolute left-3 top-3 flex gap-2 text-[11px] font-semibold text-white">
//                     <span className="rounded-[5px] bg-white text-black px-3 py-1">
//                       {property.badge}
//                     </span>
//                     <span className="rounded-[5px] bg-white text-black px-3 py-1">
//                       {property.status}
//                     </span>
//                   </div>
//                 </div>
// <div className="p-2">
//                 <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                   {property.title}
//                 </h3>
//                 <p className="text-sm text-slate-500">{property.location}</p>

//                 <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
//                   <span  className="border p-1 px-2 rounded-[25px]">{property.beds} Beds</span>
//                   <span  className="border p-1 px-2 rounded-[25px]"> {property.baths} Baths</span>
//                   <span  className="border p-1 px-2 rounded-[25px]">{property.area}</span>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between">
//                   <button className="rounded-[10px] bg-primary px-4 py-2 text-xs font-semibold text-white">
//                     {property.price}
//                   </button>
//                   <button className="rounded-full border border-slate-200 px-2 py-2 text-xs text-slate-500">
//                  <Heart/>
//                   </button>
//                 </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default Property;
// api
// import { useEffect, useState } from "react";
// import { Heart } from "../../../assets/icon";
// const API_URL = "http://192.168.18.29:5000/listings";
// // UPDATE WITH REAL VALUES
// const CLOUD_NAME = "your_cloudinary_cloud_name";
// const UPLOAD_PRESET = "your_upload_preset";
// const Property = () => {
//   const [propertyData, setPropertyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // Form State
//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     beds: "",
//     baths: "",
//     area: "",
//     price: "",
//     badge: "Featured",
//     status: "For Sale",
//     image: "",
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   // UPLOAD IMAGE → CLOUDINARY
//   const uploadImageToCloudinary = async () => {
//     if (!imageFile) return "";
//     const data = new FormData();
//     data.append("file", imageFile);
//     data.append("upload_preset", UPLOAD_PRESET);
//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//       { method: "POST", body: data }
//     );
//     const uploadedImage = await res.json();
//     return uploadedImage.secure_url;
//   };
//   // CREATE PROPERTY
//   const createProperty = async (e) => {
//     e.preventDefault();
//     let imageUrl = form.image;
//     if (imageFile) {
//       imageUrl = await uploadImageToCloudinary();
//     }
//     const payload = {
//       ...form,
//       image: imageUrl,
//     };
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const newProperty = await response.json();
//       setPropertyData((prev) => [...prev, newProperty]);
//       // Reset Form
//       setForm({
//         title: "",
//         location: "",
//         beds: "",
//         baths: "",
//         area: "",
//         price: "",
//         badge: "Featured",
//         status: "For Sale",
//         image: "",
//       });
//       setImageFile(null);
//     } catch (error) {
//       console.error("Error creating property:", error);
//     }
//   };
//   // FETCH ALL PROPERTIES
//   const fetchProperties = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setPropertyData(data);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchProperties();
//   }, []);
//   return (
//     <section className="bg-white relative pb-16 py-16">
//       <div className="mx-auto max-w-6xl space-y-8 px-6">
//         <div>
//           <p className="text-sm font-semibold uppercase text-sky-500">
//             Property Listing
//           </p>
//           <h2 className="text-[40px] font-bold text-slate-900">
//             Add & Manage Properties
//           </h2>
//         </div>
//         {/* PROPERTY FORM */}
//         <div className="p-6 bg-slate-50 rounded-xl shadow mb-12">
//           <h3 className="text-xl font-bold mb-4">Add New Property</h3>
//           <form
//             onSubmit={createProperty}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4"
//           >
//             <input className="border p-2 rounded"
//               name="title" placeholder="Property Title"
//               value={form.title} onChange={handleChange} required />
//             <input className="border p-2 rounded"
//               name="location" placeholder="Location"
//               value={form.location} onChange={handleChange} required />
//             <input className="border p-2 rounded"
//               name="beds" placeholder="Beds"
//               value={form.beds} onChange={handleChange} required />
//             <input className="border p-2 rounded"
//               name="baths" placeholder="Baths"
//               value={form.baths} onChange={handleChange} required />
//             <input className="border p-2 rounded"
//               name="area" placeholder="Area (sqft)"
//               value={form.area} onChange={handleChange} required />
//             <input className="border p-2 rounded"
//               name="price" placeholder="Price"
//               value={form.price} onChange={handleChange} required />
//             {/* IMAGE FILE */}
//             <input
//               type="file"
//               accept="image/*"
//               className="border p-2 rounded"
//               onChange={(e) => setImageFile(e.target.files[0])}
//             />
//             {/* IMAGE URL */}
//             <input
//               className="border p-2 rounded"
//               name="image"
//               placeholder="Or paste image URL"
//               value={form.image}
//               onChange={handleChange}
//             />
//             <button
//               className="bg-blue-600 text-white rounded py-2"
//               type="submit"
//             >
//               Create Property
//             </button>
//           </form>
//         </div>
//         {/* PROPERTY CARDS */}
//         {loading ? (
//           <p className="text-center text-gray-600">Loading properties...</p>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
//             {propertyData.map((property) => (
//               <article
//                 key={property._id}
//                 className="rounded-xl border border-gray-200 bg-white shadow p-4"
//               >
//                 <img
//                   src={property.image}
//                   alt={property.title}
//                   className="h-[200px] w-full object-cover rounded-lg"
//                 />
//                 <h3 className="mt-4 text-lg font-semibold">{property.title}</h3>
//                 <p className="text-sm text-gray-500">{property.location}</p>
//                 <div className="mt-3 flex gap-2 text-xs text-gray-600">
//                   <span className="border px-3 py-1 rounded">
//                     {property.bedrooms} Beds
//                   </span>
//                   <span className="border px-3 py-1 rounded">
//                     {property.bathrooms} Baths
//                   </span>
//                   <span className="border px-3 py-1 rounded">
//                     {property.areaSqft} sqft
//                   </span>
//                 </div>
//                 <div className="mt-4 flex items-center justify-between">
//                   <button className="bg-blue-600 text-white rounded px-4 py-2 text-xs font-semibold">
//                     {property.price}
//                   </button>
//                   <button className="border rounded-full p-2">
//                     <Heart />
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };
// export default Property;
import React, { useState } from "react";
import axios from "axios";
export default function CreateListing() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    baths: "",
    area: "",
    badge: "",
    status: "For Sale",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("location", form.location);
    fd.append("price", form.price);
    fd.append("beds", form.beds);
    fd.append("baths", form.baths);
    fd.append("area", form.area);
    fd.append("badge", form.badge);
    fd.append("status", form.status);
    if (image) fd.append("image", image);
    try {
      const res = await axios.post("http://192.168.18.29/api/listings", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Listing Created Successfully!");
      console.log(res.data);
    } catch (err) {
      setMessage("Error: " + err.response?.data?.error);
    }
  };
  return (
    <div className="max-w-xl relative mb-[100px] mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Create Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border p-2 rounded"
          value={form.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="beds"
          placeholder="Bedrooms"
          className="w-full border p-2 rounded"
          value={form.beds}
          onChange={handleChange}
        />
        <input
          type="number"
          name="baths"
          placeholder="Bathrooms"
          className="w-full border p-2 rounded"
          value={form.baths}
          onChange={handleChange}
        />
        <input
          type="number"
          name="area"
          placeholder="Area Sqft"
          className="w-full border p-2 rounded"
          value={form.area}
          onChange={handleChange}
        />
        <input
          type="text"
          name="badge"
          placeholder="Badge (Featured, New, Hot)"
          className="w-full border p-2 rounded"
          value={form.badge}
          onChange={handleChange}
        />
        <select
          name="status"
          className="w-full border p-2 rounded"
          value={form.status}
          onChange={handleChange}
        >
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
          <option value="Sold">Sold</option>
        </select>
        {/* IMAGE UPLOAD */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover border rounded"
          />
        )}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Listing
        </button>
      </form>
      {message && <p className="text-green-600 font-semibold">{message}</p>}
    </div>
  );
}








