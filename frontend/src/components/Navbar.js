import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/"> <img src="" alt="Bagpact" /></a>
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
          {/* <li className="nav-item">
            <Link to="/contact" className="nav-link">
              <i className="fas fa-envelope"></i>
              <span className="link-text">Contact Us</span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="bttn">
      <ul className="navbar-nav">
      <li className="nav-item">
            <Link to="/login" className="nav-link btn-login">
              <i className="fas fa-sign-in-alt"></i>
              <span className="link-text">Login</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link btn-signup">
              <i className="fas fa-user-plus"></i>
              <span className="link-text">Signup</span>
            </Link>
          </li>
        </ul>
      </div>
      </nav>
    </>
  );
}

export default Navbar;
