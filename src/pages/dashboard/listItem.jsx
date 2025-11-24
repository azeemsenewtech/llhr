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
import React, { useState } from 'react';
import { Home, List, MapPin, FileText, Eye, Upload, ChevronDown, CheckCircle2 } from 'lucide-react';

const ListPropertyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Configuration for the steps
  const steps = [
    { id: 1, label: 'Basic Details', icon: Home },
    { id: 2, label: 'Features & Amenities', icon: List },
    { id: 3, label: 'Location & Address', icon: MapPin },
    { id: 4, label: 'Document Upload', icon: FileText },
    { id: 5, label: 'Review & Publish', icon: Eye },
  ];

  // Calculate progress percentage
  // If we are on step 1 of 5, the bar should be 20% full to cover the first tab area.
  const progressWidth = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepClick = (id) => {
    setCurrentStep(id);
  };

  return (
    <div className="min-h-screen rounded-xl bg-white p-4 md:p-10 font-sans text-slate-800">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header Title */}
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">List New Property</h1>

        {/* --- Navigation & Progress Section --- */}
        <div className="mb-10 ">
          
          {/* Progress Line (Positioned ABOVE the tabs) */}
          <div className="w-full h-2 bg-gray-100 rounded-full mb-8 relative overflow-hidden">
            <div 
              className="h-full bg-[#1787B1] transition-all duration-500 ease-in-out"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          {/* Icons / Tabs Row */}
          <div className="flex justify-between items-start px-2 md:px-10">
            {steps.map((step) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div 
                  key={step.id} 
                  onClick={() => handleStepClick(step.id)}
                  className="flex flex-col items-center group cursor-pointer w-24 md:w-32"
                >
                  {/* Icon Circle */}
                  <div 
                    className={`
                      w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 mb-3
                      ${isActive 
                        ? 'border-[#1787B1] text-[#1787B1] bg-blue-50' 
                        : isCompleted
                          ? 'border-[#1787B1] text-[#1787B1] bg-white'
                          : 'border-gray-200 text-gray-400 bg-white hover:border-gray-300'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <step.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                    )}
                  </div>
                  
                  {/* Label */}
                  <span 
                    className={`text-[10px] md:text-xs font-semibold text-center transition-colors duration-300
                      ${isActive ? 'text-[#1787B1]' : 'text-gray-400'}
                    `}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Form Container --- */}
        <div className="border border-gray-100 rounded-xl p-6 md:p-10 shadow-sm bg-white mt-4">
          
          {/* Section Header */}
          <h2 className="text-lg font-bold text-[#1787B1] mb-8 flex items-center gap-2">
            Step {currentStep}: {steps[currentStep - 1].label}
          </h2>

          <form className="space-y-8 max-w-4xl">
            
            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Type</label>
              <div className="relative">
                <select className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all cursor-pointer">
                  <option>Select property type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Property Title */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Title</label>
              <input 
                type="text" 
                placeholder="e.g. Luxury Apartment in Downtown" 
                className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Description</label>
              <textarea 
                rows="4"
                placeholder="Describe your property..." 
                className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-slate-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-[#1787B1] transition-all resize-none"
              ></textarea>
            </div>

            {/* Images Upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Images Upload</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl py-12 px-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#1787B1] transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  <Upload className="text-gray-400 group-hover:text-[#1787B1]" size={24} />
                </div>
                <p className="text-sm font-bold text-slate-700">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 10MB</p>
              </div>
            </div>

            {/* Nota Simple */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Nota Simple</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl py-12 px-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#1787B1] transition-all cursor-pointer group">
                 <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  <Upload className="text-gray-400 group-hover:text-[#1787B1]" size={24} />
                </div>
                <p className="text-sm font-bold text-slate-700">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400 mt-2">PDF up to 10MB</p>
              </div>
            </div>

          </form>

          {/* Footer Actions */}
          <div className="flex justify-end gap-4 mt-12 pt-6 border-t border-gray-50">
            <button className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-bold text-slate-600 hover:bg-gray-50 hover:text-slate-800 transition-colors">
              Save as Draft
            </button>
            <button 
              onClick={handleNext}
              className="px-8 py-2.5 rounded-lg bg-[#1787B1] text-white text-sm font-bold hover:bg-[#136f91] transition-all shadow-md hover:shadow-lg"
            >
              {currentStep === steps.length ? 'Publish' : 'Next'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListPropertyForm;