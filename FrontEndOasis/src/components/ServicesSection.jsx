import React from 'react';

const ServicesSection = () => {
    return (
      <div className="py-12 bg-yellow-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-600 mb-3">Nuestros Servicios</h2>
          <p className="text-gray-600 mb-8">This text briefly introduces visitors to your main services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8">
          {/* Repeat this block for each service */}
          <div className="flex flex-col items-center">
            <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 1" className="w-full h-64 object-cover mb-3" />
            <h3 className="text-lg font-bold text-gray-800">Service 1</h3>
            <p className="text-gray-600 text-center">
              A short description of the service and how the visitor will benefit from it.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 1" className="w-full h-64 object-cover mb-3" />
            <h3 className="text-lg font-bold text-gray-800">Service 1</h3>
            <p className="text-gray-600 text-center">
              A short description of the service and how the visitor will benefit from it.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 1" className="w-full h-64 object-cover mb-3" />
            <h3 className="text-lg font-bold text-gray-800">Service 1</h3>
            <p className="text-gray-600 text-center">
              A short description of the service and how the visitor will benefit from it.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Service 1" className="w-full h-64 object-cover mb-3" />
            <h3 className="text-lg font-bold text-gray-800">Service 1</h3>
            <p className="text-gray-600 text-center">
              A short description of the service and how the visitor will benefit from it.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition duration-200">
            Ver Todo
          </button>
        </div>
      </div>
    );
  };

  export default ServicesSection ;