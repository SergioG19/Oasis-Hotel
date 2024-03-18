import React from 'react';

const HeroSection = () => {
    return (
      <div className="flex flex-col md:flex-row md:items-center bg-white">
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">Oasis El Mejor Hotel De Valera</h1>
          <p className="mt-4 text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
          <button className="mt-8 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition duration-200">
            HAZ CLIC AQUÍ
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.pexels.com/photos/3125852/pexels-photo-3125852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Oasis Hotel" className="w-full h-auto object-cover" />
        </div>
      </div>
    );
  };

  export default HeroSection;