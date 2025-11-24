// // import { useState } from "react";

// // const faqsLeft = [
// //   {
// //     question: "Can I use LIHAR in multiple countries?",
// //     answer:
// //       "Yes, LIHAR currently operates in key countries with support for local currencies, languages, and regulations. Check our coverage map to see if we serve your location.",
// //   },
// //   {
// //     question: "How is my data protected?",
// //     answer:
// //       "We encrypt all sensitive data using bank-level security and follow regional compliance frameworks like GDPR and SOC 2.",
// //   },
// //   {
// //     question: "What payment methods do you support?",
// //     answer:
// //       "We support credit cards, bank transfers, and digital wallets in supported countries.",
// //   },
// //   {
// //     question: "How is LIHARScore calculated?",
// //     answer:
// //       "The score combines identity verification, financial health, and rental history using AI risk models.",
// //   },
// //   {
// //     question: "How long does verification take?",
// //     answer:
// //       "Basic checks complete in minutes; deeper document reviews may take up to 24 hours.",
// //   },
// //   {
// //     question: "Are there any hidden fees?",
// //     answer:
// //       "No. All fees are disclosed upfront and depend on the services you select.",
// //   },
// //   {
// //     question: "What happens if a tenant or owner fails verification?",
// //     answer:
// //       "We notify both parties, provide guidance on resolving issues, and can rerun checks after corrections.",
// //   },
// // ];

// // const QSection = () => {
// //   const [openIndex, setOpenIndex] = useState(0);

// //   return (
// //     <section className="bg-white py-16">
// //       <div className="mx-auto max-w-6xl px-6 space-y-8">
// //         <div className="text-start space-y-3">
// //           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
// //             FAQs
// //           </p>
// //           <h2 className="mt-2 text-[40px] font-semibold text-slate-900">
// //             Frequently Asked Question’s!
// //           </h2>
// //           <p className="mt-3 text-sm text-slate-500">
// //             Learn how LIHARScore™ makes renting transparent and secure.
// //           </p>
// //         </div>

// //         {/* <div className="flex    flex-col gap-4 ">
// //           {faqsLeft.map((item, index) => {
// //               const isOpen = openIndex === index;
// //               return (
// //                 <article
// //                   key={item.question}
// //                 className={`flex cursor-pointer flex-col rounded-[18px] border px-6 py-5 text-base transition ${
// //                     isOpen
// //                       ? "border-sky-500 bg-sky-500 text-white"
// //                       : "border-slate-100 bg-white text-slate-800 hover:border-sky-200"
// //                   }`}
// //                   onClick={() =>
// //                     setOpenIndex((current) => (current === index ? -1 : index))
// //                   }
// //                 >
// //                   <div className="flex items-start justify-between gap-4">
// //                     <p className="font-semibold leading-snug">{item.question}</p>
// //                     <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full  text-sm">
// //                       {isOpen ? "−" : "+"}
// //                     </span>
// //                   </div>
// //                   {isOpen && (
// //                     <p className="mt-3 text-sm leading-relaxed opacity-90">
// //                       {item.answer}
// //                     </p>
// //                   )}
// //                 </article>
// //               );
// //             })}
// //         </div> */}
// //         <div className="flex flex-wrap gap-4">
// //   {faqsLeft.map((item, index) => {
// //     const isOpen = openIndex === index;
// //     return (
// //       <article
// //         key={item.question}
// //         className={`w-full md:w-[48%] flex cursor-pointer flex-col rounded-[18px] border px-6 py-5 text-base transition ${
// //           isOpen
// //             ? "border-sky-500 bg-sky-500 text-white"
// //             : "border-slate-100 bg-white text-slate-800 hover:border-sky-200"
// //         }`}
// //         onClick={() =>
// //           setOpenIndex((current) => (current === index ? -1 : index))
// //         }
// //       >
// //         <div className="flex items-start justify-between gap-4">
// //           <p className="font-semibold leading-snug">{item.question}</p>
// //           <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm">
// //             {isOpen ? "−" : "+"}
// //           </span>
// //         </div>
// //         {isOpen && (
// //           <p className="mt-3 text-sm leading-relaxed opacity-90">
// //             {item.answer}
// //           </p>
// //         )}
// //       </article>
// //     );
// //   })}
// // </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default QSection;
// import { useState } from "react";

// const faqsLeft = [
//   {
//     question: "Can I use LIHAR in multiple countries?",
//     answer:
//       "Yes, LIHAR currently operates in key countries with support for local currencies, languages, and regulations. Check our coverage map to see if we serve your location.",
//   },
//   {
//     question: "How is my data protected?",
//     answer:
//       "We encrypt all sensitive data using bank-level security and follow regional compliance frameworks like GDPR and SOC 2.",
//   },
//   {
//     question: "What payment methods do you support?",
//     answer:
//       "We support credit cards, bank transfers, and digital wallets in supported countries.",
//   },
//   {
//     question: "How is LIHARScore calculated?",
//     answer:
//       "The score combines identity verification, financial health, and rental history using AI risk models.",
//   },
//   {
//     question: "How long does verification take?",
//     answer:
//       "Basic checks complete in minutes; deeper document reviews may take up to 24 hours.",
//   },
//   {
//     question: "Are there any hidden fees?",
//     answer:
//       "No. All fees are disclosed upfront and depend on the services you select.",
//   },
//   {
//     question: "What happens if a tenant or owner fails verification?",
//     answer:
//       "We notify both parties, provide guidance on resolving issues, and can rerun checks after corrections.",
//   },
// ];

// const QSection = () => {
//   // FIX ✔ No item is open at the start
//   const [openIndex, setOpenIndex] = useState(-1);

//   return (
//     <section className="bg-white py-16">
//       <div className="mx-auto max-w-6xl px-6 space-y-8">
        
//         <div className="text-start space-y-3">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
//             FAQs
//           </p>
//           <h2 className="mt-2 text-[40px] font-semibold text-slate-900">
//             Frequently Asked Question’s!
//           </h2>
//           <p className="mt-3 text-sm text-slate-500">
//             Learn how LIHARScore™ makes renting transparent and secure.
//           </p>
//         </div>

//         {/* Two-column layout WITHOUT grid */}
//       <div className="flex flex-wrap items-start gap-4">
//   {faqsLeft.map((item, index) => {
//     const isOpen = openIndex === index;
//     return (
//       <article
//         key={item.question}
//         className={`w-full md:w-[48%] flex cursor-pointer flex-col rounded-[18px] border px-6 py-5 text-base transition ${
//           isOpen
//             ? "border-sky-500 bg-sky-500 text-white"
//             : "border-slate-100 bg-white text-slate-800 hover:border-sky-200"
//         }`}
//         onClick={() =>
//           setOpenIndex((current) => (current === index ? -1 : index))
//         }
//       >
//         <div className="flex items-start justify-between gap-4">
//           <p className="font-semibold leading-snug">{item.question}</p>
//           <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm">
//             {isOpen ? "−" : "+"}
//           </span>
//         </div>

//         {isOpen && (
//           <p className="mt-3 text-sm leading-relaxed opacity-90">
//             {item.answer}
//           </p>
//         )}
//       </article>
//     );
//   })}
// </div>

//       </div>
//     </section>
//   );
// };

// export default QSection;

import React, { useState } from 'react';

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
            <div className="flex flex-col gap-4">
              {leftColumnData.map((item) => (
                <FAQItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column: Remaining 4 FAQs */}
          {/* Added top padding on desktop to align with the FAQ items on the left (skipping the header height) */}
          <div className="flex flex-col gap-4 justify-end">
            {rightColumnData.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;