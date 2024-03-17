import React from 'react';
import './index.css';

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

const HistorySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12">
      <div className="md:w-1/2">
        {/* Replace with the path to your actual image */}
        <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our History" className="w-full h-auto object-cover" />
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum at varius. Cras ornare arcu dui vivamus arcu felis. Proin libero nunc consequat interdum varius sit amet. Ut sem nulla pharetra diam sit. In cursus turpis massa tincidunt dui ut ornare lectus. Sed turpis tincidunt id aliquet risus feugiat in. Sit amet dictum sit amet justo donec enim diam. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Risus nullam eget felis eget nunc. Egestas egestas fringilla phasellus faucibus.
        </p>
        {/* Social media icons */}
        <div className="flex justify-center md:justify-start mt-4">
          <a href="https://facebook.com" className="mx-2 text-gray-600 hover:text-gray-900">
            {/* Replace these with actual icons or images */}
            <span className="text-2xl">f</span>
          </a>
          <a href="https://twitter.com" className="mx-2 text-gray-600 hover:text-gray-900">
            <span className="text-2xl">t</span>
          </a>
          <a href="https://linkedin.com" className="mx-2 text-gray-600 hover:text-gray-900">
            <span className="text-2xl">in</span>
          </a>
        </div>
      </div>
    </div>
  );
};

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

const BlogSection = () => {
  return (
    <div className="py-12 bg-yellow-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Nuestro Blog</h2>
        <p className="text-gray-600 mb-8">
          Mantente Informado con las últimas noticias y guías turísticas que ofrecemos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        {/* Repeat this block for each blog post */}
        <div className="bg-orange-500 p-4 shadow-md rounded-lg">
          <img src="https://images.pexels.com/photos/14652573/pexels-photo-14652573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Title" className="w-full h-64 object-cover mb-3" />
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-gray-600">4 de marzo del 2024</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Añade Aquí Tu Texto De Cabecera</h3>
          <p className="text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
        <div className="bg-orange-500 p-4 shadow-md rounded-lg">
          <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Title" className="w-full h-64 object-cover mb-3" />
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-gray-600">4 de marzo del 2024</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Añade Aquí Tu Texto De Cabecera</h3>
          <p className="text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
        <div className="bg-orange-500 p-4 shadow-md rounded-lg">
          <img src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Title" className="w-full h-64 object-cover mb-3" />
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-gray-600">4 de marzo del 2024</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Añade Aquí Tu Texto De Cabecera</h3>
          <p className="text-gray-600">
            Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.
          </p>
        </div>
      </div>
    </div>
  );
};

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
