import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Users, 
  MessageSquare, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

const OfferDashboard = () => {
  // Mock Data based on the image content
  const offers = [
    {
      id: 1,
      property: "Luxury Beach Villa",
      location: "Malibu, CA",
      guest: {
        name: "Sarah Johnson",
        initials: "SJ",
        count: 4,
      },
      dates: {
        range: "Dec 15, 2024 - Dec 22, 2024",
        nights: 7,
      },
      pricing: {
        original: 3200,
        offer: 2800,
        discount: "13% off",
      },
      message: "Hi! We would love to stay at your beautiful property. Would you consider this offer for our family vacation?",
      status: "accepted", // accepted | pending
      timestamp: null,
    },
    {
      id: 2,
      property: "Downtown Loft",
      location: "New York, NY",
      guest: {
        name: "Michael Chen",
        initials: "MC",
        count: 2,
      },
      dates: {
        range: "Jan 10, 2025 - Jan 15, 2025",
        nights: 5,
      },
      pricing: {
        original: 1800,
        offer: 1500,
        discount: "17% off",
      },
      message: "Business trip to NYC. Hoping for a slight discount for the weekdays.",
      status: "pending",
      timestamp: "5 hours ago",
    },
    {
      id: 3, // Partial card to show list continuity
      property: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      guest: { name: "Emily White", initials: "EW", count: 6 },
      dates: { range: "Feb 01, 2025 - Feb 08, 2025", nights: 7 },
      pricing: { original: 4500, offer: 4000, discount: "11% off" },
      message: "Planning a ski trip...",
      status: "pending",
      timestamp: "1 day ago",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className=" mx-auto space-y-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} data={offer} />
        ))}
      </div>
    </div>
  );
};

const OfferCard = ({ data }) => {
  const isAccepted = data.status === 'accepted';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      
      {/* Header Section */}
      <div className="p-6  w-full pb-4">
        <div className="flex w-full justify-between items-start mb-4">
          <div>
            <h3 className="text-gray-900 font-bold text-lg">{data.property}</h3>
            <div className="flex items-center text-gray-400 text-xs mt-1">
              <MapPin className="w-3 h-3 mr-1" />
              {data.location}
            </div>
          </div>
          {data.timestamp && (
            <div className="flex items-center text-gray-400 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {data.timestamp}
            </div>
          )}
        </div>

        <hr className="border-gray-100 mb-5" />

        {/* Guest Info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            {data.guest.initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">{data.guest.name}</span>
              {isAccepted && (
                <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                  Accepted
                </span>
              )}
            </div>
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <Users className="w-3 h-3 mr-1" />
              {data.guest.count} guests
            </div>
          </div>
        </div>

        {/* Date Info */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            {data.dates.range}
          </div>
          <span className="text-gray-400 text-xs">{data.dates.nights} nights</span>
        </div>

        {/* Price Box */}
        <div className="bg-blue-50/50 rounded-lg p-4 mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-500 text-sm font-medium">Your Price</span>
            <span className="text-gray-500 text-sm font-medium">${data.pricing.original}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 text-sm font-semibold">Offer Price</span>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">${data.pricing.offer}</span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                {data.pricing.discount}
              </span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-medium">Guest Message:</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed pl-6">
            {data.message}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 pb-6">
        {isAccepted ? (
          // Accepted State Footer
          <div className="bg-green-50 border border-green-100 rounded-lg p-3 flex items-center justify-center gap-2 text-green-700 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Offer accepted! Guest will be notified.
          </div>
        ) : (
          // Pending State Footer
          <div className="flex gap-3 pt-2">
            <button className="flex-1 py-2.5 px-4 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
              Decline
            </button>
            <button className="flex-1 py-2.5 px-4 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm">
              Accept Offer
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default OfferDashboard;