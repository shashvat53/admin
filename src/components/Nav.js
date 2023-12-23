// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md	w-full">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="text-black text-lg font-semibold">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/dashboard" className="text-black text-xl">
            admin
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            admin
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-blue-600 bg-opacity-75">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/dashboard" className="text-white py-2">
              Log out
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
