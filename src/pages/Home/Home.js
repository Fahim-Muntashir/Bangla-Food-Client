import React from "react";
import Cover from "./Cover/Cover";
import About from "../About/About";
import TopITem from "../TopItem/TopITem";
import AllChef from "../AllChef/AllChef";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <AllChef></AllChef>
      <About></About>
      <TopITem></TopITem>
    </div>
  );
};

export default Home;
