import React from "react";

import Banner from "../components/Banner";
import Cateloge from "../components/Cateloge";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

const Home = () => {
  
  return (
    <>
      <TopNavigation />
      <Navigation />
      <Banner />
      <Cateloge />
      <Footer />
    </>
  );
};

export default Home;
