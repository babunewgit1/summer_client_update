import React from "react";
import Bannar from "../Bannar/Bannar";
import PopularClass from "../PopularClass/PopularClass";
import PopularInst from "../PopularInst/PopularInst";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <Bannar></Bannar>
      <PopularClass></PopularClass>
      <About></About>
      <PopularInst></PopularInst>
    </>
  );
};

export default Home;
