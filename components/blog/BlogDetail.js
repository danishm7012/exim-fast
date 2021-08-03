import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import BlogImg from "../../assests/images/blog11.png";
import Link from "next/link";
const BlogDetail = () => {
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
          <Image src={BlogImg} className="w-100" />
          <div className="p-3">
            <div className="author-info">
              <h2>An Exclusive guide for exporters and importers</h2>
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
                Following is the action plan for the new exporters, importers,
                and online sellers, everyone who want to do or expand into
                international business. The purpose of this is to help you set
                up your export/import business in the right way. The guide for
                exporters/importers includes crucial steps ( in the right order)
                and the necessary resources & tools you need in each step. For
                beginners, we suggest executing this from start to end. For
                advances ones or already business owners, please execute there,
                where you see, you are lacking now.
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
