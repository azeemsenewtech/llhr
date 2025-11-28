// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const menu = [
//     { name: "Buy", path: "/buy" },
//     { name: "Rent", path: "/rent" },
//     { name: "Sell", path: "/sell" },
//     { name: "Terms & Conditions", path: "/terms" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm border-b border-blue-200 relative">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src="/src/assets/image/headlogo.png" alt="Logo" className="h-10" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-16 text-gray-700 font-medium">
//           {menu.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `font-poppin transition ${
//                   isActive
//                     ? "text-primary font-semibold"
//                     : "text-gray-700 hover:text-blue-600"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-5">
//           <button className="text-primary font-poppin font-medium hover:text-primary-dark">
//             Login
//           </button>

//           <button className="bg-primary font-poppin text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="lg:hidden flex flex-col gap-1 z-50"
//           onClick={() => setOpen(!open)}
//         >
//           <span className={`h-1 w-7 bg-gray-700 transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
//           <span className={`h-1 w-7 bg-gray-700 transition ${open ? "opacity-0" : ""}`}></span>
//           <span className={`h-1 w-7 bg-gray-700 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
//         </button>
//       </nav>

//       {/* Overlay Background */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//         ></div>
//       )}

//       {/* Sidebar Menu */}
//       <div
//         className={`fixed lg:hidden top-0 left-0 h-full w-[80%] md:w-[50%] bg-white shadow-lg z-50 transform transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div>
//         <h2 className="text-[20px] font-bold p-6 ">Menu</h2>
//         </div>
//         <ul className="flex flex-col gap-6 px-6 pt-10 text-gray-700 font-medium">
//           {menu.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `block w-full text-lg font-poppin transition ${
//                   isActive
//                     ? "text-primary font-semibold"
//                     : "text-gray-700 hover:text-blue-600"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Buttons */}
//           <div className="flex flex-col items-center gap-4 mt-6">
//           <button className="text-primary w-full text-lg font-poppin font-medium">
//             Login
//           </button>

//           <button className="bg-primary w-full text-white font-poppin text-lg font-medium px-6 py-2 rounded-lg shadow ">
//             Sign Up
//           </button>
//           </div>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const menu = [
//     { name: "Buy", path: "/buy" },
//     { name: "Rent", path: "/rent" },
//     { name: "Sell", path: "/sell" },
//     { name: "Terms & Conditions", path: "/terms" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm border-b border-blue-200 relative font-sans">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img
//             src="/assets/image/headlogo.png"
//             alt="Logo"
//             className="h-10 object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-12 text-gray-700 font-medium">
//           {menu.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `relative py-2 px-1 transition-colors duration-300 font-poppin
                
//                 /* TOP LINE (Left to Right) -> Anchored to left-0 */
//                 before:absolute before:top-0 before:left-0 before:h-[2px] before:bg-primary 
//                 before:transition-all before:duration-300 
//                 ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}

//                 /* BOTTOM LINE (Right to Left) -> Anchored to right-0 */
//                 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-primary 
//                 after:transition-all after:duration-300 
//                 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}

//                 /* Text Styling */
//                 ${
//                   isActive
//                     ? "text-primary font-semibold"
//                     : "text-gray-700 hover:text-primary"
//                 }
//                 `
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-6">
//           <NavLink
//             to="/dashboard"
//             className="text-primary font-poppin font-medium hover:text-primary transition"
//           >
//             Login
//           </NavLink>

//           <button className="bg-primary font-poppin text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-primary transition">
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="lg:hidden flex flex-col gap-1 z-50"
//           onClick={() => setOpen(!open)}
//         >
//           <span
//             className={`h-1 w-7 bg-gray-700 transition-all duration-300 ${
//               open ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-7 bg-gray-700 transition-all duration-300 ${
//               open ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-7 bg-gray-700 transition-all duration-300 ${
//               open ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </button>
//       </nav>

//       {/* Overlay Background */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//         ></div>
//       )}

//       {/* Sidebar Menu */}
//       <div
//         className={`fixed lg:hidden top-0 left-0 h-full w-[80%] md:w-[50%] bg-white shadow-lg z-50 transform transition-transform duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div>
//           <h2 className="text-[20px] font-bold p-6 text-slate-800">Menu</h2>
//         </div>
//         <ul className="flex flex-col gap-6 px-6 pt-4 text-gray-700 font-medium">
//           {menu.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `block w-full text-lg font-poppin border-l-4 pl-3 transition-all ${
//                   isActive
//                     ? "border-primary text-primary bg-primary/10"
//                     : "border-transparent text-gray-700 hover:text-primary"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Mobile Buttons */}
//           <div className="flex flex-col items-center gap-4 mt-6">
//             <NavLink
//               to="/dashboard"
//               className="text-primary font-poppin font-medium hover:text-primary transition"
//             >
//               Login
//             </NavLink>

//             <button className="bg-primary w-full text-white font-poppin text-lg font-medium px-6 py-2 rounded-lg shadow hover:bg-primary/90">
//               Sign Up
//             </button>
//           </div>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const menu = [
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Sell", path: "/sell" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/"); // redirect to home after logout
  };

  return (
    <header className="w-full fixed bg-white z-30 shadow-sm border-b border-blue-200 font-sans">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
          onClick={()=>navigate("/")}
            src="/assets/image/headlogo.png"
            alt="Logo"
            className="h-10 cursor-pointer object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-poppin text-gray-700 font-medium">
           {menu.map((item, index) => (
            <NavLink
             key={index}
             to={item.path}
            className={({ isActive }) =>
               `relative py-2 px-1 transition-colors duration-300 font-poppin
                             /* TOP LINE (Left to Right) -> Anchored to left-0 */
               before:absolute before:top-0 before:left-0 before:h-[2px] before:bg-primary 
                 before:transition-all before:duration-300 
                ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}

                /* BOTTOM LINE (Right to Left) -> Anchored to right-0 */
                after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-primary 
                after:transition-all after:duration-300 
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}

                /* Text Styling */
              ${
                  isActive
                  ? "text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }
              `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>


        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-10">
          {isLoggedIn ? (
            <>
              <NavLink
                to="/profile"
                className="text-primary  font-poppin font-medium hover:text-primary transition"
              >
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-primary font-poppin text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-primary font-poppin font-bold hover:text-primary transition"
              >
                Login
              </NavLink>
        <button className="relative group overflow-hidden rounded-lg bg-primary px-6 py-2.5 text-white font-semibold shadow-lg">
  <span className="relative z-10 flex items-center justify-center">
    Sign Up
  </span>

  {/* Shine effect */}
  <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-white/30 opacity-0 
    -skew-x-12 group-hover:opacity-100 group-hover:animate-shine">
  </span>
</button>


            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1 z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-7 bg-gray-700 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-7 bg-gray-700 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-7 bg-gray-700 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Overlay Background */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed lg:hidden top-0 left-0 h-full w-[80%] md:w-[50%] bg-white shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
        <h2 className="text-[20px] font-poppin font-bold p-6 ">Menu</h2>
        </div>
        <ul className="flex flex-col gap-6 px-6 pt-10 font-poppin text-gray-700 font-medium">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block w-full text-lg font-poppin transition ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6">
          <button className="text-primary w-full text-lg font-poppin font-medium">
            Login
          </button>

          <button className="bg-primary w-full text-white font-poppin text-lg font-medium px-6 py-2 rounded-lg shadow ">
            Sign Up
          </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
  