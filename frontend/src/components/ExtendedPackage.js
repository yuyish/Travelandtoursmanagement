import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookEnquiryOverView from "./BookEnquiryOverview";
import { toast } from "react-toastify";
// import { Buffer } from "buffer";
import { IoIosPin } from "react-icons/io";
import Box1 from "../assets/Images/Box1.png";
// import Box1 from "../assets/Images/Box1.png";
// import Box1 from "../assets/Images/Box1.png";
import axios from "axios";
import { URL } from "./tour-package";

const ExtendedPackage = ({ pack, index }) => {
  // let rm = pack.Image;
  // console.log(rm);
  // let data = rm.data;
  // console.log(data);
  // console.log(rm);
  const navigate = useNavigate();
  const className = `tour-Box${index + 1}`;
  const imgclassname = `Pack-Image${index + 1}`;
  // const Box = `Box${index + 1}`;
  // console.log(Box);
  const name = JSON.parse(localStorage.getItem("user"));
  console.log(name);
  console.log(name._id);
  console.log(pack._id);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handlebook = async () => {
    try {
      const book = await axios.post(`${URL}/bookings/${name._id}/${pack._id}`);
      if (book) {
        toast.success("You have successfully booked the Package");
        console.log(book);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
    // navigate('/MyAccounts');
  };
  const handleenquiry = () => {
    setButtonClicked(true);
    navigate("/BookingOverview");
  };
  return (
    <>
      {buttonClicked ? (
        <BookEnquiryOverView pack={pack} />
      ) : (
        <>
          <div className="mainContainer-extended">
            <div className={className}>
              <div className="container-image-div">
                
                <img
                      alt="Image1"
                      src={Box1}
                      className={imgclassname}
                    />
              </div>
              <div className="pack-subdiv">
                <div className="tour-review">
                  <p>Great Tour</p>
                </div>
                <div className="rates">
                  <span className="Pack-name">
                    <span> {pack.packagename}</span>
                  </span>
                  <span className="Pack-rate">
                    <span>Rs{pack.price}</span>
                  </span>
                </div>
                <div className="pack-det">
                  <span className="location-icon-name">
                    <span>
                      <IoIosPin />
                      {pack.location}
                    </span>
                  </span>
                  <span className="numberof-days-plan">
                    <span>14 Days</span>
                  </span>
                  <span className="cp1">
                    <span>5 Members</span>
                  </span>
                </div>

                <div className="tour-info">
                  <span>
                    {/* The goal is to provide a seamless and enjoyable travel
                  experience for clients, whether it be for business or leisure
                  purposes. */}
                    {pack.description}
                  </span>
                </div>
                <div className="pack-buttons">
                  <button className="tour-button1" onClick={handlebook}>
                    Book
                  </button>
                  <button className="tour-button2" onClick={handleenquiry}>
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ExtendedPackage;
