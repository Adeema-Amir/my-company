/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import DarkModeToggle from './DarkModeToggle';


const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <a href="/" target='_blank' className="text-white">
                <h1 className='text-3xl text-white font-extrabold'>RanaVerse</h1>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
                <a href="/services" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </a>
                <a href="/product" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Product
                </a>
                <a href="/contact" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
                <div className="dark-mode-toggle">
          <DarkModeToggle />
        </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/services" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="/product" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Product
            </a>
            <a href="/contact" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <div className="dark-mode-toggle">
          <DarkModeToggle />
        </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;