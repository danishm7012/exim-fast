import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import AboutImg1 from "../../../assests/images/aboutC.jpg";
import Balls from "../../../assests/images/contact.jpg";
const AboutContent = () => {
  return (
    <div>
      <Container className="my-5 about-content">
        <Row>
          <Col md={6} xs={12} className="all-text">
            <h2>ABOUT OUR COMPANY</h2>
            <h3>EXIM FAST</h3>
            <p>
              Exim fast stands as a label that reflects our exceptional and top
              quality import and export of sustainable gear products. We assure
              our clients of the quality they love and products they admire.
            </p>
            <p>
              Our team at Exim fast aims at changing the entire perspective as
              per the global requirements of the modern age. Hence, unifying all
              that you require under one place, we hope to bring an aspiring
              change!
            </p>
          </Col>
          <Col md={6} xs={12}>
            <div className="img">
              <Image src={AboutImg1} alt="about Images" />
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6} xs={12}>
            <div className="img text-center">
              <Image src={Balls} alt="about Images" />
            </div>
          </Col>
          <Col md={6} xs={12} className="all-text">
            <br />
            <br />
            <br />
            <p>
              We are recognized as eminent dealers, for a wide and distinct
              range of sports, fashion, and workwear. Made with love,
              enthusiasm, and the latest means of manufacture, our products
              stand as the strongest justification for their quality. Keeping up
              with the ever-growing diversity and fastest shifting of trends
              around, we are headed on our way to cater to all that you need!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutContent;
