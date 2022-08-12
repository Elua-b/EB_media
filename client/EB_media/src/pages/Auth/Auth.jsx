import React, { useState } from "react";
import "./Auth.css";
function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: " ",
    username: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false);
      }
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: " ",
      username: "",
    });
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src="./logo2.png" className="logo" alt="" />
        <div className="webname">
          <h1 style={{ color: "#f5c32c" }}>EB_media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign up" : "Log In"}</h3>
          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {isSignup && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {setIsSignup((prev) => !prev);resetForm()}}
            >
              {isSignup
                ? "Already have an account.Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignup ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
