import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./contactForm";
import Address from "./address";

const ContactUS = () => {
  return (
    <div>
      <Container>
        <Address />
        <Row>
          <Col md={6} xs={12} className="mt-3"></Col>
          <Col md={6} xs={12} className="mt-3">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUS;
