import React from "react";
import MainBanner from "./mainbanner";
import Catalouge from "./cataloge";
import ImageSection from "./imageSection";
import BlogSection from "./blogSection";

const HomePage = () => {
  return (
    <div>
      <br />
      <MainBanner />
      <Catalouge />
      <ImageSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
