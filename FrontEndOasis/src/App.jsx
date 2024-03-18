import React from 'react';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HistorySection from './components/HistorySection';
import ServicesSection from './components/ServicesSection';
import MembershipSection from './components/MembershipSection';
import BlogSection  from './components/BlogSection';
import BeachesSection from './components/BeachesSection';


const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <HistorySection />
      <ServicesSection />
      <MembershipSection />
      <BlogSection />
      <BeachesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
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

const ContactSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
          <div className="mb-4">
            <h4 className="font-bold text-gray-600">Phone</h4>
            <p>+1 234 567 890</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold text-gray-600">Address</h4>
            <p>Riverside Building, County Hall, South Bank, London SE1 7PB, United Kingdom</p>
          </div>
          <div className="flex justify-start space-x-4">
            {/* Add social icons here */}
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
              {/* Replace with actual icons */}
              <span className="text-2xl">f</span>
            </a>
            {/* More social icons */}
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Formulario De Contacto</h2>
          <form className="space-y-4">
            <InputField label="Nombre" type="text" name="firstName" placeholder="Nombre" required />
            <InputField label="Apellido" type="text" name="lastName" placeholder="Apellido" required />
            <InputField label="Email" type="email" name="email" placeholder="Email" required />
            <InputField label="Fecha de Entrada" type="date" name="checkIn" required />
            <InputField label="Fecha de Salida" type="date" name="checkOut" required />
            <InputField label="Número de teléfono" type="tel" name="phone" placeholder="Teléfono" required />
            <SelectInput label="Habitaciones Disponibles" name="rooms" options={['Habitación Simple', 'Habitación Doble', 'Suite']} required />
            {/* Add more input fields as needed */}
            <button type="submit" className="px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition duration-200">
              Enviar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, name, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700">{label}{required && ' *'}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>
  );
};

const SelectInput = ({ label, name, options, required }) => (
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <div className="relative">
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={name}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.533 0.481-1.408 0.481-1.941 0l-4.695-4.502c-0.408-.418-0.436-1.17 0-1.615z" />
        </svg>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-black">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <img
              className="h-10"
              src="path-to-logo.png"
              alt="Company Logo"
              // Replace with your actual logo
            />
            <p className="mt-8 text-gray-500 text-base">
              Summarize your business so the visitor can learn about your offerings from any page on your website.
            </p>
            {/* Social media icons */}
            <div className="mt-8 flex">
              {/* Add social media links here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold">Services</h4>
                <ul className="mt-4 space-y-4">
                  {/* List services here */}
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                  <li>Service 4</li>
                  <li>Service 5</li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold">Quick Links</h4>
                <ul className="mt-4 space-y-4">
                  {/* List quick links here */}
                  <li>Home</li>
                  <li>About</li>
                  <li>Offerings</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h4 className="text-sm font-semibold">Get In Touch</h4>
                <ul className="mt-4 space-y-4">
                  <li>123 Main Street New York, NY 10001</li>
                  <li>Email: contact@mysite.com</li>
                  <li>Phone: 123-456-7890</li>
                  <li>Hours: Mon-Fri 9:00AM - 5:00PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-black-400 xl:text-center">
            © 2024 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};





export default App;
