import React from "react";
import ProductCard from "../productCard/Index";
import { Container, Row, Col } from "react-bootstrap";
import ProductData from "../../data/ProductData";
const ProductCategoryPage = () => {
  return (
    <div>
      <Container>
        <Row>
          {ProductData.map((Data) => {
            return (
              <Col md={3} sm={6} xs={12} className="mt-4" key={Data.id}>
                <ProductCard
                  slug={Data.Slug}
                  category={Data.category}
                  ProductName={Data.ProductName}
                  newPrice={Data.newPrice}
                  oldPrice={Data.oldPrice}
                  // detailPage="/product-detail/[id]"
                  img={Data.img.type}
                  addToCart
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategoryPage;
