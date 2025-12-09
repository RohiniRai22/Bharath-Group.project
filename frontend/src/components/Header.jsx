import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="relative w-full md:w-3/4 lg:w-1/2 mx-auto overflow-hidden rounded-lg">
      {/* Image with Text Overlay */}
      <div className="relative">
        <img
          className="w-full h-[500px] object-cover" // Adjust height as needed
          src={assets.header_img}
          alt="Decoration"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
            Book Appointment Service<br className='hidden sm:block' />With Bharath Groups
          </p>
          <div className="flex flex-col md:flex-row irems-center gap-3 text-white text-sm font-light">
            <p className="text-white">
              The Bharath Group Website would focus on increasing professional conduct online with services
              such as earthmoving, event management, furniture rental, roadline services, traveling services,
              catering, sounds, and lights.
            </p>
          </div>
          <a href="services" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
            Book Appointment Service<img className='w-3'  src={assets.arrow_icon}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
