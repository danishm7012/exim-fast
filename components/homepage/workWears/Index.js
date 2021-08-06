import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../productCard";
import Link from "next/link";
import ProductImg from "../../../assests/images/product.jpeg";
import ProductData from "../../../data/ProductData";
const WorkWears = () => {
  return (
    <div>
      <div className="sports-wear">
        <Container fluid>
          <Row className="my-4">
            <Col md={2} xs={12}>
              <div className="sport-waer-heading">
                <h3>Sports Wears & Gears</h3>
                <hr />
              </div>
            </Col>
            <Col md={10} xs={12} className="text-right">
              <div className="sports-links work-wears-list">
                <ul>
                  <li className="w-25">
                    <Link href="">Mechanic Gloves</Link>
                  </li>
                  <li className="w-25">
                    <Link href="">Welding Gloves</Link>
                  </li>
                  <li className="w-25">
                    <Link href="">Work Saftey Gloves</Link>
                  </li>
                  <li>
                    <Link href="">High Visibilty Clothings</Link>
                  </li>
                  <li>
                    <Link href="">Medical Uniforms</Link>
                  </li>
                  <li>
                    <Link href="">Trousers/Pants</Link>
                  </li>
                  <li>
                    <Link href="">Work Shirts</Link>
                  </li>
                  <li>
                    <Link href="">Bib Overalls</Link>
                  </li>
                  <li>
                    <Link href="">Coveralls</Link>
                  </li>
                  <li>
                    <Link href="">Woven Shirts</Link>
                  </li>
                  <li>
                    <Link href="">Working Saftey Golves</Link>
                  </li>
                  <li>
                    <Link href="">Saftey Vestes</Link>
                  </li>
                  <li>
                    <Link href="">Polo Shirts</Link>
                  </li>
                  <li>
                    <Link href="">Jackets</Link>
                  </li>
                  <li>
                    <Link href="">Coverall suits</Link>
                  </li>
                  <li>
                    <Link href="">Work Wear</Link>
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
                    img={Data.img.type}
                    ID={Data.id}
                    Slug={Data.slug}
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

export default WorkWears;
