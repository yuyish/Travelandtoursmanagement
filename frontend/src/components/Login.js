const Login = () => {
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
          <form action="get">
            <input type="text" placeholder="Username" className="User" />
            <input type="password" placeholder="Password" className="User" />
            <a href="/" id="forpass" >
              Forget your Password?
            </a>
            <button id="Btn"  className="User">Sign up</button>
          </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
