import React, { useState } from 'react';
import { Users, FileText, Send, ChevronDown, CheckCircle, ArrowLeft } from 'lucide-react';

const NewPropertyWizard = () => {
  // 1. State for Current Step
  const [currentStep, setCurrentStep] = useState(1);

  // 2. State for Form Data
  const [formData, setFormData] = useState({
    // Step 1
    contractType: '',
    property: '',
    landlordName: '',
    tenantName: '',
    tenantEmail: '',
    
    // Step 2: Dates & Money
    startDate: '',
    endDate: '',
    rentAmount: '',
    securityDeposit: '',
    paymentDueDate: '',
    lateFees: '',
    
    // Step 2: Utilities (Booleans)
    utilWater: false,
    utilElectricity: false,
    utilInternet: false,
    utilGas: false,
    utilHeating: false,
    utilCooling: false,

    // Step 2: Terms
    maintenanceResponsibility: '',
    petPolicy: '',
    renewalTerms: '',
    terminationClause: ''
  });

  // Handle Text/Select Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Checkbox Changes (For Utilities)
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  // Handle Navigation
  const handleNext = () => {
    // Basic validation for Step 1
    if (currentStep === 1 && !formData.contractType) {
      alert("Please select a contract type");
      return;
    }
    
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log("Form Submitted:", formData);
      alert("Contract Sent successfully!");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progressWidth = currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%';

  // --- Render Steps ---

  const renderStep1 = () => (
    <>
      <h2 className="text-[#1a8bb5] font-bold text-lg mb-6">Step 1: Select Type & Parties</h2>
      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Contract Type</label>
          <div className="relative">
            <select 
              name="contractType"
              value={formData.contractType}
              onChange={handleInputChange}
              className="w-full appearance-none border border-slate-200 rounded-md py-2.5 px-4 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#1a8bb5] focus:border-[#1a8bb5]"
            >
              <option value="">Select contract type</option>
              <option value="Residential Lease">Residential Lease</option>
              <option value="Commercial Lease">Commercial Lease</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Select Property</label>
          <div className="relative">
            <select 
              name="property"
              value={formData.property}
              onChange={handleInputChange}
              className="w-full appearance-none border border-slate-200 rounded-md py-2.5 px-4 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#1a8bb5] focus:border-[#1a8bb5]"
            >
              <option value="">Select property</option>
              <option value="Luxury Apartment Downtown">Luxury Apartment Downtown</option>
              <option value="Meadowbrook Villas">Meadowbrook Villas</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <hr className="border-gray-100 mb-8" />

      <div className="space-y-5">
        <h3 className="text-[#1a8bb5] font-bold text-lg mb-4">Parties</h3>
        <InputField label="Landlord Name" name="landlordName" value={formData.landlordName} onChange={handleInputChange} placeholder="Enter landlord name" />
        <InputField label="Tenant Name" name="tenantName" value={formData.tenantName} onChange={handleInputChange} placeholder="Enter tenant name" />
        <InputField label="Tenant Email" name="tenantEmail" value={formData.tenantEmail} onChange={handleInputChange} placeholder="tenant@email.com" type="email" />
      </div>
    </>
  );

  // --- UPDATED STEP 2 ---
  const renderStep2 = () => (
    <>
      <h2 className="text-[#1a8bb5] font-bold text-xl mb-8">Step 2: Define Terms</h2>

      <div className="space-y-6">
        {/* Row 1: Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Start Date" name="startDate" value={formData.startDate} onChange={handleInputChange} placeholder="Enter start date" />
          <InputField label="End Date" name="endDate" value={formData.endDate} onChange={handleInputChange} placeholder="Enter end date" />
        </div>

        {/* Row 2: Financials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Monthly Rent ($)" name="rentAmount" value={formData.rentAmount} onChange={handleInputChange} placeholder="2500" type="number" />
          <InputField label="Security Deposit ($)" name="securityDeposit" value={formData.securityDeposit} onChange={handleInputChange} placeholder="2500" type="number" />
        </div>

        {/* Row 3: Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField 
            label="Payment Due Date" 
            name="paymentDueDate"
            value={formData.paymentDueDate}
            onChange={handleInputChange}
            placeholder="Select day of month"
            options={["1st of month", "5th of month", "15th of month"]}
          />
          <InputField label="Late Fees ($)" name="lateFees" value={formData.lateFees} onChange={handleInputChange} placeholder="50" type="number" />
        </div>

        {/* Utilities */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-gray-700 mb-4">Utilities Included</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
            <CheckboxField label="Water" name="utilWater" checked={formData.utilWater} onChange={handleCheckboxChange} />
            <CheckboxField label="Electricity" name="utilElectricity" checked={formData.utilElectricity} onChange={handleCheckboxChange} />
            <CheckboxField label="Internet" name="utilInternet" checked={formData.utilInternet} onChange={handleCheckboxChange} />
            <CheckboxField label="Gas" name="utilGas" checked={formData.utilGas} onChange={handleCheckboxChange} />
            <CheckboxField label="Heating" name="utilHeating" checked={formData.utilHeating} onChange={handleCheckboxChange} />
            <CheckboxField label="Cooling" name="utilCooling" checked={formData.utilCooling} onChange={handleCheckboxChange} />
          </div>
        </div>

        <hr className="border-gray-100 my-4" />

        <TextAreaField label="Maintenance Responsibility" name="maintenanceResponsibility" value={formData.maintenanceResponsibility} onChange={handleInputChange} placeholder="Describe maintenance responsibilities..." />
        
        <SelectField 
          label="Pet Policy" 
          name="petPolicy"
          value={formData.petPolicy}
          onChange={handleInputChange}
          placeholder="Select pet policy"
          options={["Pets Allowed", "No Pets Allowed", "Cats Only", "Dogs Only"]}
        />

        <TextAreaField label="Renewal Terms" name="renewalTerms" value={formData.renewalTerms} onChange={handleInputChange} placeholder="Describe renewal terms.." />
        
        <TextAreaField label="Termination Clause" name="terminationClause" value={formData.terminationClause} onChange={handleInputChange} placeholder="Describe termination conditions.." />
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h2 className="text-[#1a8bb5] font-bold text-lg mb-6">Step 3: Review & Send</h2>
      <div className="bg-slate-50 p-6 rounded-lg space-y-4 border border-slate-100">
        <h4 className="font-bold text-gray-800">Summary</h4>
        <div className="grid grid-cols-2 gap-y-4 text-sm">
           <span className="text-gray-500">Property:</span>
           <span className="font-medium text-gray-700">{formData.property || '-'}</span>
           <span className="text-gray-500">Tenant:</span>
           <span className="font-medium text-gray-700">{formData.tenantName || '-'}</span>
           <span className="text-gray-500">Rent:</span>
           <span className="font-medium text-gray-700">${formData.rentAmount || '0'} / month</span>
           <span className="text-gray-500">Security Deposit:</span>
           <span className="font-medium text-gray-700">${formData.securityDeposit || '0'}</span>
           <span className="text-gray-500">Pet Policy:</span>
           <span className="font-medium text-gray-700">{formData.petPolicy || '-'}</span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold text-slate-800 mb-6">List New Property</h1>

        {/* Navigation Bar */}
        <div className="mb-10">
          <div className="h-2 w-full bg-gray-200 rounded-full mb-6 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#1a8bb5] transition-all duration-300 ease-in-out" 
              style={{ width: progressWidth }}
            ></div>
          </div>

          <div className="flex justify-between px-4 sm:px-16">
            <StepIcon stepNumber={1} currentStep={currentStep} label="Select Type & Parties" Icon={Users} />
            <StepIcon stepNumber={2} currentStep={currentStep} label="Define Terms" Icon={FileText} />
            <StepIcon stepNumber={3} currentStep={currentStep} label="Review & Send" Icon={Send} />
          </div>
        </div>

        {/* Main Card Form */}
        <div className="border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm bg-white">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="min-h-[300px] mb-8">
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-50">
              <div className="flex-1">
                {currentStep > 1 && (
                  <button type="button" onClick={handleBack} className="flex items-center text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                <button type="button" className="px-6 py-2.5 rounded-md border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
                  Save as Draft
                </button>
                <button type="button" onClick={handleNext} className="px-8 py-2.5 rounded-md bg-[#1a8bb5] hover:bg-[#167aa0] text-white font-semibold text-sm transition-colors shadow-sm flex items-center gap-2">
                  {currentStep === 3 ? <>Send Contract <Send className="w-3 h-3" /></> : 'Next'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* --- Reusable Sub-Components --- */

const StepIcon = ({ stepNumber, currentStep, label, Icon }) => {
  const isActive = currentStep === stepNumber;
  const isCompleted = currentStep > stepNumber;
  let borderColor = isActive ? 'border-[#1a8bb5]' : isCompleted ? 'border-[#1a8bb5] bg-[#1a8bb5]' : 'border-gray-300';
  let iconColor = isActive ? 'text-[#1a8bb5]' : isCompleted ? 'text-white' : 'text-gray-400';
  let textColor = isActive || isCompleted ? 'text-[#1a8bb5]' : 'text-gray-400';

  return (
    <div className="flex flex-col items-center cursor-default">
      <div className={`w-10 h-10 rounded-full border-2 ${borderColor} flex items-center justify-center ${iconColor} bg-white mb-2 transition-colors duration-300`}>
        {isCompleted ? <CheckCircle className="w-5 h-5 text-white" /> : <Icon className="w-5 h-5" />}
      </div>
      <span className={`text-sm font-bold ${textColor} transition-colors duration-300`}>{label}</span>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-700">{label}</label>
    <input 
      type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} 
      className="w-full border border-slate-200 rounded-md py-2.5 px-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a8bb5] focus:border-[#1a8bb5] bg-[#fdfdfd]"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, placeholder, options = [] }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-700">{label}</label>
    <div className="relative">
      <select 
        name={name} value={value} onChange={onChange}
        className="w-full appearance-none border border-slate-200 rounded-md py-2.5 px-4 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#1a8bb5] focus:border-[#1a8bb5]"
      >
        <option value="">{placeholder}</option>
        {options.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-700">{label}</label>
    <textarea 
      name={name} value={value} onChange={onChange} rows={3} placeholder={placeholder}
      className="w-full border border-slate-200 rounded-md p-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a8bb5] focus:border-[#1a8bb5] resize-none bg-[#fdfdfd]"
    ></textarea>
  </div>
);

const CheckboxField = ({ label, name, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input 
        type="checkbox" name={name} checked={checked} onChange={onChange}
        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-200 bg-gray-50 transition-all checked:border-[#1a8bb5] checked:bg-[#1a8bb5]" 
      />
      <svg className="pointer-events-none absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-sm text-gray-600 group-hover:text-gray-900">{label}</span>
  </label>
);

export default NewPropertyWizard;