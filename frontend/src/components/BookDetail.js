import React from "react";
import axios from "axios";
import { URL } from "./tour-package";
import {toast} from 'react-toastify'
const BookDetail = (pack, index) => {
  let rs = pack.pack;
  console.log(rs._id);
  let id = rs._id;
  const handlecancel = async()=>{
    try {
      let cancelbook = await axios.delete(`${URL}/bookings/${id}`);
      if(cancelbook){
        window.location.reload();
        toast.success("You have cancel the booking");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  let status = rs.Booking_Status;
  let date = rs.Booking_date;
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString();
  let package_name = rs.package_id.packagename;
  let package_price = rs.package_id.price;
  return (
    <div className="Book-Parent-Comp">
      <div className="Book-trek">{package_name}</div>
      <div className="Book-travel">Travel</div>
      <div className="Book-date">{formattedDate}</div>
      <div className="US-rate">Rs {package_price}</div>
      <button className="completed-wrapper" onClick={handlecancel}>{status}</button>
    </div>
  );
};

export default BookDetail;
