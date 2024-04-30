import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import Logo from '/assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-black text-white shadow-lg z-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-28 md:h-24 lg:h-32" />
          </Link>
          {/* Primary Nav (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="py-2 px-3 text-lg font-semibold">Home</Link>
            <Link to="/about" className="py-2 px-3 text-lg font-semibold">About</Link>
            <Link to="/connect" className="py-2 px-3 text-lg font-semibold">Connect</Link>
            <Link to="/give" className="py-2 px-3 text-lg font-semibold">Give</Link>
            <Link to="/listen" className="py-2 px-3 text-lg font-semibold">Listen</Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center py-2 px-3 text-lg font-semibold">
                Locations <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} />
            </div>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center p-2">
              {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute w-full transform top-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out h-screen bg-black md:hidden z-40`}>
        <div className="flex flex-col items-center space-y-4 pt-24">
          <Link to="/" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Home</Link>
          <Link to="/about" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">About</Link>
          <Link to="/connect" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Connect</Link>
          <Link to="/give" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Give</Link>
          <Link to="/listen" className="block py-4 px-8 text-lg font-bold hover:bg-gray-700 w-full text-center">Listen</Link>
          <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center py-2 px-3 text-lg font-semibold">
                Locations <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
