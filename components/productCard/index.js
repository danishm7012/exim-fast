import React from "react";
import Link from "next/link";
import Image from 'next/image'
const ProductCard = () => {
  return (
    <div>
      <div className="product-card">
        <div className="category-name">
          <p>
            <Link href=""> MMA Clothings</Link>
          </p>
        </div>
        <div className="title">
          <h3>MMA Wear Uniform Good Quality For</h3>
        </div>
        <div className="img">
            <Image src={} alt="Sports Wear Image"/>
        </div>
        <div className="price">
            <span className="new-price"></span>
            <span className="old-price"></span>
        </div>
        <div className="cart-links">
            
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
