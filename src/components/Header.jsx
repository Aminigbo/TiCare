/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/images/Screenshot 2025-03-06 at 19.18.03 1.png";
import { Link } from "react-router-dom";

function Header({ handleScroll, handleScroll1 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation and scrolling
  const handleNavigation = (scrollFunction) => {
    if (location.pathname !== "/") {
      navigate("/"); // Go to homepage
      setTimeout(() => {
        scrollFunction(); // Scroll after navigating
      }, 300); // Delay to ensure page load
    } else {
      scrollFunction();
    }
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <header className="relative top-0 w-full z-40 px-6 py-4 transition-all duration-300 bg-white md:bg-black md:opacity-85">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="ml-4 md:ml-20">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={Image} alt="Logo" className="h-11 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500 p-1.5 focus:outline-none mr-5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // Close icon
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger icon
            )}
          </svg>
        </button>

        <nav
          className={`absolute right-0 left-0 top-16 w-full md:static md:w-auto md:flex md:items-center md:space-x-6 transition-all mr-20 duration-300 ${
            menuOpen
              ? "bg-black shadow-lg py-4"
              : "hidden md:flex md:bg-transparent md:shadow-none"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center w-full">
            <li>
              <Link
                to="/"
                className="text-blue-500 block py-2 md:py-0 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <span
                onClick={() => handleNavigation(handleScroll)}
                className="text-white hover:text-blue-400 block py-2 md:py-0 cursor-pointer"
              >
                Features
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavigation(handleScroll1)}
                className="text-white hover:text-blue-400 block py-2 md:py-0 cursor-pointer"
              >
                FAQ
              </span>
            </li>
            <li>
              <Link
                to="/join"
                className="text-white hover:text-blue-400 block py-2 md:py-0 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Join to Ride
              </Link>
            </li>
            <li>
              <Link className="bg-white text-blue-500 p-1.5 shadow-blue-400 rounded-sm">Join to Drive</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
