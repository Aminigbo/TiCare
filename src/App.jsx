/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Aos from "aos";
// import "aos/dist/aos.css";

function App() {
  // useEffect(() => {
  //   Aos.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 50,
  //   });
  //   Aos.refresh();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
