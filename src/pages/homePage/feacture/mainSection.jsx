import React, { useState } from "react";

const IconHeart = ({ className = "w-5 h-5", filled }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? "blue" : "none"}   // FILL WHEN ACTIVE
    stroke={filled ? "blue" : "currentColor"} // BORDER WHEN NOT ACTIVE
  >
    <path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeListing = () => {
  const [likedHomes, setLikedHomes] = useState({});

  const toggleLike = (id) => {
    setLikedHomes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const listings = [
    { id: 1, city: "Madrid", price: "$ 100,500", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" },
    { id: 2, city: "Barcelona", price: "$ 166,000", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
    { id: 3, city: "Valencia", price: "$ 128,000", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" },
    { id: 4, city: "Sevilla", price: "$ 100,500", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" },
    { id: 5, city: "Aragón Navarra y Pais Basco", price: "$ 166,000", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
    { id: 6, city: "Galicia y norte de españa", price: "$ 128,000", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h3 className="text-teal-500 font-medium text-lg mb-1">Homes</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Browse homes in Spain
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((home) => (
          <div
            key={home.id}
            className="relative h-64 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <img
              src={home.image}
              alt={home.city}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
              style={{
                background:
                  "linear-gradient(360deg, #218AB6 0%, rgba(33, 138, 182, 0) 50.02%)",
              }}
              className="absolute inset-0"
            />

            {/* Heart Button */}
            <button
              onClick={() => toggleLike(home.id)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <IconHeart
                className="w-6 h-6"
                filled={likedHomes[home.id]} // CHANGE COLOR
              />
            </button>

            {/* Text Content */}
            <div className="absolute bottom-4 left-5 text-white">
              <h3 className="text-lg font-bold mb-1 drop-shadow-md">
                {home.city}
              </h3>
              <p className="text-lg font-bold drop-shadow-md">{home.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeListing;
