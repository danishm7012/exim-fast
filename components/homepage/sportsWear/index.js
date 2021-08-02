import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../productCard";
import Link from "next/link";
import ProductImg from "../../../assests/images/product.jpeg";
import ProductData from "../../../data/ProductData";
const SportsWear = () => {
  return (
    <div>
      <div className="sports-wear">
        <Container fluid>
          <div className="main-heading mt-5">
            <h2 className="text-center">Our Products</h2>
            <hr />
          </div>
          <Row className="my-4">
            <Col md={5} xs={12}>
              <div className="sport-waer-heading">
                <h3>Sports Wears & Gears</h3>
                <hr />
              </div>
            </Col>
            <Col md={7} xs={12} className="text-right">
              <div className="sports-links">
                <ul>
                  <li>
                    <Link href="">Fitness and Gym Wears</Link>
                  </li>
                  <li>
                    <Link href="">(MMA) Mixed Martial Arts</Link>
                  </li>
                  <li>
                    <Link href="">Boxing equipment & gears</Link>
                  </li>
                </ul>
                <hr />
              </div>
            </Col>
          </Row>
          <Row>
            {ProductData.map((Data) => {
              return (
                <Col md={2} sm={6} xs={12} className="mt-4">
                  <ProductCard
                    category={Data.category}
                    ProductName={Data.ProductName}
                    newPrice={Data.newPrice}
                    oldPrice={Data.oldPrice}
                    detailPage="/"
                    img={Data.img.type}
                    addToCart
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SportsWear;
