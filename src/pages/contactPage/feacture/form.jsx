import {
  FiGlobe,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiGlobe className="text-primary text-xl" />,
    title: "Our Address",
    lines: ["291 Roderick Wells, UK, Connecticut, 08429."],
  },
  {
    icon: <FiMapPin className="text-primary text-xl" />,
    title: "Working Hours",
    lines: ["Mon–Fri: 8 AM – 5 PM", "Sat–Sun: 8 AM – 2 PM"],
  },
  {
    icon: <FiMail className="text-primary text-xl" />,
    title: "Email Us",
    lines: ["info@example.com", "contact@example.com"],
  },
  {
    icon: <FiPhone className="text-primary text-xl" />,
    title: "Contact Us",
    lines: ["+(000) 123-456-789", "+(0000) 1234-56789"],
  },
];

const formFields = [
  {
    label: "Name*",
    placeholder: "Mimosic john",
    type: "text",
    icon: null,
  },
  {
    label: "Email*",
    placeholder: "your@email.com",
    type: "email",
    icon: null,
  },
  {
    label: "Desired date*",
    placeholder: "mm/dd/yyyy",
    type: "text",
    icon: (
      <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
    ),
  },
  {
    label: "Desired time",
    placeholder: "--:--",
    type: "text",
    icon: (
      <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
    ),
  },
];

const ContactSection = () => {
  return (
    <section className="w-full relative py-16 pb-80 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <p className="text-sm text-primary">Contact Us</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F2D3D]">
          To Know About Us
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Form */}
          <div className="bg-[#218AB61C] p-8 rounded-xl shadow-sm">
            {/* Form */}
            <form className="space-y-5">
              {/* First 4 fields from array */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {formFields.map((field, idx) => (
                  <div key={idx}>
                    <label className="text-gray-700 font-medium text-sm">
                      {field.label}
                    </label>

                    <div className="relative">
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full mt-1 p-3 rounded-[15px] bg-white border border-primary/20 focus:outline-primary"
                      />
                      {field.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Box */}
              <div>
                <label className="text-gray-700 font-medium text-sm">
                  Additional Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Please write any note here..."
                  className="w-full mt-1 p-3 rounded-[15px] bg-white border border-primary/20 focus:outline-primary resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="bg-primary flex  text-white py-3 px-6 rounded-md w-full font-semibold hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>

          {/* Right Contact Details */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-[#E8F4FF] p-3 rounded-lg">{item.icon}</div>
                <div className="flex flex-col ">
                  <h3 className="font-semibold text-[18px] text-[#1F2D3D]">
                    {item.title}
                  </h3>
                  <div className="flex gap-4">
                    {item.lines.map((line, i) => (
                      <p
                        className="text-[#44525E] text-[13px] font-poppins"
                        key={i}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
