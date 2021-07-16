import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  return (
    <div className="newsletter py-3">
      <Container>
        <Row>
          <Col md={3} xs={12}>
            <h3>
              <FiSend className="icon" /> Sign up to Newsletter
            </h3>
          </Col>
          <Col md={4} xs={12}>
            <p>
              ...and receive <span>Quality, Substantial Products</span>
            </p>
          </Col>
          <Col md={5} xs={12}>
            <InputGroup className="">
              <FormControl
                placeholder="Enter Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                className="btn-1"
                type="submit"
                id="basic-addon2"
              >
                Sign Up
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
