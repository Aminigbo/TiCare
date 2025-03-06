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
            Add Merchant To Your Pocket Voucher Account
          </h1>
          <p className="text-lg sm:text-lg text-gray-700 mb-6">
            Merchant vouchers can be used as means of payment for their products
            and services.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-2xs mb-4">
          <div className="bg-gray-100 p-4 sm:p-5 rounded-full">
            <FaUsersViewfinder className="text-cyan-950 w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-950">
              Find Merchant
            </h4>
            <p className="text-gray-600 text-base sm:text-lg">
              Select a merchant from our list of merchants and add to your
              account.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-white p-5 rounded-lg shadow-sm">
          <div className="bg-green-100 p-4 sm:p-5 rounded-full">
            <RiRefund2Line className="text-green-700 w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-cyan-950">
              Fund & Spend
            </h4>
            <p className="text-gray-600 text-base sm:text-lg">
              Fund your merchant wallet, create voucher tokens, share with
              friends and spend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
