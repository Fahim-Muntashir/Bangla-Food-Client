import React from "react";
import Cover from "./Cover/Cover";
import About from "../About/About";
import TopITem from "../TopItem/TopITem";
import AllChef from "../AllChef/AllChef";
import Recomended from "../Recomended/Recomended";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <AllChef></AllChef>
      <About></About>
      <TopITem></TopITem>
      <Recomended></Recomended>
    </div>
  );
};

export default Home;
