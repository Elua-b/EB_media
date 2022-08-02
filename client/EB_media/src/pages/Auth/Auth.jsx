import React from "react";
import "./Auth.css";
function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src="./logo2.png" className="logo" alt="" />
        <div className="webname">
          <h1 style={{ color: "#f5c32c" }}>EB_media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <Login />
    </div>
  );
}
function Login(){
    return (
        <div className="a-right">
          <form className="infoForm">
            <h3>Log In</h3>
           
            <div>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="Usernames"
              />
            </div>
            <div>
              <input
                type="password"
                className="infoInput"
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account.Signup!
              </span>
              <button className="button infoButton" type="submit">
              Login
            </button>
            </div>
           
          </form>
        </div>
      );
}
function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account.Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
