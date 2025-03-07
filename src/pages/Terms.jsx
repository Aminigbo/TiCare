import React from "react";
import Image from "../assets/images/Ticare App T & C-images-0.jpg";
import Image1 from "../assets/images/Ticare App T & C-images-1.jpg";
import Image2 from "../assets/images/Ticare App T & C-images-2.jpg";
import Image3 from "../assets/images/Ticare App T & C-images-3.jpg";
import Header from "../components/Header";

function Terms() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center space-y-6 p-4 md:p-8 bg-gray-50">
        {[Image, Image1, Image2, Image3].map((imgSrc, index) => (
          <div key={index} className="w-full max-w-4xl">
            <img
              src={imgSrc}
              alt={`Terms and Conditions Page ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Terms;
