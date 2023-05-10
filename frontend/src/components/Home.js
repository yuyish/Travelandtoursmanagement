import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [Checkout, setCheckout] = useState(new Date());
  const [searchtext,setsearchtext]= useState();
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate('/Packages');
  }

  // const [calender, setCalender] = useState(false);

  const handlesearch = async ()=>{
    try {
      let search = await fetch(`http://localhost/api/Packages/${searchtext}`, {
      method: "post",
      body: JSON.stringify({searchtext}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    search = await search.json();
    console.log(search.location);
    if(search){
      navigate('/packages')
    }else{
      alert(`no value found with ${searchtext}`)
    }
    } catch (error) {
      console.log(error);
    }
    
  }
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
                    <input
                      type="text"
                      value={searchtext}
                      onChange={(event)=>setsearchtext(event.target.value)}
                      id="destination"
                      className="inp"
                      placeholder="Search your destination here"
                      required
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
                      placeholderText="Select Check in Date"
                    />
                 
                  </div>
                  <div className="date-box">
                    <DatePicker
                        selected={Checkout}
                        onChange={(date) => setCheckout(date)}
                        className="inp"
                        id="ip"
                        isClearable
                        showYearDropdown
                        scrollableYearDropdown
                        minDate={new Date()}
                        placeholderText="Select Check Out Date"
                      />
                  </div>
                  <div>
                  <button id="search-button" onClick={handlesearch} ><span><FaSearch className="searchIcon" /></span>  Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PacKages  */}
      <div className="PackageContent">
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
            <button id="Btn1" className="R" onClick={handleclick}>
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
            <button id="Btn1" className="R" onClick={handleclick}>
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
            <button id="Btn1" className="R" onClick={handleclick}>
              Book Packages
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      {/* How it works */}

      <div className="How-Home">
          <h2 className="h">How</h2>
          <h2>It works ?</h2>
          <p>Now Hassle of Booking Travel Packages got simplified in a click</p>
          <div className="Home-Howmaindiv">
            <div className="Home-Howcard">
              <div className="Home-How-Register"></div>
              <h4>Register</h4>
            </div>
            <div className="Home-Howcard">
              <div className="Jome-How-Login"></div>
              <h4>Log in to account</h4>
            </div>
            <div className="Home-Howcard">
              <div className="How-Bookpacakge"></div>
              <h4>Book pacakge</h4>
            </div>
            <div className="Home-Howcard">
              <div className="Home-How-Travel"></div>
              <h4>Travel</h4>
            </div>
          </div>
        </div>
{/* why choose us */}

<div className="Home-Why">
          <h2 className="w">Why</h2>
          <br />
          <h2>Choose us ?</h2>
          <div className="Home-Whymaindiv">
            <div className="Home-Howcard">
              <div className="Home-Why-Service"></div>
              <h4>Best Quality Service</h4>
            </div>
            <div className="Home-Howcard">
              <div className="Home-Why-Security"></div>
              <h4>Traveler's Security</h4>
            </div>
            <div className="Home-Howcard">
              <div className="Home-Why-Support"></div>
              <h4>24/7 Support</h4>
            </div>
          </div>
        </div>

    </>
  );
};

export default Home;
