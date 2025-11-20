import React from 'react';

// Simple SVG Icons components to keep the file dependency-free
const FileIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const BuildingIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

const ChartIcon = ({ className }) => (
 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 22.6667V12" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.334 22.6665V6.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.666 22.6665V18.6665" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const SellingPaths = () => {
  // Data Array
  const cardsData = [
    {
      id: 1,
      icon: <FileIcon className="w-8 h-8" />,
      title: "Sell Directly",
      subtitle: "For Property Owners",
      description: "Sell directly with LLHAR using our AI-powered document agent and property captador, or add your property information manually. You're in control of your selling journey.",
      features: [
        "AI document processing",
        "Smart property captador",
        "Manual listing option",
        "Direct owner control"
      ],
      buttonText: "Start Selling",
      theme: "light" // White background
    },
    {
      id: 2,
      icon: <BuildingIcon className="w-8 h-8" />,
      title: "Agency Partnership",
      subtitle: "For Real Estate Agencies",
      description: "If you are an agency, sell and manage your properties with LLHAR. Get access to our complete platform to list, market, and manage all your properties efficiently.",
      features: [
        "Complete property management suite",
        "Marketing and listing tools",
        "Client relationship management",
        "Advanced reporting analytics"
      ],
      buttonText: "Partner with LLHAR",
      theme: "dark" // Blue background (Featured)
    },
    {
      id: 3,
      icon: <ChartIcon className="w-8 h-8" />,
      title: "Property Management",
      subtitle: "For Rental Portfolio Owners",
      description: "Manage your properties with us. Upload your already rented properties to access powerful indicators & KPIs. Track performance, monitor revenue, and optimize your rental portfolio.",
      features: [
        "Comprehensive KPI dashboard",
        "Revenue tracking and analytics",
        "Portfolio performance metrics",
        "Custom reporting tools"
      ],
      buttonText: "Manage Properties",
      theme: "light" // White background
    }
  ];

  return (
    <div className="py-16 px-4 relative mb-16 md:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-[#2c8cb5] font-medium text-[18px] font-poppins mb-3">
            Selling ~Paths
          </h3>
          <h2 className="text-[2.5rem] poppins font-bold text-slate-800 max-w-2xl mx-auto leading-tight">
            Compare all your home-selling paths
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => {
            const isDark = card.theme === 'dark';

            return (
              <div 
                key={card.id}
                className={`
                  relative p-8 rounded-2xl flex flex-col h-full transition-all duration-300
                  ${isDark 
                    ? 'bg-[#2185a8] text-white shadow-xl z-10' 
                    : 'bg-white text-slate-600 border border-blue-100 shadow-lg hover:shadow-xl'}
                `}
              >
                {/* Icon Circle */}
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center mb-6
                  ${isDark ? 'bg-white text-[#2185a8]' : 'bg-[#2185a8] text-white'}
                `}>
                  {card.icon}
                </div>

                {/* Titles */}
                <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm font-semibold mb-6 ${isDark ? 'text-blue-100' : 'text-[#2185a8]'}`}>
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-blue-50' : 'text-gray-500'}`}>
                  {card.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-10 flex-grow">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? 'bg-blue-200' : 'bg-blue-400'}`}></span>
                      <span className={isDark ? 'text-blue-50' : 'text-gray-500'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className={`
                  w-full py-3 rounded-lg font-semibold transition-colors text-center
                  ${isDark 
                    ? 'bg-white text-[#2185a8] hover:bg-gray-100' 
                    : 'bg-[#2185a8] text-white hover:bg-[#1a6b88]'}
                `}>
                  {card.buttonText}
                </button>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SellingPaths;