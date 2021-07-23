import React from "react";
import HeroSection from "./hero";
import AboutContent from "./aboutContent";
import ProductsContent from "./product";
import Specification from "./specification";
const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutContent />
      <ProductsContent />
      <Specification />
    </div>
  );
};

export default AboutPage;
