import { useState,useEffect } from "react";           // Important imports from packages
import { useNavigate} from "react-router-dom";            // Important imports from packages
import loginavtar from '../assets/Images/Signin.jpg';
import { URL } from "./tour-package";
import {toast} from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  });
  const [status,setStatus]=useState(false);
  const [email,setEmail]= useState();
  const [Password,setPassword]= useState();
  const [Show,setShow]= useState(false);
  const Passshow=()=>{
    setShow(!Show)
  }
  const db = async()=>{
    let result = await fetch(`${URL}/login`,{
      method : "post",
      body: JSON.stringify({email,Password}),
      headers : {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    console.log(result.name);
    if(result.name){
      setStatus(false)
      navigate("/");
      localStorage.setItem("user",JSON.stringify(result));
      window.location.reload();

      
    }else{
      toast.error("Password or email incorrect");
      setStatus(true);
    }
  };

  return (
    <> 
      <div className="Maindiv">
        <div className="Login_ImageBox">
          <img src={loginavtar} alt={"Loading"} className="Img" />
        </div>
        <div className="Login_Content">
          <p className="ac"> Don't have an account?</p>
          <a href="http://localhost:3000/Signup" className="bc">Register to begin an amazing journey</a> 
          <div className="cont">
          <h2 className="cc"> Sign in to your Account </h2>
            <input type="email" required value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Email" className="User"  />
          
            <label className="passwordshow" onClick={Passshow}>{Show? "Hide":"Show"}</label>
          
            <input type={Show?"text": "password"} required value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder="Password" className="User" />
            {
              status? <span className="mistake">The email or password is incorrect.</span> :null
            }
            <a href="/" id="forpass" >Forget your Password?</a>
            <button id="Btn"  onClick={db} className="User">Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
