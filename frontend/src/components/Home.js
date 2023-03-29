import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaCalendar } from "react-icons/fa";
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [calender, setCalender] = useState(false);

  return (
    <>
      <div className="HomeMainDiv">
        <div className="content">
          <div className="search">
            <div className="container">
              <h1 className="h1">Search Your Favorite's Places</h1>
              <p className="h4">
                Find the world’s largest collection of tours & travels packages
              </p>
              <div className="card">
                <div className="search-bar">
                  <div className="search-box">
                    <FaSearch className="searchIcon" />
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      className="inp"
                      placeholder="Search your destination here"
                    />
                  </div>
                  <div className="date-box">


                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="inp"
                      id="ip"
                      isClearable
                      showYearDropdown
                      scrollableYearDropdown
                      minDate={new Date()}
                    />
                    <FaCalendar className="DateIcon" />
                  </div>
                  <button id="search-button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PacKages  */}
      <div>
        <h1 className="head">Our</h1>
        <h1 className="PackHeading">Popular Packages</h1>
        <h3 className="PackHeading">
          Here are some popular packages you might want to consider.
        </h3>

        <div className="MainCard">
          <div className="card1">
            <div className="img1"></div>

            <h4>
              Kathmandu Nepal
              <br /> Package price: 15,000
            </h4>
            <a id="seemore" href="/Packages">
              See more
            </a>
            <button id="Btn1" className="R">
              Book Packages
            </button>
          </div>
          <div className="card2">
            <div className="img2">
              {/* <img src="../public/Images/kathmandu.jpg" alt="DestinationImage"  /> */}
            </div>

            <h4>
              Pokhara Nepal <br /> Package price: 25000
            </h4>
            <a id="seemore" href="/Packages">
              See more
            </a>
            <button id="Btn1" className="R">
              Book Packages
            </button>
          </div>
          <div className="card3">
            <div className="img3"></div>

            <h4>
              Mt. Everest Base Camp <br />
              Package Price: 50,000
            </h4>
            <a id="seemore" href="/Packages">
              See more
            </a>
            <button id="Btn1" className="R">
              Book Packages
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Home;
