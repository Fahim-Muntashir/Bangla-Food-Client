import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <section className="login-section">
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <div className="form">
              <div className="inputBox">
                <input type="Email" required />
                <i>Email</i>
              </div>
              <div className="inputBox">
                <input type="password" required />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#">Forgot Password</a>
                <Link to="/login/signup">Sign Up</Link>
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Login;
