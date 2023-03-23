import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='NavMainDiv'>
      <div className="logoDiv">
        <img src="" alt="Loading" className="logo" />
      </div>
      <div>
      <ul className="Bar">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/Services">Services</Link></li>
        <li> <Link to="/Packages">Packages</Link></li>
        <li> <Link to="/Contact">Contact</Link></li>
        <li> <Link to="/Login">Login</Link></li>
        {/* <li> <Link to="/Signup">Signup</Link></li> */}
        </ul>
        </div>  
    </div>
      
    </>
  )
}

export default Navbar

