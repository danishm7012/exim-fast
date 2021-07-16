import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "../../../assests/images/slide-1.PNG";
import { Container } from "react-bootstrap";
const MainBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <Container fluid> */}
      <Slider {...settings}>
        <div>
          <Image src={Slide1} />
        </div>
        <div>
          <Image src={Slide1} />
        </div>
        <div>
          <Image src={Slide1} />
        </div>
        <div>
          <Image src={Slide1} />
        </div>
      </Slider>
      {/* </Container> */}
    </div>
  );
};

export default MainBanner;
