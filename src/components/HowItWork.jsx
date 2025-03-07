import React from "react";
import { PiAmbulance } from "react-icons/pi";
import { PiContactlessPayment } from "react-icons/pi";
import { MdOutlineContactEmergency } from "react-icons/md";

function HowItWorks({ scrollRef }) {
  const info = [
    {
      icon: <PiAmbulance className="text-3xl text-pink-600 " />,
      title: "Register Your Ambulance",
      scribe:
        "Hospitals and private owners can list their ambulances and earn by providing emergency services.",
    },
    {
      icon: <PiContactlessPayment className="text-3xl text-blue-600 " />,
      title: "Seamless Payments",
      scribe:
        "Pay conveniently for ambulance services using cash or card after each ride.",
    },
    {
      icon: <MdOutlineContactEmergency className="text-3xl text-green-500" />,
      title: "Stay Prepared",
      scribe:
        "Save emergency contacts, set preferred hospitals, and access life-saving first-aid tips anytime.",
    },
  ];

  return (
    <div ref={scrollRef}>
      <header className="text-center text-3xl text-cyan-950 font-bold mb-20">
        WE HAVE MORE FOR YOU!
      </header>
      <div className="flex flex-wrap justify-center gap-20 p-6 mb-10">
        {info.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 shadow-sm flex flex-col items-start text-left w-80 hover:scale-105 transition-transform border-t-2`}
          >
            <div className="mb-5 mt-5">{item.icon}</div>
            <h4 className="text-xl font-semibold text-cyan-950 mb-5">
              {item.title}
            </h4>
            <p className="text-gray-600 mb-5 text-lg">{item.scribe}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
