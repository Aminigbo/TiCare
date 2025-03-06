/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Image from "../assets/images/Screenshot 2025-03-06 at 19.18.03 1.png";

function Header({ handleScroll, handleScroll1 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Change background on scroll
  useEffect(() => {
    const headerHandleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", headerHandleScroll);
    return () => window.removeEventListener("scroll", headerHandleScroll);
  }, []);

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
    <header
      className={`w-full fixed top-0 left-0 z-50 px-6 py-4 transition-all duration-300 overflow-hidden ${
        isMobile ? "bg-white shadow-lg" : "bg-black opacity-85"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="ml-4 md:ml-20">
          <Link to="/">
            <img src={Image} alt="Logo" className="h-15 w-auto transition-all" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 p-2 rounded-md focus:outline-none mr-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute right-0 left-0 top-16 w-full md:static md:w-auto md:flex md:items-center mr-20 md:space-x-8 transition-all duration-300 z-50 ${
            menuOpen
              ? "flex flex-col bg-gray-900 text-white shadow-lg py-6"
              : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-center text-lg">
            <li>
              <Link
                to="/"
                className="text-blue-500 hover:text-blue-400 text-lg block py-2 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <span
                onClick={() => handleNavigation(handleScroll)}
                className="cursor-pointer text-white hover:text-blue-400 block py-2 md:py-0 transition duration-300"
              >
                Search trips
              </span>
            </li>
            <li>
              <span
                onClick={() => handleNavigation(handleScroll1)}
                className="cursor-pointer text-white hover:text-blue-400 block py-2 md:py-0 transition duration-300"
              >
                FAQ
              </span>
            </li>
            <li>
              <Link
                to="/join"
                className="text-white hover:text-blue-400 block py-2 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                Join to Ride
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="text-blue-600 bg-white px-2 py-1 rounded-sm shadow-blue-500 hover:shadow-none transition-all w-full md:w-auto mt-4 md:mt-0 ">
            Join to Drive
          </button>
        </nav>
      </div>
    </header>
  );
}

// Default Props to Prevent Errors
Header.defaultProps = {
  handleScroll: () => {},
  handleScroll1: () => {},
};

export default Header;
