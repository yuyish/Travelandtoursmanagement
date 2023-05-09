import styles from "../assets/Styles/mybookinginfo.css";
import global from "../assets/Styles/global.css";

const MyBookingInfo = () => {
  return (
    <div className={styles.myBookingInfo}>
      <div className={styles.myBookingInfoChild} />
      <b className={styles.bookingInformation}>BOOKING INFORMATION</b>
      <b className={styles.travelInfo}>TRAVEL INFO</b>
      <div className={styles.bookingName}>BOOKING Name</div>
      <div className={styles.abcTrek}>ABC Trek - 14 Days</div>
      <div className={styles.mahindraJeep}>Mahindra Jeep</div>
      <div className={styles.hotelRadisson}>Hotel Radisson</div>
      <div className={styles.travel}>Travel</div>
      <div className={styles.transportation}>Transportation</div>
      <div className={styles.accommodation}>Accommodation</div>
      <div className={styles.april2023}>27 April , 2023</div>
      <div className={styles.april20231}>26 April , 2023</div>
      <div className={styles.april20232}>27 April , 2023</div>
      <div className={styles.usd950}>USD $950</div>
      <div className={styles.usd78}>USD $78</div>
      <div className={styles.usd9501}>USD $950</div>
      <div className={styles.bookingFor}>BOOKING FOR</div>
      <div className={styles.date}>DATE</div>
      <div className={styles.price}>PRICE</div>
      <div className={styles.status}>STATUS</div>
      <img className={styles.myBookingInfoItem} alt="" src="/vector-23.svg" />
      <img className={styles.myBookingInfoInner} alt="" src="/vector-24.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector-24.svg" />
      <img className={styles.myBookingInfoChild1} alt="" src="/vector-24.svg" />
      <img className={styles.myBookingInfoChild2} alt="" src="/vector-24.svg" />
      <div className={styles.personalInformationParent}>
        <b className={styles.personalInformation}>Personal Information</b>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
          <img className={styles.groupChild} alt="" src="/group-2.svg" />
          <div className={styles.editProfile}>Edit Profile</div>
          <div className={styles.myTours}>My Tours</div>
          <div className={styles.myFavourite}>My Favourite</div>
          <div className={styles.settings}>Settings</div>
          <div className={styles.logout}>Logout</div>
        </div>
        <div className={styles.saujanRijalParent}>
          <div className={styles.saujanRijal}>Saujan Rijal</div>
          <img className={styles.groupItem} alt="" src="/group-291.svg" />
        </div>
        <img className={styles.groupInner} alt="" src="/group-290.svg" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.completed}>Completed</div>
      </div>
      <div className={styles.myBookingInfoChild3} />
      <div className={styles.completed1}>Completed</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.completed}>Completed</div>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.groupChild2} alt="" src="/vector-31.svg" />
        <div
          className={styles.homeProfile}
        >{`Home > Profile > My Account > Bookings`}</div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.myBookingInfoChild4} />
      <div className={styles.myBookingInfoChild5} />
      <div className={styles.myBookingInfoChild6} />
    </div>
  );
};

export default MyBookingInfo;
