import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard/ChefCard";
import "./AllChef.css";

const AllChef = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chef-hunter-server-fahimmuntashir1.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  console.log(chefs);

  return (
    <div class="chef-section-container">
      <h1>
        Meet Our Awesome <span>Chefs</span>
      </h1>
      <div className="chef-section">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default AllChef;
