import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/heroBgVideo.mp4";

function HeroSection() {
  return (
    <div className="relative min-h-[100vh] w-full flex justify-center">
      <div className="relative z-30">
        <Navbar />
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full h-full max-w-none"
        poster="../assets/about-the-contest-mini.mp4"
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeroSection;
