import React from "react";
import Image from "../assets/images/TiCare Privacy Policy-images-0.jpg";
import Image1 from "../assets/images/TiCare Privacy Policy-images-1.jpg";
import Image2 from "../assets/images/TiCare Privacy Policy-images-2.jpg";
import Header from "../components/Header";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center space-y-6 p-4 md:p-8 bg-gray-50">
        <div className="w-full max-w-4xl">
          <img
            src={Image}
            alt="Privacy Policy Page 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full max-w-4xl">
          <img
            src={Image1}
            alt="Privacy Policy Page 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full max-w-4xl">
          <img
            src={Image2}
            alt="Privacy Policy Page 3"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
