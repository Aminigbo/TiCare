import React from "react";
import Image from "../assets/images/Group 5975-B7GJHOyI.png";
import { FaUsersViewfinder } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";

function Security() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-8 px-6 py-10 lg:px-20 lg:py-16 ">
      <div className="w-full ml-20 max-w-md lg:max-w-lg">
        <img
          src={Image}
          alt="Security"
          className="w-full mr-30 max-w-sm md:max-w-md lg:max-w-80"
        />
      </div>
      <div
        className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-10 mx-auto"
        data-aos="fade-left"
      >
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-950 mb-5">
            Register Ambulance Providers on TiCare
          </h1>
          <p className="text-lg sm:text-lg text-gray-700 mb-6">
            TiCare allows hospitals and private ambulance owners to offer their
            services on-demand, ensuring quick emergency response.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 mb-4">
          <div className="bg-gray-100 p-4 sm:p-5 rounded-full">
            <FaUsersViewfinder className="text-cyan-950 w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-lg font-semibold mb-2 text-cyan-950">
              Find Ambulance Providers
            </h4>
            <p className="text-gray-600 text-base sm:text-lg">
              Browse and connect with registered hospitals and individuals
              offering ambulance services.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-sm hover:shadow-lg hover:scale-105">
          <div className="bg-green-100 p-4 sm:p-5 rounded-full">
            <RiRefund2Line className="text-green-700 w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-lg font-semibold mb-2 text-cyan-950">
              Book & Pay Seamlessly
            </h4>
            <p className="text-gray-600 text-base sm:text-lg">
              Request an ambulance, track its arrival in real time, and complete
              payments via cash or card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
