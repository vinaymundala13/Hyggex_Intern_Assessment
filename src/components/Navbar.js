
import React from 'react';
import logo from '../asserts/logo.jpg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-20 mt-4 md:mt-8">
      <div className="ml-4 md:ml-0">
        <img src={logo} alt="Logo" className="w-24 md:w-36 h-auto" />
      </div>

      <div className="flex items-center space-x-4 md:space-x-8">
        <ul className="hidden md:flex space-x-12">
          <li><a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Flashcards</a></li>
          <li><a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Contact</a></li>
          <li><a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">FAQ</a></li>
        </ul>

        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:bg-blue-600 focus:outline-none md:px-6 md:py-2">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
