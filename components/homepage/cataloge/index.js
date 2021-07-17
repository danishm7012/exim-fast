import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import BoxingImg from "../../../assests/images/boxing.jpg";
import Gloves from "../../../assests/images/gloves.jpg";
import ExiamFast from "../../../assests/images/eximfast.jpg";
import EximFastBanner from "../../../assests/images/exim-banner.jpg";

const Catalouge = () => {
  return (
    <div>
      <br />
      <Container fluid>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <Link href="">
              <a>
                <div className="title py-3">
                  <h2 className="text-center">View Products</h2>
                </div>
                <Image src={BoxingImg} alt="Boxing" />
              </a>
            </Link>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Link href="">
              <a>
                <div className="title py-3">
                  <h2 className="text-center">View Products</h2>
                </div>
                <Image src={Gloves} alt="Boxing" />
              </a>
            </Link>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <Link href="">
              <a>
                <div className="title py-3">
                  <h2 className="text-center">View Products</h2>
                </div>
                <Image src={ExiamFast} alt="Boxing" />
              </a>
            </Link>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="title-catalouge py-3">
              <h3>Our Product Catalogues</h3>
              <p>
                Eximfast offers complete OEM solution for manufacturing of
                Sports Wear. Our three main categories; Sport Wears, Fashion
                Wears & Work Wears, comprise of more than ten thousand different
                kinds of wear used in the Sport industries throughout the world.
              </p>
              <p className="mb-0">
                Complete manufacturing from raw material to packaging is done
                in-house in a controlled, certified and monitored management &
              </p>
            </div>
          </Col>
        </Row>
        <Image src={EximFastBanner} alt="Banner Image" />
      </Container>
    </div>
  );
};

export default Catalouge;
