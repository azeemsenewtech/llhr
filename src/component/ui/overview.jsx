    import { FiCheckCircle } from "react-icons/fi";
import { PiListBold } from "react-icons/pi";
import { Arrow } from "../../assets/icon";



export default function PropertyDetails() {
  const amenities = [
    "Air Conditioning",
    "24x7 Security",
    "Washer and dryer",
    "Central Air",
    "Swimming Pool",
    "Media Room",
    "Basketball",
    "Indoor Game",
  ];

  const overview = [
    { title: "Number ID", value: "#1686" },
    { title: "Type", value: "Apartment" },
    { title: "Build Year", value: "2020" },
    { title: "Bed", value: "5" },
    { title: "Bath", value: "2" },
    { title: "Size", value: "1860 sqft" },
  ];

  return (
    <div className="bg-[#F9FCFF] border p-6 rounded-xl shadow-sm space-y-8">

      {/* Features & Amenities */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <PiListBold className=" font-poppins text-gray-700 text-lg" />
          <h2 className="text-lg font-poppins font-semibold text-gray-800">
            Features & Amenities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {amenities.map((item, i) => (
            <div key={i} className="flex items-center gap-2  text-sm text-gray-700">
              <FiCheckCircle className="text-blue-400 font-poppins text-base" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 font-poppins mb-4 flex items-center gap-2">
          <PiListBold className="text-gray-700 text-lg" />
          Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {overview.map((item, index) => (
            <div className="flex items-center">
                <div>
          <Arrow/>
                </div>
                <div
              key={index}
              className=" px-4 py-3  flex flex-col"
            >
              <span className="text-xs font-poppins text-gray-500">{item.title}</span>
              <span className="text-base font-poppins font-semibold text-gray-800">
                {item.value}
              </span>
            </div>
            </div>
            
          ))}
        </div>
      </div>

    </div>
  );
}
