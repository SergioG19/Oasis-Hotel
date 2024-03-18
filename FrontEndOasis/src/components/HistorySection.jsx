import React from 'react';

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

  export default HistorySection ;