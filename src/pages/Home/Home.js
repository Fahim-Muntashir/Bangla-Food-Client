import React from "react";
import Cover from "./Cover/Cover";
import About from "../About/About";
import TopITem from "../TopItem/TopITem";
import AllChef from "../AllChef/AllChef";
import Recomended from "../Recomended/Recomended";
import NewsLetter from "../NewsLetter/NewsLetter";
import Delivary from "../Delivary/Delivary";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Delivary></Delivary>
      <AllChef></AllChef>
      <About></About>
      <TopITem></TopITem>
      <Recomended></Recomended>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
