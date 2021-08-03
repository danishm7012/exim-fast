import React from "react";
import Image from "next/image";
// import BlogImg from "../../assests//images/blog/blog-1.jpg";
import Link from "next/link";
const Blog = ({ BlogImg, title, subTitle, id }) => {
  return (
    <div>
      <div className="blog-card">
        <Link href={`blog-details/[BlogID]`} as={`blog-details/${id}`}>
          <a>
            <Image src={BlogImg} alt="Blog Image" />
          </a>
        </Link>
        <div className="text p-3">
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <Link href={`blog-details/[BlogID]`} as={`blog-details/${id}`}>
            <a>
              <button className="btn btn-1">Read More</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
