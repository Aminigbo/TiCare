import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Quick from "../components/Quick";
import Qualities from "../components/Qualities";
import HowItWorks from "../components/HowItWork";
import FAQ from "../components/FAQ";
import Security from "../components/Security";
import Download from "../components/Download";
import Foot from "../components/Foot";

function Home() {
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handles scrolling when clicked
  const handleScroll = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true }); // Ensures the navigation happens without full reload
    }
    setTimeout(() => scrollToSection(scrollRef), 100); // Ensures smooth transition
  };

  const handleScroll1 = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
    setTimeout(() => scrollToSection(scrollRef1), 100);
  };

  // Scrolls to the correct section when the URL hash changes
  useEffect(() => {
    if (location.hash === "#how-it-works") {
      scrollToSection(scrollRef);
    } else if (location.hash === "#benefits") {
      scrollToSection(scrollRef1);
    }
  }, [location]);

  return (
    <div>
      <Header handleScroll={handleScroll} handleScroll1={handleScroll1} />
      <Hero />
      <Quick />
      <Qualities />
      <div ref={scrollRef}>
        <HowItWorks />
      </div>
      <Security />
      <div ref={scrollRef1}>
        <FAQ />
      </div>
      <Download />
      <Foot />
    </div>
  );
}

export default Home;
