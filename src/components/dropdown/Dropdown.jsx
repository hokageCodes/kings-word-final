import React from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown({ isOpen, toggle }) {
    return (
        <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? 'block' : 'hidden'}`}>
          <div className="py-1">
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Calgary</Link>
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Toronto</Link>
            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Vancuover</Link>
          </div>
        </div>
      );
}

