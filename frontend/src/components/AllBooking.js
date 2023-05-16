import React from 'react'
import { useNavigate } from 'react-router-dom'
const AllBooking = () => {
    const navigate = useNavigate();
    const overview = ()=>{
        navigate('/BookingOverview')
        console.log('clicked');
    }
    const Itenary = ()=>{
        navigate('/Itenary')
    }
    const Enquery = ()=>{
        navigate('/Enquiry')
    }
  return (
    <div className="component-112">
    <div className="component-11-child4" />
    <div className="component-11-child5" />
    <div className="component-11-child6" />
    <div className="overview2" onClick={overview}>OVERVIEW</div>
    <div className="itinerary-include2" onClick={Itenary}>ITINERARY / INCLUDE</div>
    <div className="inquiry-book2"onClick={Enquery}>{`INQUIRY & BOOK `}</div>
  </div>
  )
}

export default AllBooking;