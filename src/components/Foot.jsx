import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/Screenshot 2025-03-06 at 19.18.03 1.png";

function Foot() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        {/* Left Section */}
        <div className="md:w-1/3">
          <img src={Image} alt="LagosRide Logo" className="w-30 mb-4" />
          <span className="text-white font-semibold mt-4 block text-sm">
            In Emergencies, Every Second Counts.
          </span>
          <p className="text-white text-sm leading-relaxed">
            At TiCare, we believe that getting urgent medical help should be
            fast, seamless, and reliable. Whether at home, work, or on the road,
            you deserve swift emergency response at the tap of a button—because
            your safety is our priority.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-8">
          {/* Explore Section */}
          <div>
            <h5 className="text-lg font-bold text-white">EXPLORE</h5>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-gray-400 transition"
                >
                  How to use
                </Link>
              </li>
              <li>
                <Link
                  to="/terms&conditions"
                  className="text-white hover:text-gray-400 transition"
                >
                  Terms& Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white hover:text-gray-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-bold text-white">CONTACT US</h5>
            <p className="text-white mt-2 text-sm">
             Port Harcourt, Rivers State
            </p>
            <p className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-gray-400 transition"
              >
                (+234) 9067964607
              </Link>
            </p>
            <p className="mt-2">
              <Link
                to="mailto:support@lagosride.com"
                className="text-white hover:text-gray-400 transition"
              >
                hello@ticareapp.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
