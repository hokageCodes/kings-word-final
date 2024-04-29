import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 md:h-12 lg:h-14" />  {/* Responsive logo height */}
          </Link>
          {/* Primary Nav (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="py-2 px-3 text-lg font-semibold">Home</Link>
            <Link to="/about" className="py-2 px-3 text-lg font-semibold">About</Link>
            <Link to="/services" className="py-2 px-3 text-lg font-semibold">Services</Link>
            <Link to="/portfolio" className="py-2 px-3 text-lg font-semibold">Portfolio</Link>
            <Link to="/blog" className="py-2 px-3 text-lg font-semibold">Blog</Link>
            <Link to="/contact" className="py-2 px-3 text-lg font-semibold">Contact</Link>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute w-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out h-full bg-gray-800 md:hidden`}>
        <div className="flex flex-col items-center space-y-4 pt-10">
          <Link to="/" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Home</Link>
          <Link to="/about" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">About</Link>
          <Link to="/services" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Services</Link>
          <Link to="/portfolio" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Portfolio</Link>
          <Link to="/blog" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Blog</Link>
          <Link to="/contact" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
