import React from "react";

const BookDetail = (pack, index) => {
  let rs = pack.pack;
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
      <button className="completed-wrapper">{status}</button>
    </div>
  );
};

export default BookDetail;
