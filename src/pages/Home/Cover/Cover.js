import React from "react";
import "./Cover.css";
import img from "../../../assests/images/chef.png";

const Cover = () => {
  return (
    <div className="cover-page">
      <div className="cover-detail">
        <p className="cover-title">
          Eat More <br />
          Healthy Food
          <br /> <span className="highlight-text">Make Happy Life</span>
        </p>
        <p className="cover-desc">
          Explore thousands of food jobs, from farm to fork. Find your dream job
          in the food industry, whether you're a chef, a food scientist, a food
          technologist, or something else. We have jobs for all levels of
          experience, from entry-level to executive. And we offer a wide variety
          of positions, from restaurant work to corporate jobs.
        </p>
        <button className="common-btn-style"> Find Food</button>
      </div>
      <div className="cover-img">
        <img src={img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Cover;
