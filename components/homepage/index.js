import React from "react";
import MainBanner from "./mainbanner";
import Catalouge from "./cataloge";
import ImageSection from "./imageSection";
import BlogSection from "./blogSection";
import SportsWear from "./sportsWear";
import WorkWears from "./workWears/Index";

const HomePage = () => {
  return (
    <div>
      <br />
      <MainBanner />
      <Catalouge />
      <SportsWear />
      <br />
      <WorkWears />
      <ImageSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
