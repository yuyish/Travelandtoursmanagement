import React from "react";
import { FaBars,FaPowerOff,FaCog,FaBook } from "react-icons/fa";
import { useNavigate} from "react-router-dom";            // Important imports from packages

import Navbar from "./Navbar";
const UserDashboard = () => {
const navigate = useNavigate();
  // let imagechange = async()=>{
  // // let image  = document.querySelector(UserImage);
  // }
  
const logout = ()=>{
  localStorage.clear();
  if(localStorage===null){
    navigate("/Login");
    <Navbar/>
  }
  
}
  return (
    <div className="Dashboard-Main">
      <div className="dashboard">
        <h2>My Profile</h2>
        <div className="userprofile">
          <img src="" alt=" " className="UserImage" />
          <p>Name</p>
          <button className="user-Botton"><FaBars/><span className="spans">My Tours</span>  </button>
          <button className="user-Botton"><FaBook/><span className="spans1">My Bookings</span></button>
          <button className="user-Botton"><FaCog/> <span className="spans">Settings</span></button>
          <button className="user-Botton" onClick={logout}><FaPowerOff/> <span className="spans">Log out</span></button>
        </div>
      </div>
      <div className="dashboard-contents">
        <h2>Edit Profile</h2>
        <div className="detail">
          <div className="subdiv">
            <div className="user-contents">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="box-subdiv"
                required
              />
            </div>
            <div className="user-contents">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Last name"
                className="box-subdiv"
                required
              />
            </div>
          </div>
          <div className="subdiv">
          <div className="user-contents">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="box-subdiv"
              required
            />
          </div>
          <div className="user-contents">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="box-subdiv"
              required
            />
          </div>
          </div>
         
          <div className="user-contents">
            <label>Address</label>
            <input type="text" placeholder="Enter Address" className="box" required />
          </div>
          <div className="subdiv-det">
          <div className="user-contents">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="box-subdiv-cpc"
              required
            />
          </div>
          <div className="user-contents">
          <label>Postal Code</label>
            <input
              type="text"
              placeholder="Enter Postal Code"
              className="box-subdiv-cpc"
              required
            />
          </div>
          <div className="user-contents">
          <label>Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              className="box-subdiv-cpc"
              required
            />
          </div>
          </div>
          <div className="user-contents">
            <label>Upload Image</label>
            <input type="file" id="choose" accept="image/png, image/jpeg" required />
          </div>
          <div className="buttondiv">
          <button id="botton">Update profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
