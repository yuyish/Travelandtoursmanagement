import React, { useState, useEffect } from "react";
import { FaThLarge, FaListUl, FaFilter } from "react-icons/fa";
import ExtendedPackage from "./ExtendedPackage";
import axios from "axios";
import { toast } from "react-toastify";
import loadingimage from "../assets/Images/loader.gif";
export const URL = process.env.REACT_APP_BACKEND_URL;

const TourPackages5 = () => {
  const [Package, setPackage] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchPackage = async () => {
    setisLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/readPackage`);
      setPackage(data);
      // setisLoading(false);
    } catch (error) {
      toast.error(error.message);
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  return (
    <div className="tour-packages5-container">
      <div className="tour-packages5-tour-packages5">
        <span className="cp0">
          <span>Our Popular Tour Packages</span>
        </span>

        <div className="ImagePackage">
          <div className="package">
            <h1>Our Packages</h1>
            <h5>Home/Packages</h5>
          </div>
        </div>
        <div className="tour-packages5-rectangle151">
          <span className="filter">
            <span>
              <FaFilter />
            </span>
            <span>Filters</span>
          </span>
          <span className="type">
            <span>Tour Type</span>
          </span>
        </div>

        <div className="Rectangle">
          <span className="tour-packages5-rectangle153-a">
            <button className="tour-packages5-rectangle153-a-button">
              All
            </button>
            <button className="tour-packages5-rectangle153-a-button">
              Famous
            </button>
            <button className="tour-packages5-rectangle153-a-button">
              Latest
            </button>
            <button className="tour-packages5-rectangle153-a-button">
              Rating
            </button>
          </span>
          <span className="tour-packages5-rectangle164">
            <button className="rectangle164-button">
              <FaListUl />
            </button>
            <button className="rectangle164-button">
              <FaThLarge />
            </button>
          </span>
        </div>
        {isLoading && (
          <div className="center">
            <img src={loadingimage} alt="loading" />
          </div>
        )}
        {!isLoading && Package.length === 0 ? (
          <p>No Packages Available</p>
        ) : (
          <>
          {Package.map((pack,index)=>{
            return (
              <div className="mainContainernon-extended">
                <ExtendedPackage key={pack._id} pack={pack} index={index} />
              </div>
            )
          })}
          </>
        )}
        <div className="Mountain-groupmain">
          <div className="Mountain-sub">
            <span className="Mountain">
              <span>Mountains</span>
            </span>
            <input type="checkbox" className="Mountain-checkbox" />
            <div className="Mountaintextmain">
              <span className="Mountain-text">8</span>
            </div>
          </div>
        </div>

        <div className="FlyingMain">
          <div className="Flying-sub">
            <span className="flying">
              <span>Flyings</span>
            </span>
            <input type="checkbox" className="Flying-checkbox" />
          </div>
          <div className="flyingtextmain">
            <span className="flying-text">4</span>
          </div>
        </div>

        <div className="Culturalmain">
          <div className="Cultural-sub">
            <span className="Cultural">
              <span>Cultural</span>
            </span>
            <input type="checkbox" className="Cultural-checkbox" />
          </div>
          <div className="Cultural-text-main">
            <span className="Cultural-text">
              <span>17</span>
            </span>
          </div>
        </div>
        <div className="Hitking-main">
          <div className="Hitking-sub">
            <span className="Hiking">
              <span>Hiking &amp; Trekking</span>
            </span>

            <input type="checkbox" className="Hiking-checkbox" />
          </div>
          <div className="Hiking-text-main">
            <span className="Hiking-text">9</span>
          </div>
        </div>
        <div className="Safari-main">
          <div className="safari-sub">
            <span className="Safari">
              <span>Safari</span>
            </span>
            <input type="checkbox" className="Safari-checkbox" />
          </div>
          <div className="safari-text-main">
            <span className="Safari-text ">7</span>
          </div>
        </div>
        <div className="Historical-main">
          <div className="Historical-sub">
            <span className="Historical">
              <span>Historical</span>
            </span>
            <input type="checkbox" className="Historical-checkbox" />
          </div>
          <div className="Historical-text-main">
            <span className="Historical-text">
              <span>22</span>
            </span>
          </div>
        </div>
        <div className="Rafting-main">
          <div className="Rafting-sub">
            <span className="rafting">
              <span>Rafting</span>
            </span>
            <input type="checkbox" className="rafting-checkbox" />
          </div>
          <div className="Rafting-text-main">
            <span className="rafting-text">8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages5;
