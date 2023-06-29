import React from "react";
import retorent from "../../assests/images/restorent.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={retorent} alt="" />
      <div className="about-text">
        <h2>
          Why You <span>Choose</span> Us
        </h2>
        <p className="about-desc">
          In addition to our signature dishes, we also offer a variety of other
          appetizers, salads, sandwiches, and desserts. We are sure that you
          will find something to your taste on our menu. We use only the
          freshest ingredients We are committed to using only the freshest
          ingredients in our dishes. We source our ingredients from local
          farmers and suppliers whenever possible. We offer a casual dining
          experience We want our guests to feel comfortable and relaxed when
          they dine with us. Our restaurant has a casual atmosphere, and our
          staff is friendly and attentive. We want you to enjoy your meal and
          feel like you are part of our family. We invite you to come and
          experience our culinary expertise We hope you will come and experience
          our culinary expertise for yourself. We are confident that you will
          enjoy our food and our service. Thank you for choosing Bengali Food!
        </p>
        <button className="common-btn-style"> Find Food</button>
      </div>
    </div>
  );
};

export default About;
