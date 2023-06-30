import React, { useContext } from "react";
import "./Header.css";
import { AuthContext } from "../../Provider/AuthProvider";
import profile from "../../assests/profile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="navbar">
      <h2 className="">
        Bengali<span className="highlight-text">Food</span>
      </h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          {user ? (
            <div className="user-profile">
              <img className="profile" src={profile} alt="" />
            </div>
          ) : (
            <a href="/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
