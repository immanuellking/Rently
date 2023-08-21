import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import EasytoUseTools from "../components/EasytoUseTools";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import WhyRently from "../components/WhyRently";
import Testimonials from "../components/Testimonials";
import { CommonQuestions } from "../components/CommonQuestions";


const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <EasytoUseTools />
      <OurProducts />
      <Banner />
      <WhyRently />
      <Testimonials />
      <CommonQuestions />
    </>
  );
};

export default HomePage;
