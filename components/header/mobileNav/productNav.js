import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const ProductNav = () => {
  return (
    <div>
      <Accordion>
        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="0"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Badminton
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Attire & Uniform</Link>
                </li>
                <li>
                  <Link href="">Racket</Link>
                </li>
                <li>
                  <Link href=""> Shoes & Footwear </Link>
                </li>
                <li>
                  <Link href=""> Shuttlecock </Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="1"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Basketball{" "}
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Backbpard</Link>
                </li>
                <li>
                  <Link href="">New Socks</Link>
                </li>
                <li>
                  <Link href="">Shoes & Footwear</Link>
                </li>
                <li>
                  <Link href="">Shooting Equipment</Link>
                </li>
                <li>
                  <Link href="">Uniforms</Link>
                </li>
                <li>
                  <Link href="">Balls</Link>
                </li>
                <li>
                  <Link href="">Shot Clock</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="2"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Baseball Traning Equipment
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Baseball Batting Gloves</Link>
                </li>
                <li>
                  <Link href="">Baseball Catching Gloves</Link>
                </li>
                <li>
                  <Link href=""> Latest Baseball Balls </Link>
                </li>
                <li>
                  <Link href=""> Custom Baseball Caps </Link>
                </li>
                <li>
                  <Link href="">Unisex Baseball Uniform</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="3"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Cricket
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Cricket Abdominal Guards</Link>
                </li>
                <li>
                  <Link href="">Cricket Batting Gloves</Link>
                </li>
                <li>
                  <Link href=""> Cricket Batting pads </Link>
                </li>
                <li>
                  <Link href=""> Customized Cricket Hats </Link>
                </li>
                <li>
                  <Link href="">Customized Cricket Caps</Link>
                </li>
                <li>
                  <Link href="">Cricket Customized Uniform</Link>
                </li>
                <li>
                  <Link href="">Cricket Practice Clothes</Link>
                </li>
                <li>
                  <Link href="">Cricket Thigh Guards</Link>
                </li>
                <li>
                  <Link href="">Cricket Wooden Stumps</Link>
                </li>
                <li>
                  <Link href="">Cricket Bra & Wears</Link>
                </li>
                <li>
                  <Link href="">Cricket Wicket Bails</Link>
                </li>
                <li>
                  <Link href="">Latest Cricket Kit Bags</Link>
                </li>
                <li>
                  <Link href="">Latest Cricket Wrist Bands</Link>
                </li>
                <li>
                  <Link href="">Willow Wood Cricket Bats</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="4"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Cycling
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Basic Tools & Chain Oil</Link>
                </li>
                <li>
                  <Link href="">Cycling Jersey & Wears</Link>
                </li>
                <li>
                  <Link href=""> Cycling Padded Shorts </Link>
                </li>
                <li>
                  <Link href="">Latest Cycling Gloves </Link>
                </li>
                <li>
                  <Link href="">Latest Cycling Shorts</Link>
                </li>
                <li>
                  <Link href="">Padded Shorts</Link>
                </li>
                <li>
                  <Link href="">Spare Tube</Link>
                </li>
                <li>
                  <Link href="">Water Bottle & Bottle Cage</Link>
                </li>
                <li>
                  <Link href="">Gym & Fitness Gloves</Link>
                </li>
                <li>
                  <Link href="">Gym Women Singlets</Link>
                </li>
                <li>
                  <Link href="">Gym Wears & Water Bottles</Link>
                </li>
                <li>
                  <Link href="">Gym Wears Sports Bra</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="5"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Fitness and Gym Wears
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Comfortable Gym Shoes</Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness wears and Gym Bag</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness wears and Gym Vest</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness Wears and Stretchable Robes</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness Wears and Technical T-shirts</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness Wears and Wrist Bands</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness Wears and Traning Socks</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Fitness and Gym Compression Cuffs</a>
                  </Link>
                </li>
                <li>
                  <Link href="">Fitness Fleece Hoodies</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="6"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Football
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Football & Soccer Cleats</Link>
                </li>
                <li>
                  <Link href="">Football & Soccer Socks</Link>
                </li>
                <li>
                  <Link href=""> Football & Soccer Uniform </Link>
                </li>
                <li>
                  <Link href=""> Football Balls </Link>
                </li>
                <li>
                  <Link href="">Football Practice Clothes</Link>
                </li>
                <li>
                  <Link href="">Football Gear Bag & Utensils</Link>
                </li>
                <li>
                  <Link href="">Football Shin Guard</Link>
                </li>
                <li>
                  <Link href="">Football Water Bottle</Link>
                </li>
                <li>
                  <Link href="">Goal keeper Gloves & Gears</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="7"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Golf
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Golf Balls And Eqipment</Link>
                </li>
                <li>
                  <Link href="">Golf Club Head Covers</Link>
                </li>
                <li>
                  <Link href=""> Golf Gloves And Geers </Link>
                </li>
                <li>
                  <Link href=""> Golf Bags and Equipments </Link>
                </li>
                <li>
                  <Link href="">Golf Shoes and gears</Link>
                </li>
                <li>
                  <Link href="">Golf Socks and Equipments</Link>
                </li>
                <li>
                  <Link href="">Towel and Golf Accessories</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="8"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Hockey
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Customized Hockey Mouth Guard</Link>
                </li>
                <li>
                  <Link href="">Hockey Custom Uniform</Link>
                </li>
                <li>
                  <Link href=""> Hockey Cleats </Link>
                </li>
                <li>
                  <Link href=""> Hockey Shin Guards And Gears </Link>
                </li>
                <li>
                  <Link href="">Hockey Stick and Equipments</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="9"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Ice Hockey
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Ice Hockey Gloves</Link>
                </li>
                <li>
                  <Link href="">Ice Hockey Helmet</Link>
                </li>
                <li>
                  <Link href=""> Ice hockey Mouth Guard </Link>
                </li>
                <li>
                  <Link href=""> Ice Hockey Neck Guard </Link>
                </li>
                <li>
                  <Link href="">Ice Hockey Protective</Link>
                </li>
                <li>
                  <Link href="">Ice Hockey Shin Pads</Link>
                </li>
                <li>
                  <Link href="">Ice Hockey Shoulder Pads</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="10"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Motor Sports
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Motor Racing Extinguishers</Link>
                </li>
                <li>
                  <Link href="">Motorbike cordura Jacket</Link>
                </li>
                <li>
                  <Link href=""> Motorbike Kart Gear </Link>
                </li>
                <li>
                  <Link href=""> Motorbike Protectors </Link>
                </li>
                <li>
                  <Link href="">Motorbike Race Jackets</Link>
                </li>
                <li>
                  <Link href="">Motorbike Race Suit</Link>
                </li>
                <li>
                  <Link href="">Motorbike Race Trousers</Link>
                </li>
                <li>
                  <Link href="">Motorbike Riding Gloves</Link>
                </li>
                <li>
                  <Link href="">Motorbike Suits</Link>
                </li>
                <li>
                  <Link href="">Racing Gloves</Link>
                </li>
                <li>
                  <Link href="">Racing Underwear </Link>
                </li>
                <li>
                  <Link href="">Racing Undershirt </Link>
                </li>
                <li>
                  <Link href="">Racing Helmets </Link>
                </li>
                <li>
                  <Link href="">Racing Shoes </Link>
                </li>
                <li>
                  <Link href="">Racing suits </Link>
                </li>
                <li>
                  <Link href="">Saddle and Toll Bags </Link>
                </li>
                <li>
                  <Link href="">Roll Cages </Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="11"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Squash Equipment
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Protective Eyewear</Link>
                </li>
                <li>
                  <Link href="">Squash Bags And Gears</Link>
                </li>
                <li>
                  <Link href=""> Squash Ball and Equipments </Link>
                </li>
                <li>
                  <Link href=""> Squash Kit and Gears </Link>
                </li>
                <li>
                  <Link href="">Squash Rackets and Gears</Link>
                </li>
                <li>
                  <Link href="">Squash Shoes </Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="12"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Tenis
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Ball Machines </Link>
                </li>
                <li>
                  <Link href="">Practice Hit Stoke Developer</Link>
                </li>
                <li>
                  <Link href=""> Sun Screen </Link>
                </li>
                <li>
                  <Link href=""> Tennis Balls And Equipments </Link>
                </li>
                <li>
                  <Link href="">Tennis Grips and Gears</Link>
                </li>
                <li>
                  <Link href="">Tennis Rackets </Link>
                </li>
                <li>
                  <Link href="">Tennis Strings and Gears</Link>
                </li>
                <li>
                  <Link href="">Teniss Wrist Assists Braces</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="13"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Table Tennis
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="13">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Rubber, Racket or Paddle </Link>
                </li>
                <li>
                  <Link href="">Table Tennis Balls and Gears</Link>
                </li>
                <li>
                  <Link href=""> Table Tenis Blade </Link>
                </li>
                <li>
                  <Link href=""> Table Tennis Clothing </Link>
                </li>
                <li>
                  <Link href="">Table tennis Net and Post</Link>
                </li>
                <li>
                  <Link href="">Table Tennis Table and Gears</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="14"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Volley Ball
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="14">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Volley Ball Court and Gears</Link>
                </li>
                <li>
                  <Link href="">Volley Ball Elbow Pads</Link>
                </li>
                <li>
                  <Link href=""> Volley Ball Finger Tape </Link>
                </li>
                <li>
                  <Link href=""> Volley Ball Jerseys and Gears </Link>
                </li>
                <li>
                  <Link href="">Volley Ball Line Painer</Link>
                </li>
                <li>
                  <Link href="">Volley Ball Net and Equipments</Link>
                </li>
                <li>
                  <Link href="">Volley Ball Shoes and Equipments</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="15"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Wrestling
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Best Capacity Wrestling Bags</Link>
                </li>
                <li>
                  <Link href="">Wrestling Champion Belts</Link>
                </li>
                <li>
                  <Link href=""> Wrestling Ear Guard </Link>
                </li>
                <li>
                  <Link href=""> Wrestling Headgear </Link>
                </li>
                <li>
                  <Link href="">Wrestling Kick pads</Link>
                </li>
                <li>
                  <Link href="">Wrestling Knee Pads</Link>
                </li>
                <li>
                  <Link href="">Wrestling Masks</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ProductNav;
