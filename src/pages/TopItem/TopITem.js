import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assests/images/c1.jpg";
import img2 from "../../assests/images/c2.jpg";
import img3 from "../../assests/images/c3.jpg";
import "./TopItem.css";

const TopITem = () => {
  return (
    <div className="carosel-container">
      <h1>
        Most <span>Popular</span> Item
      </h1>
      <Carousel>
        <div>
          <img src={img1} />
          <p className="legend">
            <span> Top 1</span>
          </p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">
            <span> Top 2</span>
          </p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">
            <span> Top 3</span>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default TopITem;
