import React from 'react';

const Features = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 text-center p-8 bg-yellow-100">
        <Feature
          icon="🏃‍♂️" // Replace with actual path to icon
          title="Atencion Rapida"
          description="Lorem fistrum por la gloria"
        />
        <Feature
          icon="🏡" // Replace with actual path to icon
          title="Ambiente Agradable"
          description="Lorem fistrum por la gloria"
        />
        <Feature
          icon="💰" // Replace with actual path to icon
          title="Precios Economicos"
          description="Lorem fistrum por la gloria"
        />
      </div>
    );
  };

  const Feature = ({ icon, title, description }) => {
    return (
      <div className="p-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    );
  };

  export default Features ;