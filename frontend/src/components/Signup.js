import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [status,setStatus]=useState(false);


  const navigate = useNavigate();

  const data = async () => {
    console.log(email);
    if(Password!=="" && ConfirmPassword!=="" && email!=="" && name!==""){
      setStatus(false)
      if(Password===ConfirmPassword){
        setStatus(false)
        let result = await fetch("http://localhost/Signup", {
          method: "post",
          body: JSON.stringify({ name, email, Password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        console.log(result);
        if (result) {
          navigate("/Login");
        }
      }else{
        // alert("Password donot match");
        setStatus(true)
      }
    }else{
      // alert("Cannot leave any spaces empty")
      setStatus(true)
    }
    

  };
  return (
    <div>
      <>
        <div className="Maindiv">
          <div className="Login_ImageBox">
            <img src="./Images/tour.jpg" alt={"Loading"} className="Img" />
          </div>
          <div className="Login_Content">
            <p className="ac"> Already have an account?</p>
            <a href="http://localhost:3000/Login" className="bc">
              Login to begin an amazing journey
            </a>
            <div className="cont">
              <h2 className="cc"> Create an Account </h2>
              <form action="/Login" >
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="User"/>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="User"
              />
              <input
                type="password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="User"
              />
              <input
                type="password"
                required
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="User"
              />
              {
              status? <span className="mistake">Confirm password doesn’t match. Please try again</span> :null
            }
              <button id="Btn" onClick={data} className="User">
                Sign up
              </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Signup;
