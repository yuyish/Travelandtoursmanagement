import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Navbar from "./components/Navbar"
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Services" element={<h1>Services</h1>} />
                <Route path="/Contact" element={<h1>Contactus page</h1>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<Signup/>} />
            </Routes>

      </BrowserRouter>

    </div>
  )
}

export default AppRouter
