import React from "react";
// import { Buffer } from "buffer";
import { IoIosPin } from "react-icons/io";
import Box1 from "../assets/Images/Box1.png";
// import Box2 from '../assets/Images/Box2.png';
const ExtendedPackage = ({ pack,index }) => {
  // console.log(index+1);
  const className = `tour-Box${index + 1}`;
  console.log(className);
  return (
    <div className="mainContainer-extended">
        {console.log(index+1)}
        <div className={className}>
          <div>
              <img
                alt="Image1"
                src={Box1}
                className="Pack-Image1"
              />
          </div>
          <div>
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
              <button className="tour-button1">Book</button>
              <button className="tour-button2">Enquiry</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ExtendedPackage;
