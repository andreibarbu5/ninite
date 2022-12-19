import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Apps from "../components/Apps";
import Videos from "../components/Videos";
import Core from "../components/Core";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

import Repository from "../components/Repository";

const HomePage = () => {
  return (
    <div className="gradient  ">
      <div className="">
        <Navbar />
        <Hero />
        <Apps />
      </div>

      <Features />
      <Repository />
      <Videos />
      <Core />
      <Faq />
      <Footer />
      <div className=""></div>
    </div>
  );
};

export default HomePage;
