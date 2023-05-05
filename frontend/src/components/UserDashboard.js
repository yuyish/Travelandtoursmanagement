import {useState} from "react";
import { FaBars,FaPowerOff,FaCog,FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imageavatar from "../assets/Images/profileimg.png"
import Navbar from "./Navbar";
import axios from 'axios';
const UserDashboard = () => {
const navigate = useNavigate();
const url = "http://localhost/profile/Bishal@test.com";  // dummy url

  const [postImage, setPostImage] = useState( { myFile : ""})

  const logout = ()=>{
    localStorage.clear();
    if(localStorage===null){
      navigate('/');
      <Navbar/>
      console.log("clicked");
    }
    
  }
  const createPost = async (newImage) => {
    try{
      await axios.put(url, newImage)
    }catch(error){
      console.log(error)
    }
  }
  


const handleSubmit = async (e) => {
  e.preventDefault();
  createPost(postImage)
  // let rm = await fetch()
  console.log("Uploaded")
}

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  console.log(base64)
  setPostImage({ ...postImage, myFile : base64 })
}

  return (
    <div className="Dashboard-Main">
      <div className="dashboard">
        <h2>My Profile</h2>
        <div className="userprofile">
          <div className="userimageprofile">
          <label htmlFor="choose" className="UserImage">
          <img src={postImage.myFile ||imageavatar} alt=" "  />  
          </label>
          </div>
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
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="box-subdiv"
                required
              />
            </div>
            <div className="user-contents">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
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
            <input type="file" id="choose" accept=".jpg , .png, .jpeg" required onChange={(e) => handleFileUpload(e)} />
          </div>
          <div className="buttondiv">
          <button type="submit" id="botton" onClick={handleSubmit}>Update profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}