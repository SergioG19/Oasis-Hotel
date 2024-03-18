import React from 'react';

const BeachesSection = () => {
    return (
      <div className="py-12 bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Nuestras Playas</h2>
          <p className="text-gray-600 mb-8">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {/* Repeat this block for each beach */}
          <div className="rounded overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/13344010/pexels-photo-13344010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Playa 1" className="w-full h-64 object-cover" />
            <div className="px-6 py-4 bg-orange-500 text-white text-xl font-bold">
              Playa 1
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/9527770/pexels-photo-9527770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Playa 1" className="w-full h-64 object-cover" />
            <div className="px-6 py-4 bg-orange-500 text-white text-xl font-bold">
              Playa 1
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/15931909/pexels-photo-15931909/free-photo-of-isla-daku-siargao-filipinas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Playa 1" className="w-full h-64 object-cover" />
            <div className="px-6 py-4 bg-orange-500 text-white text-xl font-bold">
              Playa 1
            </div>
          </div>
        </div>
      </div>
    );
  };

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
  

  export default BeachesSection;