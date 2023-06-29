import React from "react";
import "./NotFound.css";
import notFound from "../../assests/images/error.jpg";
const NotFound = () => {
  return (
    <div className="not">
      <img className="not-found" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
