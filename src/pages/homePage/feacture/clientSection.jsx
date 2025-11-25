// const testimonial = {
//   title: "What Our Clients Say",
//   text: `Home is where love resides, memories are created, and dreams are nurtured. I've found my sanctuary in this beautiful property. Finding the perfect flat that resonates with your own soul is unmatched.`,
//   author: {
//     name: "Alexan Micelito",
//     role: "Senior Manager",
//     avatar: "https://i.pravatar.cc/100?img=12",
//   },
//   rating: 5,
//   mainImage:
//     "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
//   secondaryImage:
//     "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=600&q=60",
// };

// const ClientSection = () => {
//   return (
//     <section
//       className="relative py-16 pb-80"
//       style={{
//         backgroundImage:
//           "linear-gradient(90deg, rgba(246, 247, 248, 0.92), rgba(247, 249, 250, 0.75)), url('src/assets/image/main.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
//         <p className="pointer-events-none select-none text-[88px] font-extrabold tracking-[0.15em] text-white/60">
//           TESTIMONIALS
//         </p>
//       </div>
//       <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center text-white">
//         <div className="space-y-5 md:w-1/2">
//           <div>
            
//             <h2 className="mt-2 text-[40px] text-primary font-semibold">
//               What Our Clients Say
//             </h2>
//           </div>
//           <div className="flex gap-1 text-amber-400">
//             {Array.from({ length: testimonial.rating }).map((_, idx) => (
//               <span className="text-[20px]" key={idx}>★</span>
//             ))}
//           </div>
//           <p className="text-sm leading-relaxed text-[#62708A] max-w-xl">
//             {testimonial.text}
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src={testimonial.author.avatar}
//               alt={testimonial.author.name}
//               className="h-18 w-16 rounded-tr-[20px]  rounded-[10px] object-cover shadow-lg"
//             />
//             <div>
//               <p className="font-semibold text-primary">{testimonial.author.name}</p>
//               <p className="text-sm text-[#62708A] ">{testimonial.author.role}</p>
//             </div>
//           </div>
//         </div>

//         <div className="relative flex w-full flex-col items-center md:w-1/2">
//           <div className="h-80 w-full max-w-md overflow-hidden rounded-[22px] border border-white/40 bg-white/5 shadow-xl backdrop-blur">
//             <img
//               src={testimonial.mainImage}
//               alt="Modern home"
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="absolute -bottom-10 right-6 h-58 w-72 overflow-hidden rounded-tr-[52px] rounded-[22px]  shadow-lg">
//             <img
//               src={testimonial.secondaryImage}
//               alt="Interior living room"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSection;
import React from 'react';

const Testimonials = () => {
  return (
    <section className="relative w-full  mb-16 min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Faint Overlay (Optional texture effect) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=20')] opacity-5 bg-cover bg-center pointer-events-none mix-blend-multiply" />

      <div className="max-w-6xl pb-16 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="relative">
          
          {/* Background "TESTIMONIALS" Text */}
          <h1 
            className="absolute -top-24 -left-10 text-8xl md:text-9xl font-bold text-transparent pointer-events-none select-none hidden md:block"
            style={{ WebkitTextStroke: '1px #cbd5e1' }} // Creates the outline effect
          >
            TESTIMONIALS
          </h1>

          {/* Main Heading */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2b82b8] mb-4 leading-tight">
              What Our Clients <br /> Say
            </h2>
            
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-slate-500 leading-relaxed text-base md:text-lg mb-10 max-w-lg">
              Home is where love resides, memories are created, and dreams are nurtured. I've found my sanctuary in this beautiful property. Finding the perfect that resonates with your own coupled with modern. Finding the perfect that resonates with your own coupled with modern.
            </p>

            {/* User Profile Section */}
            <div className="flex items-center gap-4 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Alexan Micelito" 
                className="w-16 h-16 rounded-2xl object-cover shadow-sm"
              />
              <div>
                <h4 className="text-[#2b82b8] font-bold text-lg">Alexan Micelito</h4>
                <span className="text-slate-400 text-sm">Senior Manager</span>
              </div>
            </div>

            {/* Quote Icon Decoration */}
            <div className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 opacity-20 pointer-events-none">
               <svg className="w-32 h-32 text-slate-300 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> 
                  {/* Using a document icon as placeholder for the quote style shape, or actual quote path below */}
                  <path d="M10 11h-4a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M20 11h-4a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5" stroke="currentColor" fill="none" strokeWidth="1"/>
               </svg>
            </div>

            {/* Pagination Lines */}
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-[#2b82b8]"></div>
              <div className="w-12 h-1 bg-slate-300"></div>
              <div className="w-12 h-1 bg-slate-300"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Image Composition */}
        <div className="relative h-[500px] w-full hidden  lg:block">
          
          {/* Back Image (Exterior) */}
          <div className="absolute top-0 right-12 w-3/4 h-3/4 overflow-hidden rounded-tr-[60px] rounded-bl-[60px] shadow-xl z-10">
            <img 
              src="/assets/image/house.png" 
              alt="Modern House Exterior" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front Image (Interior) */}
          <div className="absolute bottom-0 -right-10 w-3/5 h-3/5 overflow-hidden rounded-tl-[60px] rounded-br-[60px] border-4 border-slate-50 shadow-2xl z-20">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern Living Room" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
