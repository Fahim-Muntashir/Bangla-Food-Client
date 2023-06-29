import React from "react";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import { Outlet } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
