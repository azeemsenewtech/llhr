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
import React, { useState, useRef } from 'react';
import { 
  Home, List, MapPin, FileText, Eye, Upload, 
  ChevronDown, CheckCircle2, Bed, Bath, 
  Maximize, Wifi, Car,  ShieldCheck, X, ImageIcon
} from 'lucide-react';

const ListPropertyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Centralized State
  const [formData, setFormData] = useState({
    // Step 1
    propertyType: '',
    title: '',
    description: '',
    price: '',
    coverImage: null,        // Stores the File object
    coverImagePreview: null, // Stores the temporary URL for display
    
    // Step 2
    bedrooms: '',
    bathrooms: '',
    area: '',
    amenities: [],
    
    // Step 3
    address: '',
    city: '',
    state: '',
    zip: '',
    
    // Step 4
    deedFile: null,
    deedFileName: '',
    idFile: null,
    idFileName: ''
  });

  const steps = [
    { id: 1, label: 'Basic Details', icon: Home },
    { id: 2, label: 'Features & Amenities', icon: List },
    { id: 3, label: 'Location & Address', icon: MapPin },
    { id: 4, label: 'Document Upload', icon: FileText },
    { id: 5, label: 'Review & Publish', icon: Eye },
  ];

  // --- Handlers ---

  // Handle Text/Select Inputs
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle File Uploads (Images & Docs)
  const handleFileChange = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      if (field === 'coverImage') {
        // Create preview URL for images
        const previewUrl = URL.createObjectURL(file);
        setFormData(prev => ({ 
          ...prev, 
          [field]: file, 
          [`${field}Preview`]: previewUrl 
        }));
      } else {
        // For documents, just store file and name
        setFormData(prev => ({ 
          ...prev, 
          [field]: file, 
          [`${field}Name`]: file.name 
        }));
      }
    }
  };

  // Remove File
  const removeFile = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: null,
      [`${field}Preview`]: null,
      [`${field}Name`]: ''
    }));
  };

  // Toggle Amenities
  const toggleAmenity = (amenity) => {
    setFormData(prev => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists 
          ? prev.amenities.filter(a => a !== amenity)
          : [...prev.amenities, amenity]
      };
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.log('Final Submission Data:', formData);
      alert('Property Published! Check console for data object.');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progressWidth = (currentStep / steps.length) * 100;

  // --- SUB-COMPONENTS ---

  const Step1BasicDetails = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Type</label>
          <div className="relative">
            <select 
              value={formData.propertyType}
              onChange={(e) => handleChange('propertyType', e.target.value)}
              className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all"
            >
              <option value="">Select type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Price ($)</label>
          <input 
            type="number"
            value={formData.price}
            onChange={(e) => handleChange('price', e.target.value)}
            placeholder="e.g. 250000" 
            className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Title</label>
        <input 
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="e.g. Luxury Apartment in Downtown" 
          className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Description</label>
        <textarea 
          rows="4"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Describe your property..." 
          className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all resize-none"
        ></textarea>
      </div>

      {/* Image Upload Section */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Cover Image</label>
        
        {!formData.coverImagePreview ? (
          <label className="border-2 border-dashed border-gray-200 rounded-xl py-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#1787B1] transition-all cursor-pointer group">
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleFileChange('coverImage', e)} 
              className="hidden" 
            />
            <Upload className="text-gray-400 group-hover:text-[#1787B1] mb-2" size={24} />
            <p className="text-xs text-slate-500 group-hover:text-[#1787B1]">Click to upload cover image</p>
            <p className="text-[10px] text-slate-400 mt-1">PNG, JPG up to 5MB</p>
          </label>
        ) : (
          <div className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-200 group">
            <img 
              src={formData.coverImagePreview} 
              alt="Cover Preview" 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => removeFile('coverImage')}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-red-50 text-slate-600 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              {formData.coverImage.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const Step2Features = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
            <Bed size={14} /> Bedrooms
          </label>
          <div className="relative">
             <select 
               value={formData.bedrooms}
               onChange={(e) => handleChange('bedrooms', e.target.value)}
               className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 appearance-none focus:border-[#1787B1] focus:outline-none"
             >
               <option value="">Select</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4+">4+</option>
             </select>
             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
            <Bath size={14} /> Bathrooms
          </label>
          <div className="relative">
             <select 
                value={formData.bathrooms}
                onChange={(e) => handleChange('bathrooms', e.target.value)}
                className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 appearance-none focus:border-[#1787B1] focus:outline-none"
             >
               <option value="">Select</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3+">3+</option>
             </select>
             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
            <Maximize size={14} /> Area (Sq Ft)
          </label>
          <input 
            type="number"
            value={formData.area}
            onChange={(e) => handleChange('area', e.target.value)}
            placeholder="e.g. 1200"
            className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:border-[#1787B1] focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'wifi', label: 'Free WiFi', icon: Wifi },
            { id: 'parking', label: 'Parking', icon: Car },
            { id: 'ac', label: 'Air Conditioning', icon: Car },
            { id: 'security', label: '24/7 Security', icon: ShieldCheck },
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => toggleAmenity(item.id)}
              className={`
                flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all select-none
                ${formData.amenities.includes(item.id) 
                  ? 'border-[#1787B1] bg-blue-50 text-[#1787B1]' 
                  : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-300'}
              `}
            >
              <item.icon size={20} className="mb-2" />
              <span className="text-xs font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Step3Location = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Street Address</label>
        <input 
          type="text"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="e.g. 123 Main Street" 
          className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#1787B1]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">City</label>
          <input 
            type="text"
            value={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
            placeholder="Los Angeles" 
            className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#1787B1]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">State/Province</label>
          <input 
            type="text"
            value={formData.state}
            onChange={(e) => handleChange('state', e.target.value)}
            placeholder="California" 
            className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#1787B1]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Zip Code</label>
          <input 
            type="text"
            value={formData.zip}
            onChange={(e) => handleChange('zip', e.target.value)}
            placeholder="90001" 
            className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-[#1787B1]"
          />
        </div>
      </div>

      <div className="w-full h-48 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-gray-200">
        <MapPin size={32} className="mb-2 opacity-50" />
        <span className="text-sm font-medium">Map Preview will appear here</span>
      </div>
    </div>
  );

  const Step4Documents = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
        <p className="text-sm text-blue-700">
          Please upload legal documents to verify property ownership. All files are encrypted.
        </p>
      </div>

      {/* Deed Upload */}
      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Deed (Nota Simple)</label>
        
        {!formData.deedFile ? (
          <label className="border-2 border-dashed border-gray-200 rounded-xl py-10 px-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#1787B1] transition-all cursor-pointer group">
            <input 
              type="file" 
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange('deedFile', e)} 
              className="hidden" 
            />
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
              <Upload className="text-gray-400 group-hover:text-[#1787B1]" size={24} />
            </div>
            <p className="text-sm font-bold text-slate-700 group-hover:text-[#1787B1]">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400 mt-2">PDF up to 10MB</p>
          </label>
        ) : (
          <div className="flex items-center justify-between p-4 border border-blue-200 bg-blue-50 rounded-lg">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-500">
                 <FileText size={20} />
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-700">{formData.deedFileName}</p>
                 <p className="text-xs text-green-600 font-semibold">Upload Complete</p>
               </div>
             </div>
             <button 
                onClick={() => removeFile('deedFile')} 
                className="p-2 text-gray-400 hover:text-red-500"
             >
               <X size={18} />
             </button>
          </div>
        )}
      </div>

      {/* ID Upload */}
      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Owner ID / Passport</label>
        
        {!formData.idFile ? (
          <label className="border-2 border-dashed border-gray-200 rounded-xl py-6 px-6 flex flex-row items-center justify-center gap-4 text-center hover:bg-gray-50 hover:border-[#1787B1] transition-all cursor-pointer group">
             <input 
               type="file" 
               onChange={(e) => handleFileChange('idFile', e)} 
               className="hidden" 
             />
             <Upload className="text-gray-400 group-hover:text-[#1787B1]" size={20} />
             <span className="text-sm font-medium text-slate-600 group-hover:text-[#1787B1]">Upload ID Document</span>
          </label>
        ) : (
          <div className="flex items-center justify-between p-4 border border-blue-200 bg-blue-50 rounded-lg">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-500">
                 <ShieldCheck size={20} />
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-700">{formData.idFileName}</p>
                 <p className="text-xs text-green-600 font-semibold">Upload Complete</p>
               </div>
             </div>
             <button 
                onClick={() => removeFile('idFile')} 
                className="p-2 text-gray-400 hover:text-red-500"
             >
               <X size={18} />
             </button>
          </div>
        )}
      </div>
    </div>
  );

  const Step5Review = () => (
    <div className="animate-fade-in">
      <h3 className="text-slate-800 font-bold mb-6">Review your listing</h3>
      
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-6">
        
        {/* Cover Image & Basic Info */}
        <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-200">
          <div className="w-full md:w-32 h-32 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
             {formData.coverImagePreview ? (
               <img src={formData.coverImagePreview} alt="Cover" className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center text-gray-400">
                 <ImageIcon size={24} />
               </div>
             )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-700 text-lg">{formData.title || 'Untitled Property'}</h4>
              <span className="bg-[#1787B1] text-white text-xs px-2 py-1 rounded font-bold">{formData.propertyType || 'Type N/A'}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">{formData.description || 'No description provided.'}</p>
            <p className="text-xl font-bold text-[#1787B1]">${formData.price || '0'}</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-gray-200">
           <div>
             <span className="text-xs text-gray-400 uppercase font-bold block">Bedrooms</span>
             <span className="text-sm font-bold text-slate-700">{formData.bedrooms || '-'}</span>
           </div>
           <div>
             <span className="text-xs text-gray-400 uppercase font-bold block">Bathrooms</span>
             <span className="text-sm font-bold text-slate-700">{formData.bathrooms || '-'}</span>
           </div>
           <div>
             <span className="text-xs text-gray-400 uppercase font-bold block">Area</span>
             <span className="text-sm font-bold text-slate-700">{formData.area ? `${formData.area} sq ft` : '-'}</span>
           </div>
           <div>
             <span className="text-xs text-gray-400 uppercase font-bold block">Amenities</span>
             <span className="text-sm font-bold text-slate-700">{formData.amenities.length} Selected</span>
           </div>
        </div>

        {/* Location */}
        <div>
           <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Location</span>
           <div className="flex items-start gap-2 text-slate-700">
             <MapPin size={16} className="mt-0.5 text-[#1787B1]" />
             <span className="text-sm font-medium">
                {formData.address}, {formData.city}, {formData.state} {formData.zip}
                {(!formData.address && !formData.city) && "No address provided"}
             </span>
           </div>
        </div>
        
        {/* Documents Summary */}
        <div>
           <span className="text-xs text-gray-400 uppercase font-bold block mb-2">Documents Ready</span>
           <div className="flex gap-2">
              <span className={`text-xs px-2 py-1 rounded border ${formData.deedFile ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                {formData.deedFile ? 'Deed Uploaded' : 'Deed Missing'}
              </span>
              <span className={`text-xs px-2 py-1 rounded border ${formData.idFile ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                {formData.idFile ? 'ID Uploaded' : 'ID Missing'}
              </span>
           </div>
        </div>

      </div>
      
      <div className="flex items-center gap-2 mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-yellow-700 text-sm">
        <div className="min-w-[4px] h-4 bg-yellow-400 rounded-full"></div>
        <p>By clicking publish, you agree to our terms of service and property listing guidelines.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">List New Property</h1>

        {/* --- Navigation --- */}
        <div className="mb-10">
          <div className="w-full h-2 bg-gray-100 rounded-full mb-8 relative overflow-hidden">
            <div 
              className="h-full bg-[#1787B1] transition-all duration-500 ease-in-out"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          <div className="flex flex-wrap justify-between items-start px-2 md:px-10">
            {steps.map((step) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div key={step.id} className="flex flex-col items-center w-20 md:w-32">
                  <div 
                    className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 mb-3
                      ${isActive 
                        ? 'border-[#1787B1] text-[#1787B1] bg-blue-50' 
                        : isCompleted
                          ? 'border-[#1787B1] text-[#1787B1] bg-white'
                          : 'border-gray-200 text-gray-400 bg-white'
                      }
                    `}
                  >
                    {isCompleted ? <CheckCircle2 size={20} /> : <step.icon size={20} strokeWidth={isActive ? 2 : 1.5} />}
                  </div>
                  <span className={`text-[10px] md:text-xs font-semibold text-center transition-colors duration-300 ${isActive ? 'text-[#1787B1]' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Form Body --- */}
        <div className="border border-gray-100 rounded-xl p-6 md:p-10 shadow-sm bg-white mt-4">
          <h2 className="text-lg font-bold text-[#1787B1] mb-8 flex items-center gap-2">
            Step {currentStep}: {steps[currentStep - 1].label}
          </h2>

          <div className="max-w-4xl min-h-[400px]">
            {currentStep === 1 && <Step1BasicDetails />}
            {currentStep === 2 && <Step2Features />}
            {currentStep === 3 && <Step3Location />}
            {currentStep === 4 && <Step4Documents />}
            {currentStep === 5 && <Step5Review />}
          </div>

          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-50">
            <button 
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-bold text-slate-600 transition-colors 
                ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 hover:text-slate-800'}
              `}
            >
              Back
            </button>

            <div className="flex gap-4">
              <button className="hidden md:block px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-bold text-slate-600 hover:bg-gray-50 hover:text-slate-800 transition-colors">
                Save Draft
              </button>
              <button 
                onClick={handleNext}
                className="px-8 py-2.5 rounded-lg bg-[#1787B1] text-white text-sm font-bold hover:bg-[#136f91] transition-all shadow-md hover:shadow-lg"
              >
                {currentStep === steps.length ? 'Publish Listing' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPropertyForm;