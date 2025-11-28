

import React, { useState } from 'react';
import { motion } from "framer-motion";
// --- SVG Icons ---
const PlusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const FAQSection = () => {
  // State to track which FAQ is open. 
  // Setting 0 as default so the first item appears open like in the screenshot.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Data split into two columns to match the layout
  const leftColumnData = [
    {
      id: 0, // Unique Global Index
      question: "Can I use LLHAR in multiple Countries?",
      answer: "Yes, LLHAR currently operates in 15+ countries with support for local currencies, languages, and regulations. Check our coverage map to see if we serve your location."
    },
    {
      id: 1,
      question: "How is my data protected?",
      answer: "We use industry-standard encryption and strict data privacy protocols to ensure your personal and financial information remains secure."
    },
    {
      id: 2,
      question: "What payment methods do you support?",
      answer: "We support all major credit cards, bank transfers, and select cryptocurrency options depending on your region."
    }
  ];

  const rightColumnData = [
    {
      id: 3,
      question: "How is LLHARScore calculated?",
      answer: "LLHARScore is calculated using AI-driven analysis of rental history, financial reliability, and verified user feedback."
    },
    {
      id: 4,
      question: "How long does verification take?",
      answer: "Verification typically takes between 24 to 72 hours, depending on the complexity of the documents provided."
    },
    {
      id: 5,
      question: "Are there any hidden fees?",
      answer: "No, transparency is our core value. All fees are clearly outlined before you confirm any transaction."
    },
    {
      id: 6,
      question: "What happens if a tenant or owner fails verification?",
      answer: "If verification fails, our support team will reach out with specific reasons and steps to resolve the issue or update your documents."
    }
  ];

  // Reusable FAQ Item Component
  const FAQItem = ({ item }) => {
    const isOpen = openIndex === item.id;

    return (
      <div 
        onClick={() => toggleFAQ(item.id)}
        className={`
          rounded-xl border cursor-pointer transition-all duration-300 overflow-hidden
          ${isOpen 
            ? 'bg-[#2185a8] border-[#2185a8] text-white shadow-lg' 
            : 'bg-white border-blue-100 text-slate-700 hover:border-blue-300'}
        `}
      >
        <div className="p-5 flex justify-between items-center">
          <h3 className={`font-bold text-base md:text-lg ${isOpen ? 'text-white' : 'text-slate-700'}`}>
            {item.question}
          </h3>
          <div className="flex-shrink-0 ml-4">
            {isOpen ? (
              <MinusIcon className="w-5 h-5 text-white" />
            ) : (
              <PlusIcon className="w-5 h-5 text-[#2c8cb5]" />
            )}
          </div>
        </div>

        {/* Animated Expand/Collapse Content */}
        <div 
          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="px-5 pb-5 text-sm leading-relaxed opacity-90 font-light">
            {item.answer}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Header + First 3 FAQs */}
          <div className="flex flex-col gap-6">
            
            {/* Header Content */}
            <div className="mb-4">
              <h4 className="text-[#2c8cb5] font-medium text-sm uppercase tracking-widest mb-2">
              
              </h4>
              <h2 className="text-4xl font-bold text-[#1a2b49] mb-4">
                Frequently Asked Question's!
              </h2>
              <p className="text-gray-500 text-sm">
                Learn how LLHARScore™ makes renting transparent and secure.
              </p>
            </div>

            {/* Left Column FAQs */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-4">
              {leftColumnData.map((item) => (
                <FAQItem key={item.id} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Right Column: Remaining 4 FAQs */}
          {/* Added top padding on desktop to align with the FAQ items on the left (skipping the header height) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
     
           className="flex flex-col gap-4 justify-end">
            {rightColumnData.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
