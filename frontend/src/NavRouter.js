import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { useEffect } from "react"
import Login from './components/Login'      // Importing the file from the folder components
import Signup from './components/Signup'      // Importing the file from the folder components
import Home from './components/Home'      // Importing the file from the folder components
import Navbar from "./components/Navbar"      // Importing the file from the folder components
// import Packages from "./components/Package"      // Importing the file from the folder components
// import UserNavbar from "./components/UserNavbar"
import Aboutus from "./components/Aboutus"
import UserDashboard from "./components/UserDashboard";
import TourPackages5 from "./components/tour-package"
import MyBookingInfo from "./components/mybookinginfo"
import BookEnquiryOverView from "./components/BookEnquiryOverview"
import BookEnquiry from './components/BookingEnquiry'
import BookingItenary from "./components/BookingItenary"

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>  
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/Services" element={<UserDashboard/>} /> */}
                <Route path="/BookingOverview" element={<BookEnquiryOverView/>} />
                <Route path="/Services" element={<MyBookingInfo/>} />
                <Route path="/Enquiry" element={<BookEnquiry/>} />
                {/* <Route path="/Itenary" element={<AllBooking/>} /> */}
                <Route path="/Itenary" element={<BookingItenary/>} />
                <Route path="/MyAccounts" element={<UserDashboard/>} />
                {/* <Route path="/Contact" element={<h1>Contactus page</h1>} /> */}
                <Route path="/Packages" element={<TourPackages5/>} />
                <Route path="/About" element={<Aboutus/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<Signup/>} />
            </Routes>

      </BrowserRouter>

    </div>
  )
}

export default AppRouter
