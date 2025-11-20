import React from 'react';

// --- SVG Icons ---
const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9414 1.82324V20.0569" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4992 4.55859H8.66159C7.81531 4.55859 7.0037 4.89478 6.40529 5.49318C5.80688 6.09159 5.4707 6.9032 5.4707 7.74948C5.4707 8.59575 5.80688 9.40737 6.40529 10.0058C7.0037 10.6042 7.81531 10.9404 8.66159 10.9404H13.22C14.0663 10.9404 14.8779 11.2765 15.4763 11.8749C16.0747 12.4734 16.4109 13.285 16.4109 14.1312C16.4109 14.9775 16.0747 15.7891 15.4763 16.3875C14.8779 16.9859 14.0663 17.3221 13.22 17.3221H5.4707" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const AgentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5858 19.1454V17.322C14.5858 16.3548 14.2016 15.4273 13.5177 14.7434C12.8338 14.0595 11.9062 13.6753 10.9391 13.6753H5.46899C4.50182 13.6753 3.57426 14.0595 2.89037 14.7434C2.20647 15.4273 1.82227 16.3548 1.82227 17.322V19.1454" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5879 2.85205C15.3699 3.05478 16.0624 3.51144 16.5568 4.15034C17.0512 4.78925 17.3195 5.57423 17.3195 6.38208C17.3195 7.18993 17.0512 7.97491 16.5568 8.61382C16.0624 9.25272 15.3699 9.70938 14.5879 9.91211" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0573 19.1455V17.3222C20.0567 16.5142 19.7878 15.7292 19.2927 15.0906C18.7977 14.452 18.1046 13.9959 17.3223 13.7939" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.20532 10.0288C10.2193 10.0288 11.852 8.3961 11.852 6.38208C11.852 4.36805 10.2193 2.73535 8.20532 2.73535C6.19129 2.73535 4.55859 4.36805 4.55859 6.38208C4.55859 8.3961 6.19129 10.0288 8.20532 10.0288Z" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const HomeIcon = () => (
 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6752 19.1451V11.8516C13.6752 11.6098 13.5791 11.3779 13.4081 11.207C13.2372 11.036 13.0053 10.9399 12.7635 10.9399H9.11676C8.87497 10.9399 8.64308 11.036 8.4721 11.207C8.30113 11.3779 8.20508 11.6098 8.20508 11.8516V19.1451" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.73633 9.1167C2.73626 8.85147 2.79407 8.58941 2.90571 8.34881C3.01735 8.10821 3.18013 7.89487 3.38271 7.72365L9.76448 2.25448C10.0936 1.97634 10.5106 1.82373 10.9415 1.82373C11.3724 1.82373 11.7893 1.97634 12.1184 2.25448L18.5002 7.72365C18.7028 7.89487 18.8656 8.10821 18.9772 8.34881C19.0888 8.58941 19.1466 8.85147 19.1466 9.1167V17.3218C19.1466 17.8054 18.9545 18.2692 18.6125 18.6111C18.2706 18.9531 17.8068 19.1452 17.3232 19.1452H4.55969C4.0761 19.1452 3.61233 18.9531 3.27038 18.6111C2.92843 18.2692 2.73633 17.8054 2.73633 17.3218V9.1167Z" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5879 6.38184H20.058V11.8519" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0559 6.38184L12.3066 14.1311L7.74819 9.57272L1.82227 15.4986" stroke="#218AB6" stroke-width="1.82336" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

);

const SellerTools = () => {
  const toolsData = [
    {
      id: 1,
      icon: <DollarIcon />,
      title: "Tips for selling your home for top dollar",
      description: "Maximize your sale price with these expert-backed strategies.",
      readTime: "5 min read"
    },
    {
      id: 2,
      icon: <AgentIcon />,
      title: "Choosing the right agent",
      description: "What to ask, what to avoid, and how to know you've found the one.",
      readTime: "6 min read"
    },
    {
      id: 3,
      icon: <HomeIcon />,
      title: "Preparing your home to sell",
      description: "From small updates to major fixes—what truly adds value.",
      readTime: "7 min read"
    },
    {
      id: 4,
      icon: <ChartIcon />,
      title: "Best time to sell?",
      description: "Market trends and seasonal insights to help you time your move.",
      readTime: "5 min read"
    }
  ];

  return (
    // Main Background Section (Using the specific blue from the image)
    <section className="w-full relative mb-16 py-20 px-4 md:px-8 bg-[#1e81a1]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Seller tools to guide your journey
          </h2>
          <p className="text-blue-100 text-lg">
            Expert insights and practical advice to help you sell smarter
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolsData.map((tool) => (
            <div 
              key={tool.id} 
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top Content: Icon + Text */}
              <div className="flex items-start space-x-4 mb-6">
                {/* Icon Box */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#1e81a1] rounded-xl flex items-center justify-center">
                  {tool.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Bottom Content: Read Time + Link */}
              <div className="flex items-center justify-between mt-auto pt-2 pl-16">
                <span className="text-gray-400 text-sm font-medium">
                  {tool.readTime}
                </span>
                
                <a 
                  href="#" 
                  className="text-[#1e81a1] font-semibold text-sm flex items-center gap-1 hover:underline"
                >
                  Read article
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerTools;