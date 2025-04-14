import React from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import WhatIsMindBloom from "../components/WhatIsMindBloom";
import TestimonialSection from "../components/TestimonialSection";
import ImageSlider from "../components/ImageSlider";
import FooterSection from "../components/FooterSection";
import Cursor from "../components/cursor";

const Home = () => (
  <div className="bg-primary text-light min-h-screen relative">
    <Cursor />
    <Sidebar />
    <div className="main-content">
      
      {/* Add IDs to sections for anchor links */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <WhatIsMindBloom />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="gallery">
        <ImageSlider />
      </section>

      <section id="contact">
        <FooterSection />
      </section>
    </div>
  </div>
);

export default Home;
