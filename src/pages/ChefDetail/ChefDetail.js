import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefDetail.css";
import RechipeDetail from "./Rechipe/RechipeDetail";

const ChefDetail = () => {
  const chefDetail = useLoaderData();
  console.log(chefDetail.recipeDetails);
  return (
    <div>
      <div className="about-container">
        <img src={chefDetail.picture} alt="" />
        <div className="about-text">
          <h2>
            <span>{chefDetail.name}</span>
          </h2>
          <p className="about-desc">{chefDetail.description}</p>
          <p>Experience: {chefDetail.experience} years</p>
          <p>Number of Recipes: {chefDetail.recipes}</p>
          <p className="total-like">
            Likes: <span>{chefDetail.likes}</span>{" "}
          </p>
          <button className="common-btn-style "> Find Food</button>
        </div>
      </div>

      <div className="food-detail">
        <h1>
          Top Item From This <span>Chef</span>
        </h1>
        {chefDetail.recipeDetails.map((data) => (
          <RechipeDetail data={data}></RechipeDetail>
        ))}
      </div>
    </div>
  );
};

export default ChefDetail;
