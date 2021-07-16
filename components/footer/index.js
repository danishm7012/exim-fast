import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../../assests/images/logo.png";
import FooterForm from "./form";
import Newsletter from "../newsletter";

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <footer>
        <Container className="footer-module px-4">
          <Row>
            <Col md={5} sm={12}>
              <div className="contact-us">
                <Image src={Logo} width={300} height={60} />
                <br />
                <p>
                  <span>Pakistan Office:</span>
                  Office No.18, Naqi Arcade, 71-The Mall Road, Lahore, Pakistan.
                  <br />
                  <FaPhone className="icon" /> +92 423 2801559
                  <br />
                  <FaEnvelope className="icon" /> sales@eximfast.com
                </p>
                <p>
                  <span>UAE Office:</span>
                  Park Lane Plaza, 12th Floor, Office No. 1213, Business Bay,
                  Dubai UAE. P.O. BOX 415253
                  <br />
                  <FaPhone className="icon" /> +971 58 1439463
                  <br />
                  <FaPhone className="icon" /> +971 54 5277366
                </p>
                <p>
                  <span>UK Office:</span>
                  3rd Floor, 244 Edgware Road, London W2 1DS, UK.
                  <br />
                  <FaPhone className="icon" /> +92 423 2801559
                </p>
                <div className="">
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
              </div>
            </Col>
            <Col md={3} sm={12}>
              <div className="quick-links">
                <h3>Quick Links</h3>
                <br />
                <ul>
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Blog</Link>
                  </li>
                  <li>
                    <Link href="">Download a Catalog</Link>
                  </li>
                  <li>
                    <Link href="">FAQs</Link>
                  </li>
                  <li>
                    <Link href="">Shipping Policy</Link>
                  </li>
                  <li>
                    <Link href="">Store Directory</Link>
                  </li>
                  <li>
                    <Link href="">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="quick-links">
                <h3>Quick Contact</h3>
                <br />
                <FooterForm />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="footer-bottom">
        <Container>
          <p className="mb-0">© Eximfast - All Rights Reserved</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
