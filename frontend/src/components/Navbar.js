import React, { useState, useEffect } from "react"; // Important imports from packages
import { Link, useNavigate } from "react-router-dom"; // Important imports from packages
import logo from "../assets/Images/Logo.png";

import profile from "../assets/Images/profileimg.png";
import user from "../assets/Images/user.png";
import booking from "../assets/Images/booking.png";
import settings from "../assets/Images/settings.png";
import Logout from "../assets/Images/logout.png";
import "../assets/Styles/usernavbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [storedUsername, setStoredUsername] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
      setStoredUsername(user.name);
    } else {
      return false;
    }
  };
  const handleLogout = () => {
    // clear local storage and set loggedIn to false
    localStorage.clear();
    setLoggedIn(false);

    // navigate to home page
    navigate("/login");
    // you can also force a page reload to ensure that all components re-render
    window.location.reload();
  };

  // check if user is logged in when the component mounts
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            {" "}
            <img src={logo} alt="Bagpact" id="Logo" />
          </a>
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
              <Link to="/About" className="nav-link">
                <i className="fas fa-info-circle"></i>
                <span className="link-text">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navitemright">
          {loggedIn ? (
            <>
              <div className="user-profile" onClick={toggleMenu}>
                <img src={profile} alt="UserProfile" className="user-pic" />
              </div>

              {isMenuOpen && (
                <div className="sub-menu-wrap">
                  <div className="sub-menu">
                    <span className="username">Hello {storedUsername}</span>
                    <Link to="/MyAccounts" className="sub-menu-link">
                      <img src={user} alt="user" />
                      <p>My Accounts</p>
                      <span>&gt;</span>
                    </Link>
                    <Link to="/MyAccounts" className="sub-menu-link">
                      <img src={booking} alt="booking" />
                      <p>Bookings</p>
                      <span>&gt;</span>
                    </Link>
                    <Link className="sub-menu-link">
                      <img src={settings} alt="setting" />
                      <p>Settings</p>
                      <span>&gt;</span>
                    </Link>
                    <Link className="sub-menu-link" onClick={handleLogout}>
                      <img src={Logout} alt="logout"  />
                      <p>Log Out</p>
                      <span>&gt;</span>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ) : (
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
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
