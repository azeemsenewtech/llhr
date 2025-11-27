import { useMemo, useState } from "react";
import houseImg from "/assets/image/house.png";
import OverView from "../../../component/ui/overview";

const Star = ({ className = "w-4 h-4 text-yellow-400 inline-block" }) => (
  <svg aria-hidden className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.997 2.674c-.785.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.01 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
  </svg>
);

const IconHeart = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPhone = () => (
  <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.63A2 2 0 014.11 2H7a2 2 0 012 1.72c.12 1.05.37 2.09.74 3.06a2 2 0 01-.45 2.11L8.91 10.09a16 16 0 006 6l1.2-1.2a2 2 0 012.11-.45c.97.37 2.01.62 3.06.74A2 2 0 0122 16.92z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Small, optimized Detail page with gallery + sidebar */
const Detail = () => {
  const images = useMemo(
    () => [houseImg, houseImg, houseImg, houseImg],
    []
  );
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white pb-[100px] py-12">
      <div className="mx-auto max-w-6xl px-6">
        
        <nav className="text-[18px] text-primary font-poppin mb-4">Homes</nav>
 <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-[40px] font-poppin font-bold text-slate-900">
                  Elevation Small Apartments
                </h1>

           
              </div>

              <div className="flex items-center gap-2">
                <button aria-label="favorite" className="rounded-[10px] border border-slate-200 p-2 bg-white">
                  <IconHeart />
                </button>
                <button className="rounded-md border border-slate-200 px-3 py-2 text-sm">Share</button>
                <button className="rounded-md border border-slate-200 px-3 py-2 text-sm">Report</button>
              </div>
            </div>
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
           

            {/* Gallery */}
            <div className="mt-6 grid  mb-[100px] gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-100">
                <img
                  src={images[active]}
                  alt={`Property image ${active + 1}`}
                  className="w-full h-[420px] object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="grid grid-cols-4 gap-3 w-full py-2">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`flex-none rounded-lg overflow-hidden border ${i === active ? "ring-2 ring-sky-300" : "border-slate-100"}`}
                    aria-pressed={i === active}
                  >
                    <img src={src} alt={`thumb ${i + 1}`} className=" object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
                   <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="flex items-center">
                      {[...Array(5)].map((_, i) => <Star key={i} />)}
                    </span>
                    <span className="ml-2 font-medium">5.0</span>
                  </div>
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4 text-sky-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v6c0 5 3.8 9.6 10 13 6.2-3.4 10-8 10-13V7l-10-5z"/></svg>
                    <span>For Sale</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"/></svg>
                    <span>Melbourne</span>
                  </span>
                </div>
             <div className="mt-8 text-sm font-poppin rounded-[10px] border-2 border-primary/20 py-10 px-6 text-slate-600 space-y-4">
               Step outside to a private garden and patio — perfect for relaxing or entertaining. The home also includes secure parking, smart automation, and energy-efficient features for modern living.<br />
                Experience modern living in this beautifully designed 5-bedroom, 2-bathroom home in the heart of Battaglia Veneto. It features an open-concept living area with large windows, a fully equipped kitchen, and spacious bedrooms with built-in wardrobes.
             </div>
             <OverView/>
            </div>

          
           
          </div>

          {/* Sidebar */}
          <aside className="w-full max-w-sm mt-6">
            <div className="space-y-6">
              <div className="rounded-xl border border-primary/20 p-4">
                <div className="flex items-center gap-4">
                  <img src={houseImg} alt="agent" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-poppin font-semibold">Admin</div>
                    <div className="text-xs font-poppin text-slate-500">Member since 11 months</div>
                  </div>
                </div>

                <div className="mt-4 text-sm font-poppin space-y-2  text-slate-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"/></svg>
                    21 Monroe Ave, Rochester NY
                  </div>
                  <div className="flex items-center">
                    <IconPhone /> 888 666 111
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/></svg>
                    http://example.com
                  </div>
                </div>

                <div className="mt-4">
                  <button className="w-full bg-sky-600 font-poppin text-white py-2 rounded-md text-sm font-semibold">View Profile</button>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 p-4">
                <h4 className="text-sm font-poppin font-semibold mb-3">Property Contact</h4>
                <div className="text-sm font-poppin text-slate-600 space-y-3">
                  <div className="flex items-center"><svg className="w-4 h-4 mr-2 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5v14h18V5H3zm9 12a4 4 0 110-8 4 4 0 010 8z"/></svg>18 Brooklyn Street, New York</div>
                  <div className="flex font-poppin items-center"><IconPhone />+84-666-888-99</div>
                  <div className="flex font-poppin items-center"><svg className="w-4 h-4 mr-2 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4z"/></svg>contact@example.com</div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Detail;