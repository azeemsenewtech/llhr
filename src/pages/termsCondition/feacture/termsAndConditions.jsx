import React from 'react';

const TermsAndConditions = () => {
  // Array Data
  const termsData = [
    {
      id: 1,
      title: "Use of the LLHAR Platform",
      content: "By accessing or using the LLHAR platform, you agree to comply with these Terms of Use. Our services are designed to connect property owners, tenants, and buyers using AI-driven tools for transparency, trust, and automation. You are responsible for maintaining the confidentiality of your account information and ensuring that all provided data is accurate and up-to-date."
    },
    {
      id: 2,
      title: "Content and Intellectual Property",
      content: "All content on this website — including AI models, LLHARScore™ data, graphics, text, logos, and property listings — is owned or licensed by LLHAR. You may view and download material for personal use only. Unauthorized reproduction, resale, or redistribution of any platform content is strictly prohibited."
    },
    {
      id: 3,
      title: "Service Availability and Delivery",
      content: "Our platform operates 24/7; however, certain services (such as property verification or payment processing) may take 24–72 hours depending on the complexity of verification and document validation. In rare cases, delays may occur due to network or regulatory conditions, for which LLHAR is not liable."
    },
    {
      id: 4,
      title: "Accuracy of Listings and Data",
      content: "LLHAR strives to ensure all listings and AI valuations are accurate and current. However, property details, images, and pricing are provided by verified owners or agents. Actual property conditions or visuals may differ slightly due to updates, renovations, or photography variations. We recommend scheduling a verified visit before making final decisions."
    },
     {
      id: 3,
      title: "Service Availability and Delivery",
      content: "Our platform operates 24/7; however, certain services (such as property verification or payment processing) may take 24–72 hours depending on the complexity of verification and document validation. In rare cases, delays may occur due to network or regulatory conditions, for which LLHAR is not liable."
    },
    {
      id: 4,
      title: "Accuracy of Listings and Data",
      content: "LLHAR strives to ensure all listings and AI valuations are accurate and current. However, property details, images, and pricing are provided by verified owners or agents. Actual property conditions or visuals may differ slightly due to updates, renovations, or photography variations. We recommend scheduling a verified visit before making final decisions."
    },
     {
      id: 3,
      title: "Service Availability and Delivery",
      content: "Our platform operates 24/7; however, certain services (such as property verification or payment processing) may take 24–72 hours depending on the complexity of verification and document validation. In rare cases, delays may occur due to network or regulatory conditions, for which LLHAR is not liable."
    },
    {
      id: 4,
      title: "Accuracy of Listings and Data",
      content: "LLHAR strives to ensure all listings and AI valuations are accurate and current. However, property details, images, and pricing are provided by verified owners or agents. Actual property conditions or visuals may differ slightly due to updates, renovations, or photography variations. We recommend scheduling a verified visit before making final decisions."
    }
  ];

  return (
    <div className="relative mx-auto md:px-[100px] px-6 pb-[200px] py-12 bg-white font-sans">
      {/* Header Section */}
      <div className="mb-10">
        <h4 className="text-sky-500 font-bold text-sm uppercase tracking-wide mb-2">
          LLHAR User Terms
        </h4>
        <h1 className="text-4xl font-bold text-slate-900">
          Terms & Conditions
        </h1>
      </div>

      {/* Content Section mapped from Array */}
      <div className="space-y-8">
        {termsData.map((item) => (
          <div key={item.id}>
            <h3 className="text-lg font-bold text-slate-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;