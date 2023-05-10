import { React, useEffect, useState } from "react";
import "../assets/Styles/Detailcomponent.css";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "./tour-package";
const Detailcomponent = () => {
  const [Package, setPackage] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const fetchPackage = async () => {
    setisLoading(true);
    try {
      const { data } = await axios.get(`${URL}/bookings`);
      console.log(data);
      setPackage(data);
    } catch (error) {
      toast.error(error.message);
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchPackage();
  }, []);
  return (
    <div className="rectangle-parent">
      <div className="MainBox-frame">
        <b className="Travel-Booking-Info">TRAVEL INFO</b>
        <div className="Booking-name">BOOKING Name</div>
        <div className="Booking-for">BOOKING FOR</div>
        <div className="Booking-date">DATE</div>
        <div className="Booking-price">PRICE</div>
        <div className="Booking-Status">STATUS</div>
      </div>
    </div>
  );
};

export default Detailcomponent;
