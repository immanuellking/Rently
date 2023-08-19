import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import EasytoUseTools from "../components/EasytoUseTools";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import WhyRently from "../components/WhyRently";


const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <EasytoUseTools />
      <OurProducts />
      <Banner />
      <WhyRently />
    </>
  );
};

export default HomePage;
