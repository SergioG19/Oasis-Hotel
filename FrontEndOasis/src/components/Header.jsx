import React from 'react';

const Header = () => {
    return (
      <header className="bg-white py-4 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            className="h-10"
            src="path-to-logo.png" // Replace with your actual logo image path
            alt="Company Logo"
          />
          <nav className="hidden md:flex space-x-8 text-gray-800 font-bold">
            <a href="/" className="hover:text-blue-600">INICIO</a>
            <a href="/about" className="hover:text-blue-600">ACERCA DE</a>
            <a href="/services" className="hover:text-blue-600">SERVICIOS</a>
            <a href="/faq" className="hover:text-blue-600">PREGÚNTANOS</a>
          </nav>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 focus:outline-none font-bold">
            TRABAJAR
          </button>
        </div>
      </header>
    );
  };

  export default Header;