import { useState} from "react";             // Important imports from packages
import { useNavigate } from "react-router-dom";             // Important imports from packages
import Signupavtar from '../assets/Images/Signup.jpg';
import { URL } from "./tour-package";
const Signup = () => {
  let [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");   // State
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [status,setStatus]=useState(false);
  const [Detail,setDetail]=useState(false);
  const [Show,setShow]= useState(false);
  const [Blank,setBlank]= useState(false);


  const navigate = useNavigate();

  const Passshow=()=>{
    setShow(!Show)
  }

  const data = async () => {
      if(Password!=="" && ConfirmPassword!=="" && email!=="" ){ // Condition weather the input fields is empty or not
        try {
          if(Password===ConfirmPassword){
            setStatus(false)
            name=name.trim();
            console.log(name);
            if(name!==""){
              setBlank(false)
              let result = await fetch(`${URL}/Signup`, {
                method: "post",
                body: JSON.stringify({ name, email, Password }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              let rs = await result.json();
              if (rs) {
               navigate("/Login");
              }
            }else{
              setBlank(true)
            }

          }else{
            // alert("Password donot match");
            setStatus(true)
          }
        } catch (error) {
          console.log(error);
        }
        setDetail(false)
        
      }else{
        // alert("Cannot leave any spaces empty")
        setDetail(true)
      }
    

  };
  return (
    <div>
      <>
        <div className="Maindiv">
          <div className="Login_ImageBox">
            <img src={Signupavtar} alt={"Loading"} className="Img" />
          </div>         
           <div className="Login_Content">
            <p className="ac"> Already have an account?</p>
            <a href="http://localhost:3000/Login" className="bc">
              Login to begin an amazing journey            </a>
            <div className="cont">
              <h2 className="cc"> Create an Account </h2>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="User"/>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="User"
              />
                <label className="signupPassshow" onClick={Passshow}>{Show? "Hide":"Show"}</label>
              <input
                type={Show?"text": "password"}
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="User"
              />
              <input
                type={Show?"text": "password"}
                required
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password"
                className="User"
              />
              {
              status? <span className="mistake">Confirm password doesn’t match. Please try again</span> :null
            }
              {
              Detail? <span className="mistake">Please fill all the detail</span> :null
            }
              {
              Blank? <span className="mistake">Cannot use Blank space as a name</span> :null
            }
              <button id="Btn" onClick={data} className="User">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Signup;
