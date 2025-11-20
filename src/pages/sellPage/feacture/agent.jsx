import React from 'react';

// --- SVG Icons ---

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#2c8cb5]">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const BagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#2c8cb5]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

const RibbonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#2c8cb5]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const FeaturedAgents = () => {
  // Data Array - duplicating the agent as per the image design
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson Allyeha",
      title: "Senior Real Estate Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: "5 (234)",
      yearsExperience: "15 years",
      specialty: "Luxury Homes",
      stats: {
        sales: "127",
        avgPrice: "$850K",
        maxPrice: "$850K" // Image had Avg. Price listed twice, adjusted for logical labels
      }
    },
    {
      id: 2,
      name: "Sarah Johnson Allyeha",
      title: "Senior Real Estate Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: "5 (234)",
      yearsExperience: "15 years",
      specialty: "Luxury Homes",
      stats: {
        sales: "127",
        avgPrice: "$850K",
        maxPrice: "$850K"
      }
    },
    {
      id: 3,
      name: "Sarah Johnson Allyeha",
      title: "Senior Real Estate Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: "5 (234)",
      yearsExperience: "15 years",
      specialty: "Luxury Homes",
      stats: {
        sales: "127",
        avgPrice: "$850K",
        maxPrice: "$850K"
      }
    }
  ];

  return (
    <section className="py-16 relative  px-4 bg-[#2185a8] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-[40px] font-poppins font-bold mb-3">
            Meet our featured agents
          </h2>
          <p className="text-blue-100 text-lg font-light">
            Connect with award-winning professionals in your area
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div 
              key={agent.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              
              {/* Image Section */}
              <div className="relative h-64 w-full bg-orange-100">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover object-top mix-blend-multiply opacity-90"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <StarIcon />
                  <span>{agent.rating}</span>
                </div>

                {/* Carousel Dots (Visual Only) */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
                  <div className="w-1.5 h-1.5 bg-[#2c8cb5] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Title & Name */}
                <div className="mb-4">
                  <p className="text-[10px] uppercase font-bold text-[#2c8cb5] mb-1 tracking-wide">
                    {agent.title}
                  </p>
                  <h3 className="text-xl font-bold text-slate-800">
                    {agent.name}
                  </h3>
                </div>

                {/* Experience Tags */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <BagIcon />
                    <span>{agent.yearsExperience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RibbonIcon />
                    <span>{agent.specialty}</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <div>
                    <p className="text-[#2c8cb5] font-bold text-lg">{agent.stats.sales}</p>
                    <p className="text-xs text-gray-500">Sales</p>
                  </div>
                  <div>
                    <p className="text-[#2c8cb5] font-bold text-lg">{agent.stats.avgPrice}</p>
                    <p className="text-xs text-gray-500">Avg. Price</p>
                  </div>
                  <div>
                    <p className="text-[#2c8cb5] font-bold text-lg">{agent.stats.maxPrice}</p>
                    <p className="text-xs text-gray-500">Avg. Price</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-3">
                  {/* Contact Button */}
                  <button className="flex-1 bg-[#2c8cb5] hover:bg-[#237699] text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <ChatIcon />
                    Contact
                  </button>
                  
                  {/* Phone Button */}
                  <button className="w-12 border border-gray-200 hover:bg-gray-50 rounded-lg flex items-center justify-center transition-colors">
                    <PhoneIcon />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;