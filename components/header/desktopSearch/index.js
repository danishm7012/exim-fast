import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../assests/images/logo.png";
import MobileLogo from "../../../assests/images/mobile-logo.png";
import SearchBar from "../../seachbar";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchPage from "../searchPage";
import MobileNavbar from "../mobileNav";
const DeskopSearch = () => {
  return (
    <div className="mx-2 sm-mx-0">
      <Container>
        <Row className="py-4">
          <Col md={6} xs={12} className="mobile-bar">
            <div className="mobile-logo">
              <span className="mt  d-flex">
                <MobileNavbar />
                <Image src={MobileLogo} />
              </span>
            </div>
            <div className="desktop-logo">
              <Image src={Logo} width={250} height={50} />
            </div>
          </Col>
          <Col md={6} xs={12} className="search-bar-desk">
            <div className=" sm-d-none">
              <SearchBar />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="mobile-search mx-1 pb-3">
        <div className="float-right">
          <li>
            <Link href="/">
              <a>
                <AiOutlineUser />
              </a>
            </Link>
          </li>

          <li>
            <Link href="">
              <a className="shopping-cart">
                <HiOutlineShoppingBag />
                <div className="badge">0</div>
              </a>
            </Link>
          </li>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default DeskopSearch;
