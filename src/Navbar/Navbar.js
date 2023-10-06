import React, { useState,useEffect } from 'react';
import "./Navbar.css"
import img from "../assets/options.png"
const Navbar=()=> {
  const [isNavOpen, setIsNavOpen] = useState(false);
 
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  
  return (
    <nav className="navbar">
        <h1 className='header'>Ash Enterprices</h1>
      <button id="navbar-button" onClick={toggleNav}>
        
        <img src={img} alt="Button Image" />
      </button>
      <div className={`navbar-contents ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
