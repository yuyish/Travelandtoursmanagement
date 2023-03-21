import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div>
      <ul className="Bar">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/Aboutus">Aboutus</Link></li>
        <li> <Link to="/Login">Login</Link></li>
        <li> <Link to="/Signup">Signup</Link></li>
        <li> <Link to="/Contactus">Contact us</Link></li>
        </ul>
        
    </div>
      
    </>
  )
}

export default Navbar

