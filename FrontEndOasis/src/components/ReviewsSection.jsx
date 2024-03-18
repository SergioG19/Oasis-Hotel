import React from 'react';

const ReviewCard = ({ quote, rating, name, imageUrl }) => {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg text-center">
        <blockquote className="italic mb-4">«{quote}»</blockquote>
        <div className="flex justify-center mb-4">
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </div>
        <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full mx-auto mb-2" />
        <div className="font-bold">{name}</div>
      </div>
    );
  };
  
  const ReviewsSection = () => {
    // Example data for reviews
    const reviews = [
      {
        quote: "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.",
        rating: 5,
        name: "Ron Burnwood",
        imageUrl: "path-to-ron-image.jpg",
      },
      {
        quote: "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.",
        rating: 5,
        name: "Ron Burnwood",
        imageUrl: "path-to-ron-image.jpg",
      },
      {
        quote: "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.",
        rating: 5,
        name: "Ron Burnwood",
        imageUrl: "path-to-ron-image.jpg",
      },
      // Add more review data here
    ];
  
    return (
      <div className="py-12 bg-yellow-100">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Reseña De Clientes</h2>
          <hr className="border-2 border-gray-300 mx-auto w-1/4 mt-2 mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    );
  };

  export default ReviewsSection;