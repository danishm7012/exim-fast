import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import BoxingImg from "../../../assests/images/boxing.jpg";
import Gloves from "../../../assests/images/gloves.jpg";
import ExiamFast from "../../../assests/images/eximfast.jpg";

const ImageSection = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4} sm={12} xs={12} className="mt-4">
            <Image src={BoxingImg} alt="Images Section" />
          </Col>
          <Col md={4} sm={12} xs={12} className="mt-4">
            <Image src={Gloves} alt="Images Section" />
          </Col>
          <Col md={4} sm={12} xs={12} className="mt-4">
            <Image src={ExiamFast} alt="Images Section" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSection;
