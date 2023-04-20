import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'      // Importing the file from the folder components
import Signup from './components/Signup'      // Importing the file from the folder components
import Home from './components/Home'      // Importing the file from the folder components
// import Navbar from "./components/Navbar"      // Importing the file from the folder components
import Packages from "./components/Packages"      // Importing the file from the folder components
import UserNavbar from "./components/UserNavbar"
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
      <UserNavbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Services" element={<h1>Services</h1>} />
                {/* <Route path="/Contact" element={<h1>Contactus page</h1>} /> */}
                <Route path="/Packages" element={<Packages/>} />
                <Route path="/About" element={<h1>About page</h1>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<Signup/>} />
            </Routes>

      </BrowserRouter>

    </div>
  )
}

export default AppRouter
