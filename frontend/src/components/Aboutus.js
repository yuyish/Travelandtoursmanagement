import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="ImageAboutus">
        <div className="about">
        <h1>About us</h1>
        <h5>Home/About Us</h5>
        </div>
      </div>
      <div className="Aboutus-content">
        <div className="Content-Img"></div>
        <div className="About-Cont">
          <div className="nm">
            <h2>About us</h2>
          </div>
          <div className="Text-space">
            <div className="text1">
              <p>
                Welcome to our tours and travels website, where we aim to make
                your travel dreams a reality! We are a team of passionate travel
                enthusiasts who love nothing more than exploring new
                destinations and creating unforgettable experiences for our
                clients.
              </p>
            </div>
            <div className="text2">
              <p>
                At our website, you'll find a wide range of travel packages and
                tour options to suit every taste and budget. Whether you're
                looking for a relaxing beach getaway, an adventurous trek
                through the mountains, or a cultural tour of historic cities,
                we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <h2>Our Gallaries</h2>
        <div className="galary-maindiv">
          <div className="imagecard">
            <div className="Gallery-img1"></div>
            <h3>Kathmandu</h3>
          </div>
          <div className="imagecard">
            <div className="Gallery-img2"></div>
            <h3>Pokhara</h3>
          </div>
          <div className="imagecard">
            <div className="Gallery-img3"></div>
            <h3>Chitwan</h3>
          </div>
          <div className="imagecard">
            <div className="Gallery-img4"></div>
            <h3>Lumbini</h3>
          </div>
        </div>
        <div className="How">
          <h2 className="h">How</h2>
          <br />
          <h2>It works ?</h2>
          <p>Now Hassle of Booking Travel Packages got simplified in a click</p>
          <div className="Howmaindiv">
            <div className="Howcard">
              <div className="How-Register"></div>
              <h4>Register</h4>
            </div>
            <div className="Howcard">
              <div className="How-Login"></div>
              <h4>Log in to account</h4>
            </div>
            <div className="Howcard">
              <div className="How-Bookpacakge"></div>
              <h4>Book pacakge</h4>
            </div>
            <div className="Howcard">
              <div className="How-Travel"></div>
              <h4>Travel</h4>
            </div>
          </div>
        </div>
        <div className="Why">
          <h2 className="w">Why</h2>
          <br />
          <h2>Choose us ?</h2>
          <div className="Whymaindiv">
            <div className="Howcard">
              <div className="Why-Service"></div>
              <h4>Best Quality Service</h4>
            </div>
            <div className="Howcard">
              <div className="Why-Security"></div>
              <h4>Traveler's Security</h4>
            </div>
            <div className="Howcard">
              <div className="Why-Support"></div>
              <h4>24/7 Support</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
