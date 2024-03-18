import React from 'react';

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

  export default ContactSection;