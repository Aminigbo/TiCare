import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbCurrencyNaira } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";

export default function Quick() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10 mt-20">
      {/* Left Side */}
      <div className="space-y-6">
        <h2 className="text-[40px] font-semibold text-blue-600">
          A Quick Glance At What Makes Us Special
        </h2>
        <p className="text-gray-700">
          LagosRide is a mobility solution that will allow users book and share
          the cost of a ride with similar transit patterns.
        </p>
        <p className="text-gray-700">
          It will link users up based on their preferred pick-up and drop-off
          points, each not more than 1km apart respectively, and a pick-up time
          not more than 5mins apart.
        </p>
      </div>

      {/* Right Side Box */}
      <div className="border-t-20 border-blue-400 bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Features */}
        <div className="flex items-center space-x-4 pb-4 border-b border-gray-300">
          <div className="bg-pink-100 p-5 rounded-full">
            <HiOutlineUsers className="text-lg text-pink-900" />
          </div>
          <p className="text-gray-800">
            Reduces the frequency of “Single Occupancy Vehicles (SOV)” resulting
            from cheaper fares per trip.
          </p>
        </div>

        <div className="flex items-center space-x-4 py-4 border-b border-gray-300">
          <div className="bg-green-100 p-5 rounded-full">
            <TbCurrencyNaira className="text-lg text-green-900" />
          </div>
          <p className="text-gray-800">
            You will now enjoy the comfort of a car ride but pay less.
          </p>
        </div>

        <div className="flex items-center space-x-4 pt-4">
          <div className="bg-blue-100 p-5 rounded-full">
            <TfiWallet className="text-lg text-blue-900" />
          </div>
          <p className="text-gray-800">Drivers will earn more per trip.</p>
        </div>
      </div>
    </div>
  );
}
