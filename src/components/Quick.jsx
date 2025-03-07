import React from "react";
import { MdOutlineEmergencyShare } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";
import { RiServiceFill } from "react-icons/ri";

export default function Quick() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10 mt-20">
      {/* Left Side */}
      <div className="space-y-6">
        <h2 className="text-[40px] font-semibold text-blue-600">
          A Quick Glance At What Makes Us Special
        </h2>
        <p className="text-gray-700">
          TiCare is a healthtech solution designed to provide fast and reliable
          ambulance services at the tap of a button.
        </p>
        <p className="text-gray-700">
          Whether it's an emergency at home, on the road, or anywhere else,
          TiCare connects you to the nearest available ambulance for immediate
          assistance.
        </p>
      </div>

      {/* Right Side Box */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
        {/* Features */}
        <div className="space-y-6">
          {/* Feature Item */}
          <div className="flex items-start space-x-4 p-4 border-b-1">
            <div className="bg-pink-100 p-4 rounded-full flex items-center justify-center">
              <MdOutlineEmergencyShare className="text-2xl text-pink-900" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Instant Access to Emergency Care
              </h4>
              <p className="text-gray-700 text-sm">
                Request an ambulance in seconds, and help arrives at your
                location.
              </p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start space-x-4 p-4 border-b-1">
            <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
              <SiContactlesspayment className="text-2xl text-green-900" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Seamless Payments
              </h4>
              <p className="text-gray-700 text-sm">
                Pay easily with cash or card after the ride.
              </p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-start space-x-4 p-4">
            <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
              <RiServiceFill className="text-2xl text-blue-900" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Empowering Service Providers
              </h4>
              <p className="text-gray-700 text-sm">
                Hospitals and individuals with ambulances can register and earn
                by providing lifesaving services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
