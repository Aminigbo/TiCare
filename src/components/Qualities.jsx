import React from "react";
import { LuCar } from "react-icons/lu";
import { IoCarSportSharp } from "react-icons/io5";
import { TbShieldStar } from "react-icons/tb";
import Image from "../assets/images/TiCare Transit (1).png";

function Qualities() {
  return (
    <div className="relative w-full flex flex-col sm:flex-row px-6 py-12">
      {/* Image Section (Now on Top in Mobile) */}
      <div className="relative z-10 bottom-20 w-full flex justify-center">
        <img
          src={Image}
          alt="Qualities"
          className="w-full max-w-lg h-auto object-cover lg:max-w-4xl lg:h-auto"
        />
      </div>

      {/* Background Boxes (Stacked Below in Mobile) */}
      <div className="relative w-full flex flex-col sm:flex-row sm:justify-center sm:gap-6 lg:absolute lg:inset-0 lg:h-full">
        {/* Top Left Box */}
        <div
          className="w-full max-w-xs p-6 bg-pink-200 bg-opacity-90 shadow-lg rounded-lg mx-auto sm:flex-1
          lg:absolute lg:top-40 lg:left-40"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2.5 rounded-full">
              <LuCar className="text-blue-500 text-xl font-bold" />
            </div>
            <h5 className="text-sm font-bold">INSTANT AMBULANCE REQUEST</h5>
          </div>
          <p className="text-gray-700 mt-2 text-center lg:text-left">
            Get immediate medical assistance by booking the nearest available
            ambulance with just a tap.
          </p>
        </div>

        {/* Top Right Box */}
        <div
          className="w-full max-w-xs p-6 bg-blue-200 bg-opacity-90 shadow-lg rounded-lg mx-auto sm:flex-1
          lg:absolute lg:top-30 lg:right-15"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2.5 rounded-full">
              <IoCarSportSharp className="text-blue-500 text-xl font-bold" />
            </div>
            <h5 className="text-sm font-bold"> SAFE & RELIABLE TRANSPORT</h5>
          </div>
          <p className="text-gray-700 mt-2 text-center lg:text-left">
            Well-equipped ambulances operated by trained professionals ensure
            you get the best emergency care on the way.
          </p>
        </div>

        {/* Bottom Box */}
        <div
          className="w-full max-w-xs p-6 bg-orange-200 bg-opacity-90 shadow-lg rounded-lg mx-auto sm:flex-1
          lg:absolute lg:bottom-45 lg:left-1/5 lg:-translate-x-1/2"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2.5 rounded-full">
              <TbShieldStar className="text-blue-500 text-xl font-bold" />
            </div>
            <h5 className="text-sm font-bold">BUILT-IN SAFETY FEATURES</h5>
          </div>
          <p className="text-gray-700 mt-2 text-center lg:text-left">
            Real-time tracking, verified service providers, and emergency
            contact alerts give you peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Qualities;
