import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from "./components/Navbar"
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<h1>HomePage</h1>} />
                <Route path="/Aboutus" element={<h1>Aboutus</h1>} />
                <Route path="/Contactus" element={<h1>Contactus page</h1>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<Signup/>} />
            </Routes>

      </BrowserRouter>

    </div>
  )
}

export default AppRouter
