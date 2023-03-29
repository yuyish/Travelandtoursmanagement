import { useState } from "react";
import { useNavigate} from "react-router-dom";
const Login = () => {
  const [status,setStatus]=useState(false);
  const [email,setEmail]= useState();
  const [Password,setPassword]= useState();
  const navigate = useNavigate();
  const data = async()=>{
    let result = await fetch("http://localhost/login",{
      method : "post",
      body: JSON.stringify({email,Password}),
      headers : {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    if(result.name){
      setStatus(false)
      navigate("/");
    }else{
      // alert("Email or password error");
      setStatus(true);
    }
  };
  return (
    <> 
      <div className="Maindiv">
        <div className="Login_ImageBox">
          <img src="./Images/tour.jpg" alt={"Loading"} className="Img" />
        </div>
        <div className="Login_Content">
          <p className="ac"> Don't have an account?</p>
          <a href="http://localhost:3000/Signup" className="bc">Register to begin an amazing journey</a> 
          <div className="cont">
          <h2 className="cc"> Sign in to your Account </h2>
            <input type="email" required value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email" className="User"  />
            <input type="password" required value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password" className="User" />
            {
              status? <span className="mistake">The username or password is incorrect.</span> :null
            }
            <a href="/" id="forpass" >Forget your Password?</a>
            <button id="Btn"  onClick={data} className="User">Sign up</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
