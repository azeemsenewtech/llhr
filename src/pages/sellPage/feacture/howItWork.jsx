import React from 'react';

// --- SVG Icons ---
const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 16.5l2.25 2.25L15 15" />
  </svg>
);

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Get your home value",
      description: "Receive an accurate home valuation based on recent sales in your area",
      icon: <DollarIcon />
    },
    {
      id: "02",
      title: "Choose your agent",
      description: "Connect with top-rated local agents who know your market",
      icon: <UserGroupIcon />
    },
    {
      id: "03",
      title: "Prepare & list",
      description: "Professional photos and expert staging to showcase your home",
      icon: <CameraIcon />
    },
    {
      id: "04",
      title: "Close the deal",
      description: "Expert negotiation and smooth transaction to closing",
      icon: <DocumentIcon />
    }
  ];

  return (
    <section className="py-20 px-4  bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#2c8cb5] font-bold text-sm uppercase tracking-widest mb-2">
            Simple Process
          </h4>
          <h2 className="text-4xl font-bold text-slate-900">
            How it works
          </h2>
        </div>

        {/* Connecting Line (Visible on Large Screens) */}
        {/* This div sits behind the cards (z-0) to create the connecting line effect */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Top Row: Number and Icon */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-6xl font-light text-slate-100 leading-none">
                  {step.id}
                </span>
                <div className="w-12 h-12 bg-[#2185a8] rounded-lg flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;