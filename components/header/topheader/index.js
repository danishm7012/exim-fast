import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <div>
      <div className="top-header">
        <Container fluid>
          <div className=" mx-5 mail-social">
            <Row>
              <Col md={6}>
                <a href="mailto:sales@apexleather.co.uk" className="ml-2">
                  Eximfast – Source for Sports & Gears equipment
                </a>
              </Col>
              <Col md={6}>
                <div className=" float-right">
                  <div className="top-social d-flex ">
                    <ul className="p-0  m-0">
                      <li>
                        <a href="" className="facebook">
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="" className="twitter">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="" className="linkedin">
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href="" className="instagram">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopHeader;
