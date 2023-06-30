import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password Could Be 6 carecter Upper");
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <section className="login-section">
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
              <div className="form">
                <div className="inputBox">
                  <input type="Email" name="email" required />
                  <i>Email</i>
                </div>
                <div className="inputBox">
                  <input type="password" name="password" required />
                  <i>Password</i>
                </div>
                <div className="links">
                  <a href="#">Forgot Password</a>
                  <Link to="/login/signup">Sign Up</Link>
                </div>
                <p style={{ color: "red" }}>{error}</p>

                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
                <button className="common-btn-style">
                  Sign In With Google
                </button>
                <button className="common-btn-style">
                  Sign In With Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Login;
