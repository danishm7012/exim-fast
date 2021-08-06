import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import BlogImg from "../../assests/images/blog11.png";
import Link from "next/link";
const BlogDetail = ({ Blog }) => {
  return (
    <div className="my-5">
      <Container>
        <Link href="/">
          <a
            className="btn btn-1"
            style={{ background: "#FD0037", color: "#fff", fontWeight: "700" }}
          >
            Back
          </a>
        </Link>
        <br />
        <br />
        <div className="blogs-details-page">
          <Image src={Blog.img.type} className="w-100" />
          <div className="p-3">
            <div className="author-info">
              <h2>{Blog.title}</h2>
              <p>
                <span className="category mx-2">
                  <Link href="">Import Export Business</Link>
                </span>
                <span className="dots">.</span>
                <span className="date mx-2">February 15, 2021</span>
                <span className="dots">.</span>
                <span className="author mx-2">Admin</span>
              </p>
            </div>
            <div className="all-descriptions">
              <p>
                {Blog.subtitle}
              </p>
              <h2>The navigation menu for exporters/importers guide</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetail;
