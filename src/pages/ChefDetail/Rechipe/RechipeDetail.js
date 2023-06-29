import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RechipeDetail.css";

const RechipeDetail = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast.success("Recipe added to favorites!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="rechipe">
      <img src={data.picture} alt="" />
      <div className="rechipe-detail">
        <h1>{<span>{data.name}</span>}</h1>
        <p>Cooking Method: {data.cook_method}</p>
        <p>Rating: {data.Rating}</p>
        <h4>Cook With {data.ingredients}</h4>
        <p>
          <small>{data.description}</small>
        </p>
        <button
          className="common-btn-style"
          onClick={handleFavoriteClick}
          disabled={isFavorite}
        >
          {isFavorite ? "Added to Favorite" : "Add to Favorite"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RechipeDetail;
