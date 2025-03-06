import React from "react";
import Image from "../assets/images/apple-store.webp";
import Image2 from "../assets/images/google-store.webp";
import { Link } from "react-router-dom";

function Download() {
  return (
    <div className="w-full flex flex-col items-center text-center px-6 py-12 bg-gray-100">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
        Have An Emergency? Download Now
      </h1>
      <p className="text-gray-600 mt-2 max-w-lg">
        Refer a friend to win free rides, concert tickets, and so much more on
        LagosRide.
      </p>

      {/* Store Links */}
      <div className="mt-6">
        <p className="text-gray-700 text-lg font-medium">
          Available for all mobile devices
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <img
            src={Image}
            alt="Apple Store"
            className="w-40 md:w-44 cursor-pointer hover:scale-105 transition-transform duration-300"
          />

          <img
            src={Image2}
            alt="Google Store"
            className="w-40 md:w-44 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Download;
