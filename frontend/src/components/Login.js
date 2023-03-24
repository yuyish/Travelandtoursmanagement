import { useState } from "react";
import { useNavigate} from "react-router-dom";
const Login = () => {
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
      navigate("/");
    }else{
      console.log("This is wrong");
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
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email" className="User" />
            <input type="password" value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password" className="User" />
            <a href="/" id="forpass" >
              Forget your Password?
            </a>
            <button id="Btn"  onClick={data} className="User">Sign up</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
