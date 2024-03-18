import React from 'react';

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
  

export default Footer;