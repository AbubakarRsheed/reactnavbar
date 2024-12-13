import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assects/css/navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`}>
      <div className="logo">
        <h1>My Website</h1>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact">Services</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
