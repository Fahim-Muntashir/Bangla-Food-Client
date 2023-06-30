import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password Could Be 6 carecter Upper");
    }

    console.log(photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate("/");
        console.log(createdUser);
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
            <h2>Sign Up</h2>
            <form onSubmit={handleRegister}>
              {" "}
              <div className="form">
                <div className="inputBox">
                  <input name="email" type="Email" required />
                  <i>Email</i>
                </div>
                <div className="inputBox">
                  <input name="photo" type="text" required />
                  <i>Image url</i>
                </div>
                <div className="inputBox">
                  <input name="password" type="password" required />
                  <i>Password</i>
                </div>
                <div className="links">
                  <a href="#"></a>
                  <Link to="/login">Login</Link>
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <div className="inputBox">
                  <input type="submit" value="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default SignUp;
