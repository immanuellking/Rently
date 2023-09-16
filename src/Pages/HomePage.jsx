import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import EasytoUseTools from "../components/EasytoUseTools";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import WhyRently from "../components/WhyRently";
import Testimonials from "../components/Testimonials";
import CommonQuestions from "../components/CommonQuestions";
import Footer from "../components/Footer";
import { fetchApartments } from "../features/Rent/apartmentsSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, []);

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
      <Footer />
    </>
  );
};

export default HomePage;
