import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login-container">
      <section className="login-section">
        <div className="signin">
          <div className="content">
            <h2>Sign Up</h2>
            <div className="form">
              <div className="inputBox">
                <input type="Email" required />
                <i>Email</i>
              </div>
              <div className="inputBox">
                <input type="text" required />
                <i>Image url</i>
              </div>
              <div className="inputBox">
                <input type="password" required />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#"></a>
                <Link to="/login">Login</Link>
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

export default SignUp;
