import { useState } from "react"
const Signup = () => {
  const [name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [ConfirmPassword,setConfirmPassword]=useState("");
  const data=()=>{
    console.warn(name);
  }
  return (
    <div>
       <> 
      <div className="Maindiv">
        <div className="Login_ImageBox">
          <img src="./Images/tour.jpg" alt={"Loading"} className="Img" />
        </div>
        <div className="Login_Content">
          <p className="ac"> Already have an account?</p>
          <a href="http://localhost:3000/Login" className="bc">Login to begin an amazing journey</a> 
          <div className="cont">
          <h2 className="cc"> Create an Account </h2>
          <form action="get">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="User" />
            <input type="email"  value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"className="User" />
            <input type="password"  value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="User" />
            <input type="password" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="User" />
            <button id="Btn" onClick={data} className="User">Sign up</button>
          </form>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default Signup
