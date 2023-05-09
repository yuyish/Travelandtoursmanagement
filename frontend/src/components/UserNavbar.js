import React, { useState} from 'react';
import { Link } from "react-router-dom";    // Important imports from packages
import logo from '../assets/Images/Logo.png'
import profile from '../assets/Images/profileimg.png'
import user from '../assets/Images/user.png'
import booking from '../assets/Images/booking.png'
import settings from '../assets/Images/settings.png'
import Logout from '../assets/Images/logout.png'
import '../assets/Styles/usernavbar.css'
const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const storedUsername = JSON.parse(localStorage.getItem("user"));
  let name = storedUsername.name;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <header data-thq="thq-navbar" className="home-navbar">
        <a href="/">
          <img src={logo} alt="Bagpact" className="home-logo" />
        </a>

        <div data-role="Nav" data-thq="thq-navbar-nav" className="home-menu">
          <nav
            data-role="Nav"
            data-thq="thq-navbar-nav-links"
            className="home-nav-items"
          >
            <Link to="/" className="home-L">
              <span className="home-home">Home</span>
            </Link>
            <Link to="/Packages" className="home-L">
              <span className="home-packages">Packages</span>
            </Link>
            <Link to="/Services" className="home-L">
              <span className="home-services">Services</span>
            </Link>
            <Link to="/about" className="home-L">
              <span className="home-about">About us</span>
            </Link>
          </nav>
        </div>

        <div className="user-profile" onClick={toggleMenu}>
          <img src={profile} alt="UserProfile" className="user-pic" />
          
        </div>

        {isMenuOpen && (
          <div className="sub-menu-wrap">
            <div className="sub-menu">
            <span className="username">Hello {name}</span>
              <Link to='/MyAccounts' className="sub-menu-link" >
                <img src={user} alt="user" />
                <p>My Accounts</p>
                <span>&gt;</span>
              </Link>
              <Link to="/" className="sub-menu-link">
                <img src={booking} alt="booking" />
                <p>Bookings</p>
                <span>&gt;</span>
              </Link>
              <Link className="sub-menu-link">
                <img src={settings} alt="setting" />
                <p>Settings</p>
                <span>&gt;</span>
              </Link>
              <Link className="sub-menu-link" >
                <img src={Logout} alt="logout" />
                <p>Log Out</p>
                <span>&gt;</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};


export default Home
