import React from "react";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";

const Mainlayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Mainlayout;
