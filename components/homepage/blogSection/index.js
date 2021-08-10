import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Blog from "../../blog";
import { BlogData } from "../../../data/blogdata";

const BlogSection = () => {
  return (
    <div className="Blog-section my-5">
      <Container>
        <h2 className="text-center">Blog/News</h2>
        <br />
        <Row>
          {BlogData.map((Data) => {
            return (
              <Col md={4} xs={12} key={Data.id}>
                <Blog
                  BlogImg={Data.img.type}
                  title={Data.title}
                  subTitle={Data.subtitle}
                  slug={Data.slug}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
