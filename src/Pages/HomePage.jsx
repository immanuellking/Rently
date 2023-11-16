import React from "react";
import HeroBanner from "../components/HeroBanner";
import EasytoUseTools from "../components/EasytoUseTools";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import WhyRently from "../components/WhyRently";
import Testimonials from "../components/Testimonials";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";
import Listings from "../components/Listings";

const HomePage = () => {
  return (
    <div className="w-[100vw] m-0 p-0">
      <HeroBanner />
      <EasytoUseTools />
      <OurProducts />
      <Banner />
      <WhyRently />
      <Listings />
      <Testimonials />
      <CommonQuestions />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
