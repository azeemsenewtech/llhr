import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white p-4 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 border-b border-gray-50">
      
      {/* Left Section: Title & Greeting */}
      <div className="xl:flex hidden flex-col gap-1 text-left">
        <div className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold animate-pulse text-slate-800">
            Owner Dashboard
          </h1>
          <span className="text-xl md:text-2xl animate-pulse">👋</span>
        </div>
        <p className="text-sm text-slate-500 font-medium">
          Welcome back! Here's an overview of your properties and activities.
        </p>
      </div>

      {/* Right Section: Search & Profile */}
      {/* On mobile, this section stacks. On desktop, it aligns horizontally. */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="Search for anything.." 
            className="w-full py-2.5 pl-5 pr-10 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
          />
          <Search 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" 
            size={18} 
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end">
          {/* Avatar Image */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-pink-100 shrink-0">
            <img 
              src="/assets/image/profile.png" 
              alt="User Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* User Info */}
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 leading-tight">
              Easin Arafat
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Free Account
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;