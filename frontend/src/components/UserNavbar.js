import React from "react";    // Important imports from packages
import { Link } from "react-router-dom";    // Important imports from packages
import { useState } from 'react';

function UserNavbar() {
    const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/"> <img src="./Images/Logo.png" alt="Bagpact"  id="Logo"/></a>
        </div>
        <div className="navitemmid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i>
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Packages" className="nav-link">
              <i className="fas fa-sign-in-alt"></i>
              <span className="link-text">Packages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Services" className="nav-link">
              <i className="fas fa-user-plus"></i>
              <span className="link-text">Services</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-info-circle"></i>
              <span className="link-text">About Us</span>
            </Link>
          </li>
        </ul>
      </div>
        <div className="bttn">
        <button onClick={toggleMenu} className="bon">Dropdown</button>
      {isOpen && (
        <ul>
          <li>Profile</li>
          <li>Log Out</li>
        </ul>
      )}
        </div>
      </nav>
    </>
  );
}
export default UserNavbar;
