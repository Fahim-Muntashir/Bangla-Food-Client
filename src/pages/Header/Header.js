import React from "react";
import "./Header.css";

const Navbar = ({ loggedIn, userName }) => {
  return (
    <nav className="navbar">
      <h2 className="">
        Bengali<span className="highlight-text">Food</span>
      </h2>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          {loggedIn ? (
            <div className="user-profile">
              <img src="/profile-picture.jpg" alt="Profile" />
              <span className="username">{userName}</span>
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
