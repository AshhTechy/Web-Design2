import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

import Navbar from "./Navbar/Navbar";
import { About } from "./Contents/About";
import { Home } from "./Contents/Home";
import { Footer } from "./Contents/Footer";
function App() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add a scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Footer />
      {showButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </>
  );
}

export default App;
