import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductImg from "../../assests/images/product.jpeg";
import { BiDetail, BiPound } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductCard = ({
  category,
  ProductName,
  img,
  newPrice,
  oldPrice,
  addToCart,
  // detailPage,
  slug,
}) => {
  return (
    <div>
      <div className="product-card">
        <div className="category-name">
          <p>
            <Link href={`product-category/1/`}>
              <a> {category}</a>
            </Link>
          </p>
        </div>
        <div className="main-name">
          <h3>{ProductName}</h3>
        </div>
        <div className="img">
          <Image src={img} height={350} alt="Sports Wear Image" />
        </div>

        <div
          className="cart-links d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className="price">
            <span className="new-price mr-2">
              <BiPound />
              {newPrice}
            </span>
            <span className="old-price mr-2">
              <BiPound />
              {oldPrice}
            </span>
          </div>
          <div className="buttons d-flex">
            <Link href={`/product-detail/[id]`} as={`/product-detail/${slug}`}>
              <a>
                <button className="btn btn-1">
                  <FaLongArrowAltRight />
                </button>
              </a>
            </Link>

            <button onClick={addToCart} className="btn btn-1">
              <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
