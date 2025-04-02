import React from "react";
import Sidebar from "../components/Sidebar";  // Make sure Sidebar is imported
import HeroSection from "../components/HeroSection";
import WhatIsMindBloom from "../components/WhatIsMindBloom";
import TestimonialSection from "../components/TestimonialSection";
import ImageSlider from "../components/ImageSlider";
import FooterSection from "../components/FooterSection";

const Home = () => (
  <div className="bg-primary text-light min-h-screen relative">  {/* Add relative positioning */}
    <Sidebar />
    <div className="main-content">
      <HeroSection />
      <WhatIsMindBloom />
      <TestimonialSection />
      <ImageSlider /> 
      <FooterSection />
    </div>
  </div>
);

export default Home;
