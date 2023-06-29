import React, { useState } from "react";
import "./ChefCard.css";
import { Link } from "react-router-dom";
import ChefDetail from "../../ChefDetail/ChefDetail";

const ChefCard = ({ chef }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleFavorite = (recipeId) => {
    const recipe = chef.recipes.find((recipe) => recipe.id === recipeId);
    if (!favoriteRecipes.includes(recipe)) {
      setFavoriteRecipes([...favoriteRecipes, recipe]);
      showToastMessage(`${recipe.name} is your favorite!`);
    }
  };

  const showToastMessage = (message) => {
    console.log(message);
  };
  return (
    <div className="chef-card">
      <img src={chef.picture} alt={chef.name} />
      <h3>{chef.name}</h3>
      <p>Experience: {chef.experience} years</p>
      <p>Number of Recipes: {chef.recipes}</p>
      <p>
        Likes: <span>{chef.likes}</span>{" "}
      </p>
      <Link to={"/detail/" + chef.id}>
        {" "}
        <button className="view-recipe common-btn-style"> View Recipes</button>
      </Link>
    </div>
  );
};

export default ChefCard;
