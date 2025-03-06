import React from "react";
import { LuCar } from "react-icons/lu";
import { IoCarSportSharp } from "react-icons/io5";
import { TbShieldStar } from "react-icons/tb";
import Image from "../assets/images/lagosride-car2.webp";

function Qualities() {
  return (
    <div className="relative w-full flex flex-col sm:flex-row px-6 py-12">
      {/* Image Section (Now on Top in Mobile) */}
      <div className="relative z-10 w-full flex justify-center">
        <img
          src={Image}
          alt="Qualities"
          className="w-full max-w-lg h-auto object-cover lg:max-w-full lg:h-auto"
        />
      </div>

      {/* Background Boxes (Stacked Below in Mobile) */}
      <div className="relative w-full flex flex-col sm:flex-row sm:justify-center sm:gap-6 lg:absolute lg:inset-0 lg:h-full">
        {/* Top Left Box */}
        <div
          className="w-full max-w-xs p-6 bg-pink-200 bg-opacity-90 shadow-lg rounded-lg mx-auto sm:flex-1
          lg:absolute lg:top-0 lg:left-10"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2.5 rounded-full">
              <LuCar className="text-blue-500 text-xl font-bold" />
            </div>
            <h5 className="text-lg font-bold">Fixed Daily Transit</h5>
          </div>
          <p className="text-gray-700 mt-2 text-center lg:text-left">
            Take the edge off by scheduling daily recurring trips that take you
            to and from work, church, mosque or anywhere.
          </p>
        </div>

        {/* Top Right Box */}
        <div
          className="w-full max-w-xs p-6 bg-blue-200 bg-opacity-90 shadow-lg rounded-lg mx-auto sm:flex-1
          lg:absolute lg:top-20 lg:right-20"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2.5 rounded-full">
              <IoCarSportSharp className="text-blue-500 text-xl font-bold" />
            </div>
            <h5 className="text-lg font-bold">Ride In Style</h5>
          </div>
          <p className="text-gray-700 mt-2 text-center lg:text-left">
            Enjoy brand-new cars and share your transit moments with friends.
          </p>
        </div>

        {/* Bottom Box */}
        <div
          className="w-full max-w-xs p-6 bg-orange-200 bg-opacity-90 shadow-lg rounded-lg mx-auto sm:flex-1
          lg:absolute lg:bottom-0 lg:left-1/2.5 lg:-translate-x-1/2"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2.5 rounded-full">
              <TbShieldStar className="text-blue-500 text-xl font-bold" />
            </div>
            <h5 className="text-lg font-bold">Security</h5>
          </div>
          <p className="text-gray-700 mt-2 text-center lg:text-left">
            AI-enabled dashcams and panic/SOS buttons ensure your safety in
            transit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Qualities;
