import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import SpecImg from "../../../assests/images/about-2.jpg";

const Specification = () => {
  return (
    <div>
      <div className="about-spec mt-3">
        <Container>
          <Row>
            <Col md={6} xs={12} className="mt-3">
              <div className="img text-center">
                <Image src={SpecImg} alt="spec image" />
              </div>
              <div className="mission my-5">
                <h2>Our Mission</h2>
                <p>
                  We are doomed to serve our nation with the exceptional quality
                  and fast reciprocation of our services we aim to provide.
                  Being authentic and legal dealers, we are directed towards
                  making rounds all over the globe.
                </p>
                <p>
                  Our mission involves easy, sustained, and reliable exim of
                  gear without being lenient with our quality check. We aim to
                  revive public enthusiasm and amalgamation of trends all across
                  the borders. Keeping up with how fast trends change, we work
                  to aspire and look to get inspired!
                </p>
              </div>
            </Col>
            <Col md={6} xs={12} className="mt-3">
              <div className="all-spec-text">
                <h2>Specification for our products include:</h2>
                <ul className="ml-4">
                  <li>A dynamic and versatile range of wears.</li>
                  <li>Sustainable while being cost-friendly.</li>
                  <li>Appealing outlook.</li>
                  <li>Modernly equipped.</li>
                  <li>Recurrent following up with trends.</li>
                  <li>Renowned and authentic manufacturers.</li>
                  <li>Legal and authentic Exim’s</li>
                  <li>Top-notch material with monitored production.</li>
                  <li>Ethical and legal manufacture.</li>
                </ul>
              </div>

              <div className="mission my-5">
                <h2>WHAT MAKES US BETTER?</h2>
                <p>
                  When we ask you to choose us for a fast and reliable exim of
                  your favorite goods across the distance, you must consider all
                  which accounts. Our team with year’s long experience and
                  professional dealings, make sure to assist you in a friendly
                  yet skilled attitude to help you decide better. Our team
                  strongly opposes the inclusion of child labor for momentary
                  success. Therefore, considering your satisfaction and trust as
                  our utmost priority, we believe in fair dealing to redeem your
                  trust when you choose us!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Specification;
