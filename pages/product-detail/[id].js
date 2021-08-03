import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Details from "../../components/ProductDetail/Details";
import Image from "next/image";
import ProductImg from "../../assests/images/product.jpeg";
import Reviews from "../../components/ProductDetail/Reviews";
import ProductData from "../../data/ProductData";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [Product, setProduct] = useState({});
  useEffect(() => {
    setProduct(ProductData.find((b) => b.slug === id));
  }, [id]);
  console.log("All Products", Product);
  return (
    <div>
      <Container className="my-5">
        <div className="product-details">
          <h2>Product Details</h2>
          <hr />
        </div>
        <div className="peoduct-all-details"></div>
        <Row>
          <Col md={6} xs={12}>
            <div className="product-img text-center">
              <Image src={ProductImg} />
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="text-detail">
              <Details />
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <div className="reviews">
            <div className="product-details">
              <h2>Product Reviews</h2>
              <hr />
            </div>
            <Reviews />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
