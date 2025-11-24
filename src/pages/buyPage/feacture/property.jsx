import { useEffect, useState } from "react";
import { Heart } from "../../../assets/icon";
const API_URL = "http://192.168.18.29:5000/listings";
const Property = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    areaSqft: "",
    price: "",
    badge: "Featured",
    status: "For Sale",
    imageURL: "", // fallback URL
  });
  const [imageFiles, setImageFiles] = useState([]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const fetchProperties = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPropertyData(data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProperties();
  }, []);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert("You can upload a maximum of 4 images");
      return;
    }
    setImageFiles(files);
  };
  const createProperty = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("location", form.location);
    formData.append("beds", form.bedrooms);
    formData.append("baths", form.bathrooms);
    formData.append("area", form.areaSqft);
    formData.append("price", form.price);
    formData.append("badge", form.badge);
    formData.append("status", form.status);
    // Append images using key "images"
    if (imageFiles.length > 0) {
      imageFiles.forEach((file) => formData.append("images", file));
    } else if (form.imageURL) {
      formData.append("images", form.imageURL);
    }
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });
      const newProperty = await res.json();
      setPropertyData((prev) => [...prev, newProperty]);
      // Reset form
      setForm({
        title: "",
        location: "",
        bedrooms: "",
        bathrooms: "",
        areaSqft: "",
        price: "",
        badge: "Featured",
        status: "For Sale",
        imageURL: "",
      });
      setImageFiles([]);
    } catch (err) {
      console.error("Error creating property:", err);
    }
  };
  const deleteProperty = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setPropertyData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting property:", err);
    }
  };
  return (
    <section className="bg-white relative pb-16 py-16">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <h2 className="text-[40px] font-bold text-slate-900">
          Add & Manage Properties
        </h2>
        {/* Form */}
        <form
          onSubmit={createProperty}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-xl shadow mb-12"
        >
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="bedrooms"
            placeholder="Bedrooms (1,2,3,5)"
            value={form.bedrooms}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="bathrooms"
            placeholder="Bathrooms (1,2,3)"
            value={form.bathrooms}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="areaSqft"
            placeholder="Area (sqft)"
            value={form.areaSqft}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          {/* Image upload */}
          <input
            type="file"
            accept="image/*"
            multiple
            className="border p-2 rounded"
            onChange={handleImageChange}
          />
          {/* Fallback raw URL */}
          <input
            name="imageURL"
            placeholder="Or paste image URL"
            value={form.imageURL}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2"
          >
            Add Property
          </button>
        </form>
        {/* Property Cards */}
        {loading ? (
          <p>Loading properties...</p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {propertyData.map((property) => {
              const imgSrc = property.images?.[0]?.startsWith("http")
                ? property.images[0]
                : `http://192.168.18.29:5000${property.coverImage}`;
              return (
                <article
                  key={property._id}
                  className="rounded-xl border border-gray-200 bg-white shadow p-4 relative"
                >
                  <img
                    src={imgSrc}
                    alt={property.title}
                    className="h-[200px] w-full object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    <p className="text-sm text-gray-500">{property.location}</p>
                    <div className="flex gap-2 mt-2 text-xs text-gray-600">
                      <span className="border px-2 py-1 rounded">
                        {property.bedrooms} Beds
                      </span>
                      <span className="border px-2 py-1 rounded">
                        {property.bathrooms} Baths
                      </span>
                      <span className="border px-2 py-1 rounded">
                        {property.areaSqft} sqft
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <button className="bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold">
                        ${property.price}
                      </button>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteProperty(property._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-xs font-semibold"
                        >
                          Delete
                        </button>
                        <button className="border p-2 rounded-full">
                          <Heart />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default Property;








// import { useEffect, useState } from "react";
// import { Heart } from "../../../assets/icon";

// const API_URL = "http://192.168.18.29:5000/listings";

// const Property = () => {
//   const [propertyData, setPropertyData] = useState([]);
//   const [loading, setLoading] = useState(true);

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

//   const createProperty = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("location", form.location);
//     formData.append("beds", form.beds);
//     formData.append("baths", form.baths);
//     formData.append("area", form.area);
//     formData.append("price", form.price);
//     formData.append("badge", form.badge);
//     formData.append("status", form.status);

//     if (imageFile) {
//       formData.append("image", imageFile);
//     } else if (form.image) {
//       formData.append("image", form.image);
//     }

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         body: formData,
//       });

//       const newProperty = await response.json();
//       setPropertyData((prev) => [...prev, newProperty]);

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

//   const fetchProperties = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setPropertyData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error loading properties:", error);
//       setLoading(false);
//     }
//   };

//   const deleteProperty = async (id) => {
//     try {
//       await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });
//       setPropertyData((prev) => prev.filter((prop) => prop._id !== id));
//     } catch (error) {
//       console.error("Error deleting property:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return (
//     <section className="bg-white relative mb-16 py-16">
//       <div className="mx-auto max-w-6xl space-y-8 px-6">
//         <p className="text-sm font-semibold uppercase text-sky-500">
//           Property Listing
//         </p>
//         <h2 className="text-[40px] font-bold text-slate-900">
//           Add & Manage Properties
//         </h2>

//         {/* FORM */}
//         <div className="p-6 bg-slate-50 rounded-xl shadow mb-12">
//           <h3 className="text-xl font-bold mb-4">Add New Property</h3>
//           <form
//             onSubmit={createProperty}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4"
//           >
//             <input
//               className="border p-2 rounded"
//               name="title"
//               placeholder="Property Title"
//               value={form.title}
//               onChange={handleChange}
//             />
//             <input
//               className="border p-2 rounded"
//               name="location"
//               placeholder="Location"
//               value={form.location}
//               onChange={handleChange}
//             />
//             <input
//               className="border p-2 rounded"
//               name="beds"
//               placeholder="Beds"
//               value={form.beds}
//               onChange={handleChange}
//             />
//             <input
//               className="border p-2 rounded"
//               name="baths"
//               placeholder="Baths"
//               value={form.baths}
//               onChange={handleChange}
//             />
//             <input
//               className="border p-2 rounded"
//               name="area"
//               placeholder="Area (sqft)"
//               value={form.area}
//               onChange={handleChange}
//             />
//             <input
//               className="border p-2 rounded"
//               name="price"
//               placeholder="Price"
//               value={form.price}
//               onChange={handleChange}
//             />

//             <input
//               type="file"
//               className="border p-2 rounded"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//             />

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
//           <p className="text-center text-gray-600">Loading...</p>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
//             {propertyData.map((property) => {
//               const imgSrc = property.image
//                 ? property.image.startsWith("http")
//                   ? property.image
//                   : `http://192.168.18.29:5000${property.image}`
//                 : "/default-image.jpg";

//               return (
//                 <article
//                   key={property._id}
//                   className="rounded-[24px] border border-slate-100 bg-white shadow-sm"
//                 >
//                   <div className="relative w-full overflow-hidden rounded-[18px]">
//                     <img
//                       src={imgSrc}
//                       alt={property.title || "Property Image"}
//                       className="h-[200px] w-full object-cover"
//                     />
//                     <div className="absolute left-3 top-3 flex gap-2 text-[11px] font-semibold text-white">
//                       <span className="rounded-[5px] bg-white text-black px-3 py-1">
//                         {property.badges?.[0]}
//                       </span>
//                       <span className="rounded-[5px] bg-white text-black px-3 py-1">
//                         {property.status}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-4">
//                     <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                       {property.title}
//                     </h3>
//                     <p className="text-sm text-slate-500">{property.location}</p>

//                     <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
//                       <span className="border p-1 px-2 rounded-[25px]">
//                         {property.bedrooms} Beds
//                       </span>
//                       <span className="border p-1 px-2 rounded-[25px]">
//                         {property.bathrooms} Baths
//                       </span>
//                       <span className="border p-1 px-2 rounded-[25px]">
//                         {property.areaSqft} sq ft
//                       </span>
//                     </div>

//                     <div className="mt-4 flex items-center justify-between">
//                       <button className="rounded-[10px] bg-primary px-4 py-2 text-xs font-semibold text-white">
//                         ${property.price}
//                       </button>

//                       <div className="flex gap-2">
//                         <button
//                           className="rounded-full border border-slate-200 p-2"
//                           title="Favorite"
//                         >
//                           <Heart />
//                         </button>
//                         <button
//                           className="rounded-full border border-red-500 p-2 text-red-500"
//                           title="Delete"
//                           onClick={() => deleteProperty(property._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Property;
