// import { useState } from "react";
// import { Arrow, LocationIcon } from "../../../assets/icon";
// // import Typed from "react-typed"; // fixed import

// const HeroSection = () => {
//   const tabs = ["buy", "rent", "sell"];
//   const [activeTab, setActiveTab] = useState("buy");

//   return (
//     <div
//       className="w-full h-full md:h-[600px] bg-cover bg-center relative flex items-center"
//       style={{ backgroundImage: "url('/assets/image/herobg.png')" }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative w-full flex flex-col lg:flex-row items-start justify-around md:px-10 text-white">
//         <div className="flex flex-col space-y-8 max-w-xl p-6">
//           <div className="border bg-blur-2 p-3 border-gray-300/40 rounded-[25px] w-fit">
//             <p className="text-sm"> 🏠 AI-Powered Real Estate Platform</p>
//           </div>

//           <h1 className="text-[42px] typing-loop md:text-[56px] font-poppins font-bold mt-4 leading-tight">

// Rent. Buy. Sell.

//           </h1>

//           <p className="mt-2 opacity-90">
//             AI-powered real estate made effortless. Connect with verified
//             owners.
//           </p>

//           <div className="mt-6 flex gap-4">
//             <button className="bg-primary font-poppins py-3 px-8 rounded-md">
//               Get Started
//             </button>
//             <button className="border-2 hover:bg-white hover:text-primary transition hover:border-primary font-poppins py-3 px-8 rounded-md">
//               Explore Marketplace
//             </button>
//           </div>
//         </div>

//         <div className="flex w-[50%] p-10 lg:p-10 items-center justify-center">
//           <div className="h-[300px] flex flex-col items-start rounded-[25px] w-full bg-white p-6">
//             <div className="flex items-center justify-center gap-4 bg-[#F9FAFB] rounded-xl p-2 ">
//               {tabs.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setActiveTab(item)}
//                   className={`px-6 py-2 font-semibold rounded-[15px] transition-all duration-200 ${
//                     activeTab === item
//                       ? "bg-white text-primary shadow-md"
//                       : "text-[#6C757D] "
//                   }`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>

//             <input
//               type="text"
//               placeholder="Search properties, locations..."
//               className="w-full px-5 py-4 bg-[#F9FAFB] rounded-[16px] mt-4 focus:outline-none"
//             />

//             <button className="bg-primary text-white w-full mt-4 py-4 rounded-[16px] font-semibold">
//               Search
//             </button>

//             <span className="mt-2 flex items-center gap-2 cursor-pointer">
//               <LocationIcon className="text-primary" />
//               <p className="text-primary text-[16px]">Get your LLHAR Score</p>
//               <Arrow className="ml-2" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Arrow, LocationIcon } from "../../../assets/icon";

// const HeroSection = () => {
//   const tabs = ["buy", "rent", "sell"];
//   const [activeTab, setActiveTab] = useState("buy");

//   // Variants for animations
//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1.8 } },
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1.8 } },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 1.6 },
//     }),
//   };

//   return (
//     <div
//       className="w-full h-full md:h-[600px] bg-cover bg-center relative flex items-center"
//       style={{ backgroundImage: "url('/assets/image/herobg.png')" }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative w-full flex flex-col lg:flex-row items-start justify-around md:px-10 text-white">
//         {/* Left Text Column */}
//         <motion.div
//           className="flex flex-col space-y-8 max-w-xl p-6"
//           variants={fadeInLeft}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div
//             className="border bg-blur-2 p-3 border-gray-300/40 rounded-[25px] w-fit"
//             variants={fadeUp}
//             custom={0}
//           >
//             <p className="text-sm"> 🏠 AI-Powered Real Estate Platform</p>
//           </motion.div>

//           <motion.h1
//             className="text-[42px] md:text-[56px] font-poppins font-bold mt-4 leading-tight"
//             variants={fadeUp}
//             custom={1}
//           >
//             Rent. Buy. Sell.
//           </motion.h1>

//           <motion.p className="mt-2 opacity-90" variants={fadeUp} custom={2}>
//             AI-powered real estate made effortless. Connect with verified
//             owners.
//           </motion.p>

//           <motion.div className="mt-6 flex gap-4" variants={fadeUp} custom={3}>
//             <button className="bg-primary font-poppins py-3 px-8 rounded-md">
//               Get Started
//             </button>
//             <button className="border-2 hover:bg-white hover:text-primary transition hover:border-primary font-poppins py-3 px-8 rounded-md">
//               Explore Marketplace
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Right Search Card */}
//         <motion.div
//           className="flex w-[50%] p-10 lg:p-10 items-center justify-center"
//           variants={fadeInRight}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="h-[300px] flex flex-col items-start rounded-[25px] w-full bg-white p-6">
//             <motion.div
//               className="flex items-center justify-center gap-4 bg-[#F9FAFB] rounded-xl p-2 "
//               variants={fadeUp}
//               custom={0}
//             >
//               {tabs.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setActiveTab(item)}
//                   className={`px-6 py-2 font-semibold rounded-[15px] transition-all duration-200 ${
//                     activeTab === item
//                       ? "bg-white text-primary shadow-md"
//                       : "text-[#6C757D] "
//                   }`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </motion.div>

//             <motion.input
//               type="text"
//               placeholder="Search properties, locations..."
//               className="w-full px-5 py-4 bg-[#F9FAFB] rounded-[16px] mt-4 focus:outline-none"
//               variants={fadeUp}
//               custom={1}
//             />

//             {/* <motion.button
//               className="bg-primary text-white w-full mt-4 py-4 rounded-[16px] font-semibold"
//               variants={fadeUp}
//               custom={2}
//             >
//               Search
//             </motion.button> */}
//             <button className="relative group overflow-hidden w-full mt-6 rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow-lg">
//               <span className="relative z-10 flex items-center justify-center">
//                 Sign Up
//               </span>

//               {/* Shine effect */}
//               <span
//                 className="absolute top-0 left-[-50%] h-full w-1/2 bg-white/30 opacity-0 
//     -skew-x-12 group-hover:opacity-100 group-hover:animate-shine"
//               ></span>
//             </button>

//             <motion.span
//               className="mt-2 flex items-center gap-2 cursor-pointer"
//               variants={fadeUp}
//               custom={3}
//             >
//               <LocationIcon className="text-primary" />
//               <p className="text-primary text-[16px]">Get your LLHAR Score</p>
//               <Arrow className="ml-2" />
//             </motion.span>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import { useState } from "react";
import { motion } from "framer-motion";
import { Arrow, LocationIcon } from "../../../assets/icon";

const HeroSection = () => {
  const tabs = ["buy", "rent", "sell"];
  const [activeTab, setActiveTab] = useState("buy");

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.8 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1.6 },
    }),
  };

  return (
    <div
      className="w-full h-full pt-10 md:h-[600px] bg-cover bg-center relative flex items-center overflow-hidden"
    >
      {/* 🔥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/image/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full flex flex-col lg:flex-row items-start justify-around md:px-10 text-white">
        
        {/* LEFT */}
        <motion.div
          className="flex flex-col space-y-8 max-w-xl p-6"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="border bg-blur-2 p-3 border-gray-300/40 rounded-[25px] w-fit"
            variants={fadeUp}
            custom={0}
          >
            <p className="text-sm"> 🏠 AI-Powered Real Estate Platform</p>
          </motion.div>

          <motion.h1
            className="text-[42px] md:text-[56px] font-poppins font-bold mt-4 leading-tight"
            variants={fadeUp}
            custom={1}
          >
            Rent. Buy. Sell.
          </motion.h1>

          <motion.p className="mt-2 opacity-90" variants={fadeUp} custom={2}>
            AI-powered real estate made effortless. Connect with verified
            owners.
          </motion.p>

          <motion.div className="mt-6 flex gap-4" variants={fadeUp} custom={3}>
            <button className="bg-primary font-poppins py-3 px-8 rounded-md">
              Get Started
            </button>
            <button className="border-2 hover:bg-white hover:text-primary transition hover:border-primary font-poppins py-3 px-8 rounded-md">
              Explore Marketplace
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex w-[50%] p-10 lg:p-10 items-center justify-center"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="h-[300px] flex flex-col items-start rounded-[25px] w-full bg-white p-6">
            
            <motion.div
              className="flex items-center justify-center gap-4 bg-[#F9FAFB] rounded-xl p-2 "
              variants={fadeUp}
              custom={0}
            >
              {tabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-6 py-2 font-semibold rounded-[15px] transition-all duration-200 ${
                    activeTab === item
                      ? "bg-white text-primary shadow-md"
                      : "text-[#6C757D]"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.div>

            <motion.input
              type="text"
              placeholder="Search properties, locations..."
              className="w-full px-5 py-4 bg-[#F9FAFB] rounded-[16px] mt-4 focus:outline-none"
              variants={fadeUp}
              custom={1}
            />

            {/* Shine Button */}
            <button className="relative group overflow-hidden w-full mt-6 rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow-lg">
              <span className="relative z-10 flex items-center justify-center">
                Sign Up
              </span>

              <span
                className="absolute top-0 left-[-50%] h-full w-1/2 bg-white/30 opacity-0 
                -skew-x-12 group-hover:opacity-100 group-hover:animate-shine"
              ></span>
            </button>

            <motion.span
              className="mt-2 flex items-center gap-2 cursor-pointer"
              variants={fadeUp}
              custom={3}
            >
              <LocationIcon className="text-primary" />
              <p className="text-primary text-[16px]">Get your LLHAR Score</p>
              <Arrow className="ml-2" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
