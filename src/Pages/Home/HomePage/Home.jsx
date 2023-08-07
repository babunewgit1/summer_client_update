import React from "react";
import Bannar from "../Bannar/Bannar";
import PopularClass from "../PopularClass/PopularClass";
import PopularInst from "../PopularInst/PopularInst";
import About from "../About/About";
import Download from "../Download/Download";
import Team from "../Team/Team";
import Faq from "../Faq/Faq";
import MapImages from "../Map/MapImages";

const Home = () => {
  return (
    <>
      <Bannar></Bannar>
      <PopularClass></PopularClass>
      <About></About>
      <PopularInst></PopularInst>
      <Download></Download>
      <Team></Team>
      <Faq></Faq>
      <MapImages></MapImages>
    </>
  );
};

export default Home;
