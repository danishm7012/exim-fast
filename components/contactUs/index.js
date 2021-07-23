import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./contactForm";
import Address from "./address";
import ContactImg from "../../assests/images/contact.jpg";
import Image from "next/image";
const ContactUS = () => {
  return (
    <div>
      <Container>
        <Address />
        <br />
        <Row>
          <Col md={6} xs={12} className="mt-3">
            <div className="contact-address">
              <h3>Contact Us</h3>
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5533.302995051403!2d74.32097!3d31.560907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x617934154678bb07!2sNaqi%20Arcade!5e1!3m2!1sen!2sus!4v1627044461625!5m2!1sen!2sus"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Col>
          <Col md={6} xs={12} className="mt-3">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUS;
