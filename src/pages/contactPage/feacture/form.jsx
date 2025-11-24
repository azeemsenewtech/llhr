// import {
//   FiGlobe,
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
// } from "react-icons/fi";

// const contactInfo = [
//   {
//     icon: <FiGlobe className="text-primary text-xl" />,
//     title: "Our Address",
//     lines: ["291 Roderick Wells, UK, Connecticut, 08429."],
//   },
//   {
//     icon: <FiMapPin className="text-primary text-xl" />,
//     title: "Working Hours",
//     lines: ["Mon–Fri: 8 AM – 5 PM", "Sat–Sun: 8 AM – 2 PM"],
//   },
//   {
//     icon: <FiMail className="text-primary text-xl" />,
//     title: "Email Us",
//     lines: ["info@example.com", "contact@example.com"],
//   },
//   {
//     icon: <FiPhone className="text-primary text-xl" />,
//     title: "Contact Us",
//     lines: ["+(000) 123-456-789", "+(0000) 1234-56789"],
//   },
// ];

// const formFields = [
//   {
//     label: "Name*",
//     placeholder: "Mimosic john",
//     type: "text",
//     icon: null,
//   },
//   {
//     label: "Email*",
//     placeholder: "your@email.com",
//     type: "email",
//     icon: null,
//   },
//   {
//     label: "Desired date*",
//     placeholder: "mm/dd/yyyy",
//     type: "text",
//     icon: (
//       <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
//     ),
//   },
//   {
//     label: "Desired time",
//     placeholder: "--:--",
//     type: "text",
//     icon: (
//       <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
//     ),
//   },
// ];

// const ContactSection = () => {
//   return (
//     <section className="w-full relative py-16 pb-80 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         {/* Header */}
//         <p className="text-sm text-primary">Contact Us</p>
//         <h1 className="text-3xl md:text-4xl font-bold text-[#1F2D3D]">
//           To Know About Us
//         </h1>

//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Form */}
//           <div className="bg-[#218AB61C] p-8 rounded-xl shadow-sm">
//             {/* Form */}
//             <form className="space-y-5">
//               {/* First 4 fields from array */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {formFields.map((field, idx) => (
//                   <div key={idx}>
//                     <label className="text-gray-700 font-medium text-sm">
//                       {field.label}
//                     </label>

//                     <div className="relative">
//                       <input
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         className="w-full mt-1 p-3 rounded-[15px] bg-white border border-primary/20 focus:outline-primary"
//                       />
//                       {field.icon}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Message Box */}
//               <div>
//                 <label className="text-gray-700 font-medium text-sm">
//                   Additional Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   placeholder="Please write any note here..."
//                   className="w-full mt-1 p-3 rounded-[15px] bg-white border border-primary/20 focus:outline-primary resize-none"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button className="bg-primary flex items-center justify-center text-white py-3 px-6 rounded-md w-full font-semibold hover:bg-blue-700 transition">
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right Contact Details */}
//           <div className="space-y-8">
//             {contactInfo.map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="bg-[#E8F4FF] p-3 rounded-lg">{item.icon}</div>
//                 <div className="flex flex-col ">
//                   <h3 className="font-semibold text-[18px] text-[#1F2D3D]">
//                     {item.title}
//                   </h3>
//                   <div className="flex gap-4">
//                     {item.lines.map((line, i) => (
//                       <p
//                         className="text-[#44525E] text-[13px] font-poppins"
//                         key={i}
//                       >
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
// import React, { useState } from 'react';

// // --- Main Parent Component ---
// const PropertyListingForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
  
//   const [formData, setFormData] = useState({
//     title: '',
//     price: '',
//     description: '',
//     bedrooms: '',
//     bathrooms: '',
//     parking: false,
//     pool: false,
//     streetAddress: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     documentName: ''
//   });

//   const steps = [
//     { id: 1, label: "Basic Details", icon: "home" },
//     { id: 2, label: "Features & Amenities", icon: "list" },
//     { id: 3, label: "Location & Address", icon: "pin" },
//     { id: 4, label: "Document Upload", icon: "file" },
//     { id: 5, label: "Review & Publish", icon: "eye" },
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleNext = () => {
//     if (currentStep < 5) setCurrentStep(currentStep + 1);
//   };

//   const handleBack = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = () => {
//     alert("Property Listed Successfully!\n" + JSON.stringify(formData, null, 2));
//   };

//   // Logic to decide which component to render
//   const renderStepComponent = () => {
//     switch (currentStep) {
//       case 1: return <StepBasicDetails formData={formData} handleChange={handleChange} />;
//       case 2: return <StepFeatures formData={formData} handleChange={handleChange} />;
//       case 3: return <StepLocation formData={formData} handleChange={handleChange} />;
//       case 4: return <StepDocuments formData={formData} />;
//       case 5: return <StepReview formData={formData} />;
//       default: return null;
//     }
//   };

//   return (
//     <div className="min-h-screen pb-[200px] bg-slate-50 p-6 font-sans text-slate-700">
//       <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-sm p-8">
        
//         {/* Header */}
//         <h1 className="text-xl font-bold text-slate-800 mb-8">List New Property</h1>

//         {/* Stepper */}
//         <div className="relative mb-12">
//           <div className="absolute top-5 left-0 h-1 w-full bg-slate-200 rounded-full -z-0"></div>
//           <div 
//             className="absolute top-5 left-0 h-1 bg-[#2b82b8] rounded-full transition-all duration-500 ease-out -z-0"
//             style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
//           ></div>

//           <div className="flex justify-between w-full relative z-10">
//             {steps.map((step) => {
//               const isCompleted = step.id <= currentStep;
//               return (
//                 <div key={step.id} className="flex flex-col items-center cursor-pointer group" onClick={() => setCurrentStep(step.id)}>
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white ${isCompleted ? 'border-[#2b82b8] text-[#2b82b8] scale-110' : 'border-slate-300 text-slate-300 group-hover:border-slate-400'}`}>
//                     <StepIcon type={step.icon} />
//                   </div>
//                   <span className={`mt-2 text-xs md:text-sm font-medium text-center transition-colors duration-300 ${isCompleted ? 'text-[#2b82b8]' : 'text-slate-400'}`}>
//                     {step.label}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Main Form Content Area */}
//         <div className="border border-slate-200 rounded-xl p-6 md:p-8 min-h-[400px] flex flex-col justify-between">
          
//           {/* Dynamic Component Rendered Here */}
//           <div>
//             {renderStepComponent()}
//           </div>

//           {/* Footer Buttons */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-4 border-t border-slate-100">
//             <button 
//               onClick={handleBack}
//               disabled={currentStep === 1}
//               className={`w-full md:w-auto px-6 py-2.5 rounded-lg border border-slate-200 font-semibold transition-colors ${currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50'}`}
//             >
//               Back
//             </button>
            
//             <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
//               <button className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors">
//                 Save as Draft
//               </button>
              
//               {currentStep === 5 ? (
//                  <button onClick={handleSubmit} className="px-8 py-2.5 rounded-lg bg-green-600 text-white font-semibold shadow-sm hover:bg-green-700 transition-colors">
//                    Publish Property
//                  </button>
//               ) : (
//                 <button onClick={handleNext} className="px-8 py-2.5 rounded-lg bg-[#2b82b8] text-white font-semibold shadow-sm hover:bg-[#236a96] transition-colors">
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Step 1: Basic Details Component ---
// const StepBasicDetails = ({ formData, handleChange }) => {
//   return (
//     <div className="animate-fadeIn">
//       <h2 className="text-[#2b82b8] text-lg font-semibold mb-6">Step 1: Basic Details</h2>
//       <div className="grid grid-cols-1 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Property Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="e.g. Modern Villa in Spain"
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none focus:ring-1 focus:ring-[#2b82b8]"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Price ($)</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="e.g. 250000"
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none focus:ring-1 focus:ring-[#2b82b8]"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             placeholder="Describe the property..."
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none focus:ring-1 focus:ring-[#2b82b8]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Step 2: Features Component ---
// const StepFeatures = ({ formData, handleChange }) => {
//   return (
//     <div className="animate-fadeIn">
//       <h2 className="text-[#2b82b8] text-lg font-semibold mb-6">Step 2: Features & Amenities</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
//           <select 
//             name="bedrooms" 
//             value={formData.bedrooms} 
//             onChange={handleChange}
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm bg-white focus:border-[#2b82b8] focus:outline-none"
//           >
//             <option value="">Select Bedrooms</option>
//             <option value="1">1 Bedroom</option>
//             <option value="2">2 Bedrooms</option>
//             <option value="3">3 Bedrooms</option>
//             <option value="4+">4+ Bedrooms</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Bathrooms</label>
//           <select 
//             name="bathrooms" 
//             value={formData.bathrooms} 
//             onChange={handleChange}
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm bg-white focus:border-[#2b82b8] focus:outline-none"
//           >
//             <option value="">Select Bathrooms</option>
//             <option value="1">1 Bathroom</option>
//             <option value="2">2 Bathrooms</option>
//             <option value="3+">3+ Bathrooms</option>
//           </select>
//         </div>
//         <div className="md:col-span-2">
//           <label className="block text-sm font-semibold text-slate-700 mb-4">Amenities</label>
//           <div className="flex gap-6">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input 
//                 type="checkbox" 
//                 name="pool" 
//                 checked={formData.pool} 
//                 onChange={handleChange}
//                 className="w-4 h-4 text-[#2b82b8] rounded border-gray-300 focus:ring-[#2b82b8]"
//               />
//               <span className="text-sm text-slate-600">Swimming Pool</span>
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input 
//                 type="checkbox" 
//                 name="parking" 
//                 checked={formData.parking} 
//                 onChange={handleChange}
//                 className="w-4 h-4 text-[#2b82b8] rounded border-gray-300 focus:ring-[#2b82b8]"
//               />
//               <span className="text-sm text-slate-600">Private Parking</span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Step 3: Location Component ---
// const StepLocation = ({ formData, handleChange }) => {
//   return (
//     <div className="animate-fadeIn">
//       <h2 className="text-[#2b82b8] text-lg font-semibold mb-6">Step 3: Location & Address</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="md:col-span-2">
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Street Address</label>
//           <div className="relative">
//             <input
//               type="text"
//               name="streetAddress"
//               value={formData.streetAddress}
//               onChange={handleChange}
//               placeholder="Enter street address"
//               className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none focus:ring-1 focus:ring-[#2b82b8]"
//             />
//           </div>
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Enter City"
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             placeholder="Enter State"
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none"
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label className="block text-sm font-semibold text-slate-700 mb-2">ZIP Code</label>
//           <input
//             type="text"
//             name="zipCode"
//             value={formData.zipCode}
//             onChange={handleChange}
//             placeholder="Enter Zip Code"
//             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#2b82b8] focus:outline-none"
//           />
//         </div>
//         <div className="md:col-span-2 mt-4">
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Map Integration</label>
//           <div className="h-48 w-full rounded-xl border border-slate-200 flex flex-col items-center justify-center bg-slate-50 text-slate-500">
//             <svg className="w-10 h-10 mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             <span className="font-medium">Map preview (Google Maps integration)</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Step 4: Documents Component ---
// const StepDocuments = () => {
//   return (
//     <div className="animate-fadeIn">
//       <h2 className="text-[#2b82b8] text-lg font-semibold mb-6">Step 4: Document Upload</h2>
//       <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
//         <svg className="w-12 h-12 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//         </svg>
//         <p className="text-slate-600 font-medium">Click to upload property deed or drag and drop</p>
//         <p className="text-xs text-slate-400 mt-2">PDF, JPG, or PNG (Max 5MB)</p>
//       </div>
//     </div>
//   );
// };

// // --- Step 5: Review Component ---
// const StepReview = ({ formData }) => {
//   return (
//     <div className="animate-fadeIn">
//       <h2 className="text-[#2b82b8] text-lg font-semibold mb-6">Step 5: Review & Publish</h2>
//       <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
//         <div className="flex justify-between border-b border-slate-200 pb-2">
//           <span className="text-slate-500">Title:</span>
//           <span className="font-medium text-slate-700">{formData.title || 'N/A'}</span>
//         </div>
//         <div className="flex justify-between border-b border-slate-200 pb-2">
//           <span className="text-slate-500">Price:</span>
//           <span className="font-medium text-slate-700">${formData.price || '0'}</span>
//         </div>
//         <div className="flex justify-between border-b border-slate-200 pb-2">
//           <span className="text-slate-500">Location:</span>
//           <span className="font-medium text-slate-700">
//             {formData.city ? `${formData.city}, ${formData.state}` : 'N/A'}
//           </span>
//         </div>
//         <div className="flex justify-between pb-2">
//           <span className="text-slate-500">Amenities:</span>
//           <span className="font-medium text-slate-700">
//             {formData.pool ? 'Pool, ' : ''}
//             {formData.parking ? 'Parking' : ''}
//             {!formData.pool && !formData.parking && 'None selected'}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Helper Icon Component ---
// const StepIcon = ({ type }) => {
//   const icons = {
//     home: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
//     list: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
//     pin: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
//     file: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
//     eye: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
//   };
  
//   return (
//     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       {icons[type]}
//     </svg>
//   );
// };

// export default PropertyListingForm;
import React from 'react';

const MyPropertiesDashboard = () => {
  // Mock Data for Stats
  const stats = [
    { label: 'Total Properties', value: '178+', icon: 'building' },
    { label: 'Available Properties', value: '178+', icon: 'building' },
    { label: 'Occupied Properties', value: '8', icon: 'building' },
    { label: 'Avg. HA Score', value: '17', icon: 'chart' },
    { label: 'Average Profitability', value: '68%', icon: 'chart' },
    { label: 'Average Rent', value: '$2,34', icon: 'money' },
  ];

  // Mock Data for Properties
  const properties = [
    {
      id: 1,
      status: 'Active',
      price: '$ 10,500',
      title: 'Meadowbrook Villas',
      address: 'Av. Josefa Torres # 574, PE LIMA 39',
      sqft: '1500 Sq',
      beds: '4 Beds',
      baths: '2 Baths',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      status: 'Application Pending',
      price: '$ 100,500',
      title: 'Meadowbrook Villas',
      address: 'Av. Josefa Torres # 574, PE LIMA 39',
      sqft: '1500 Sq',
      beds: '4 Beds',
      baths: '2 Baths',
      lease: '1/1/2025 - 12/31/2025',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      status: 'None', // For layout matching the 3rd card with no badge
      price: '$ 166,000',
      title: 'Meadowbrook Villas',
      address: 'Av. Josefa Torres # 574, PE LIMA 39',
      sqft: '1500 Sq',
      beds: '4 Beds',
      baths: '2 Baths',
      lease: '1/1/2025 - 12/31/2025',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    // Duplicate row for demo purposes
    {
      id: 4,
      status: 'Active',
      price: '$ 10,500',
      title: 'Meadowbrook Villas',
      address: 'Av. Josefa Torres # 574, PE LIMA 39',
      sqft: '1500 Sq',
      beds: '4 Beds',
      baths: '2 Baths',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      status: 'Application Pending',
      price: '$ 100,500',
      title: 'Meadowbrook Villas',
      address: 'Av. Josefa Torres # 574, PE LIMA 39',
      sqft: '1500 Sq',
      beds: '4 Beds',
      baths: '2 Baths',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      status: 'None',
      price: '$ 166,000',
      title: 'Meadowbrook Villas',
      address: 'Av. Josefa Torres # 574, PE LIMA 39',
      sqft: '1500 Sq',
      beds: '4 Beds',
      baths: '2 Baths',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-700">
      <div className="mx-auto max-w-7xl">
        
        {/* --- TOP HEADER --- */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">My Properties</h1>
            <p className="text-slate-500 text-sm">Manage all your listed properties</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search for anything..." 
                className="pl-4 pr-10 py-2 rounded-full border border-slate-200 bg-white text-sm w-64 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <SearchIcon className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            </div>
            
            {/* User Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-800 leading-none">Easin Arafat</p>
                <p className="text-xs text-slate-400">Free Account</p>
              </div>
            </div>
          </div>
        </header>

        {/* --- STATS ROW --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center min-h-[100px]">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                   {/* Simple Logic to switch icons */}
                   {stat.icon === 'building' && <BuildingIcon className="w-5 h-5" />}
                   {stat.icon === 'chart' && <ChartIcon className="w-5 h-5" />}
                   {stat.icon === 'money' && <MoneyIcon className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-xl font-bold text-sky-600">{stat.value}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium ml-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- ACTION BAR --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-[#2b82b8] self-start sm:self-center">All Properties</h2>
          
          <div className="flex w-full sm:w-auto gap-3">
            {/* Search */}
            <div className="relative flex-1 sm:flex-none">
              <input 
                type="text" 
                placeholder="Search documents..." 
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            {/* Filter Btn */}
            <button className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
              <FilterIcon className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <button className="px-6 py-2.5 bg-[#2b82b8] hover:bg-[#236a96] text-white text-sm font-medium rounded-lg shadow-sm transition-colors whitespace-nowrap">
              List New Property
            </button>
          </div>
        </div>

        {/* --- PROPERTY GRID --- */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop) => (
            <div key={prop.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
              
              {/* Image Section */}
              <div className="relative h-56">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full rounded-3xl object-cover"
                />
                
                {/* Gradient Overlay for Price */}
                <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Status Badge */}
                {prop.status !== 'None' && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white
                    ${prop.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}
                  `}>
                    {prop.status}
                  </div>
                )}

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors text-slate-400 hover:text-red-500">
                   <HeartIcon className="w-4 h-4" />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  {prop.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-lg mb-1">{prop.title}</h3>
                <div className="flex items-start gap-2 mb-4">
                  <PinIcon className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-500">{prop.address}</p>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-4 md:gap-6 text-slate-600 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <ExpandIcon className="w-4 h-4 text-slate-400" />
                    <span>{prop.sqft}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedIcon className="w-4 h-4 text-slate-400" />
                    <span>{prop.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BathIcon className="w-4 h-4 text-slate-400" />
                    <span>{prop.baths}</span>
                  </div>
                </div>

                {/* Lease Date (Conditional) */}
                {prop.lease && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg inline-block">
                    <CalendarIcon className="w-3 h-3 text-sky-500" />
                    <span>Lease: {prop.lease}</span>
                  </div>
                )}

                {/* Button */}
                
              </div>
<div className="flex items-end justify-end ">
                  <button className="px-6 py-2 bg-[#2b82b8] hover:bg-[#236a96] text-white text-sm font-medium rounded-lg transition-colors w-full sm:w-auto">
                    View Detail
                  </button>
                </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// --- SVG Icons Components (Embedded for portability) ---

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const BuildingIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MoneyIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const PinIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ExpandIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const BedIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BathIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default MyPropertiesDashboard;