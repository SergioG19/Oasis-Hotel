import React from 'react';

const MembershipOption = ({ title, originalPrice, discountedPrice, benefits, ctaText }) => {
    return (
      <div className="bg-yellow-100 p-4 text-center shadow-md rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-lg text-red-500 line-through">{originalPrice}</p>
        <p className="text-4xl font-bold text-orange-600 mb-4">{discountedPrice}</p>
        <div className="my-4">
          {benefits.map((benefit, index) => (
            <p key={index} className="text-gray-600 mb-1">✔ {benefit}</p>
          ))}
        </div>
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition duration-200">
          {ctaText}
        </button>
      </div>
    );
  };
  
  const MembershipSection = () => {
    // Sample data for membership options
    const membershipOptions = [
      {
        title: "Single Workshop",
        originalPrice: "100$",
        discountedPrice: "45$",
        benefits: ["Benefit 01", "Benefit 02", "Benefit 03"],
        ctaText: "Buy Now",
      },
      {
        title: "Single Workshop",
        originalPrice: "100$",
        discountedPrice: "45$",
        benefits: ["Benefit 01", "Benefit 02", "Benefit 03"],
        ctaText: "Buy Now",
      },
      {
        title: "Single Workshop",
        originalPrice: "100$",
        discountedPrice: "45$",
        benefits: ["Benefit 01", "Benefit 02", "Benefit 03"],
        ctaText: "Buy Now",
      },
      // Add more membership options here
    ];
  
    return (
      <div className="py-12 bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Membresías Vip</h2>
          <p className="text-gray-600 mb-8">Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {membershipOptions.map((option, index) => (
            <MembershipOption key={index} {...option} />
          ))}
        </div>
      </div>
    );
  };

  export default MembershipSection;