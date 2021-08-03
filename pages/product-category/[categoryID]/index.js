import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCategoryPage from "../../../components/ProductCategory/ProductCategory";
const ProductCategory = () => {
  return (
    <div className="my-5">
      <Container className="product-category">
        <div className="heading my-5">
          <h2>Product Category</h2>
          <hr />
        </div>
      </Container>
      <ProductCategoryPage />
    </div>
  );
};

export default ProductCategory;
