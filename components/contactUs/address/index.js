import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPaperPlane,
  FaMobileAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Address = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="contact-card p-4 mt-2">
              <h3 className=" text-center">Dubai Office</h3>
              <br />
              <p>
                <FaPaperPlane className="icons mr-2" />
                Park Lane Plaza, 12th Floor, Office No. 1213, Down Town, Dubai
                UAE.
              </p>
              <p>
                <FaMobileAlt className="icons mr-2" />
                +971 58 1439463
              </p>
              <p>
                <FaWhatsapp className="icons mr-2" />
                +971 54 5277366
              </p>
              <p>
                <FaEnvelope className="icons mr-2" />
                sales@eximfast.com
              </p>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="contact-card p-4 mt-2">
              <h3 className=" text-center">London Office</h3>
              <br />
              <p>
                <FaPaperPlane className="icons mr-2" />
                3rd floor, 244 Edgware Road, London W2 1DS, UK.
              </p>

              <p>
                <FaWhatsapp className="icons mr-2" />
                +44 7391 758 721
              </p>
              <p>
                <FaWhatsapp className="icons mr-2" />
                +44 7391 758 721
              </p>
              <p>
                <FaEnvelope className="icons mr-2" />
                sales@eximfast.com
              </p>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className="contact-card p-4 mt-2">
              <h3 className=" text-center">Lahore Office</h3>
              <br />
              <p>
                <FaPaperPlane className="icons mr-2" />
                Office No.18, Naqi Arcade, 71-The Mall Road, Lahore, Pakistan.
              </p>
              <p>
                <FaMobileAlt className="icons mr-2" />
                +92 423 2801559
              </p>
              <p>
                <FaMobileAlt className="icons mr-2" />
                +92 423 2801559
              </p>

              <p>
                <FaEnvelope className="icons mr-2" />
                sales@eximfast.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Address;
