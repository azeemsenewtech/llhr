import React from 'react';
import herobg from '/public/assets/image/herobg.png';


 // import image

const HeroSection = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${herobg})` }}
      className="relative w-full h-[600px] md:h-[700px] bg-slate-900 overflow-hidden bg-cover bg-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-[28px] md:text-[48px] font-bold text-white leading-tight mb-6 drop-shadow-md">
          Sell your home with clarity <br className="hidden md:block" /> and confidence
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
          Get personalized options and expert support for every step of your home-selling journey...
        </p>
        <div className="bg-white p-2 rounded-lg shadow-lg max-w-2xl flex items-center">
          <input 
            type="text" 
            placeholder="Search here" 
            className="flex-grow  px-4 py-3 text-gray-700 placeholder-gray-500 outline-none bg-transparent text-base"
          />
           <button className="bg-[#2c8cb5] md:flex hidden   hover:bg-[#257a9e] transition-colors text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 whitespace-nowrap">
            Explore your selling options
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
         
        </div>
         <button className="bg-[#2c8cb5] flex mt-4 md:hidden   hover:bg-[#257a9e] transition-colors text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 whitespace-nowrap">
            Explore your selling options
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
      </div>

      {/* Bottom Blue Border */}
      <div className="absolute bottom-0 w-full h-2 bg-[#2c8cb5] z-20"></div>
    </div>
  );
};

export default HeroSection;
