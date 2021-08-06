import React from "react";
import Link from "next/link";
import { BiDetail, BiPound } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Reviews from "./Reviews";
const Details = ({ Product }) => {
  return (
    <div>
      <div className="details-product">
        <h4>
          <Link href="">
            <a>{Product.category}</a>
          </Link>
        </h4>
        <h2> {Product.ProductName} </h2>
        <div className="description">
          <h2 className="description-name">Description</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            impedit vitae repellat quos aperiam ad repudiandae, excepturi beatae
            dolorem neque!
          </p>
          <table className="table details-table">
            <tbody>
              <tr>
                <td className="heading">Brand Name</td>
                <td className="details">Exim Fast</td>
              </tr>
              <tr>
                <td className="heading">Logo</td>
                <td className="details">Customized</td>
              </tr>
            </tbody>
          </table>
          <div className="price-details">
            <h2>
              <span className="new-price">
                <BiPound />
                {Product.newPrice}
              </span>
              <span className="old-price">
                <BiPound />
                220
              </span>
            </h2>
          </div>

          <button className="btn btn-1">
            Add To Cart
            <HiOutlineShoppingCart className="ml-2 icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
