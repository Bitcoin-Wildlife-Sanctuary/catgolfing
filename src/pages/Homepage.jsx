import React from "react";
import HeroSection from "../features/homePage/HeroSection";
import AboutTheContest from "../features/homePage/AboutTheContest";
import HowToParticipate from "../features/homePage/HowToParticipate";
import WhyParticipate from "../features/homePage/WhyParticipate";
import Footer from "../features/homePage/Footer";
import CurrentNumbers from "../features/homePage/CurrentNumbers";

function Homepage() {
  return (
    <div className="bg-[#000408] min-h-[100vh] text-white uppercase w-screen overflow-x-hidden">
      <HeroSection />
      <AboutTheContest />
      <HowToParticipate />
      <CurrentNumbers />
      <WhyParticipate />
      <Footer />
    </div>
  );
}

export default Homepage;
