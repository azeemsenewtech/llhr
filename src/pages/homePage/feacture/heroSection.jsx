import { useState } from "react";
import { Arrow, LocationIcon } from "../../../assets/icon";

const HeroSection = () => {
  const tabs = ["buy", "rent", "sell"];
  const [activeTab, setActiveTab] = useState("buy"); // default active tab

  return (
    <div
      className="w-full  bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('src/assets/image/herobg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative w-full flex flex-col lg:flex-row items-start justify-between md:px-10 text-white">
        
        {/* Left Section */}
        <div className="flex flex-col max-w-xl p-6">
          <div className="border bg-blur-2 p-3 border-gray-300/40 rounded-[25px] w-fit">
            <p className="text-sm">AI-Powered Real Estate Platform</p>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-poppins font-bold mt-4 leading-tight">
            Rent. Buy. Sell. Smarter.
          </h1>

          <p className="mt-2 opacity-90">
            AI-powered real estate made effortless. Connect with verified owners.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-primary font-poppins py-3 px-8 rounded-md">
              Get Started
            </button>

            <button className="border-2 font-poppins py-3 px-8 rounded-md">
              Explore Marketplace
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex p-6 lg:p-16 items-center justify-center">
          <div className="h-[300px] flex flex-col items-start rounded-[25px] w-full md:w-[500px] bg-white p-6">

            {/* Tabs */}
            <div className="flex items-center justify-center gap-4 bg-[#F9FAFB] rounded-xl p-2 ">
              {tabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`
                    px-6 py-2 font-semibold rounded-[15px] transition-all duration-200
                    ${activeTab === item
                      ? "bg-white text-primary shadow-md"
                      : "text-[#6C757D] hover:bg-gray-200"
                    }
                  `}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search properties, locations..."
              className="w-full px-4 py-3 bg-[#F9FAFB] rounded-[16px] mt-4 focus:outline-none"
            />

            {/* Search Button */}
            <button className="bg-primary text-white w-full mt-4 py-3 rounded-[16px] font-semibold">
              Search
            </button>

            {/* LLHAR Score */}
            <span className="mt-2 flex items-center gap-2 cursor-pointer">
              <LocationIcon className="text-primary" />
              <p className="text-primary text-[16px]">Get your LLHAR Score</p>
              <Arrow className="ml-2" />
            </span>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
