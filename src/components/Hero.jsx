import React from "react";
import Image from "../assets/images/Screenshot 2025-03-06 at 19.18.03 1.png";
import Image1 from "../assets/images/apple-store.webp";
import Image2 from "../assets/images/google-store.webp";
import BackgroundImage from "../assets/images/test.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 md:px-12 lg:px-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center lg:items-center text-center space-y-6">
        {/* Logo & Welcome Text */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg md:text-3xl font-medium mb-2">Welcome to</h4>
          <img
            src={Image}
            alt="Lagos Ride Logo"
            className="h-16 md:h-20 lg:h-30 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          Fast, Reliable Ambulance Service When Every Second Counts
        </h1>

        {/* Download Section */}
        <div className="mt-6">
          <p className="text-lg md:text-xl text-gray-300 mb-3">Download on</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link>
              <img
                src={Image1}
                alt="Apple Store"
                className="w-40 md:w-44 cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
            <Link>
              <img
                src={Image2}
                alt="Google Store"
                className="w-40 md:w-44 cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
