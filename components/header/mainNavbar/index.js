import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <div>
      <div className="main-navbar pl-3">
        <Container>
          <ul className="mb-0">
            <li className="active">
              <Link href="/">home</Link>
            </li>
            <li className="menu-items">
              <Link href="">
                <a>
                  Products <FaAngleDown />
                </a>
              </Link>

              <div className="drop-down-menu p-3">
                <ul>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Badminton
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Basketball
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Baseball Traning Equipment
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Cricket
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Cycling
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Fitness and Gym Wears
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Football
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Amercian Football
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">American Football Balls</Link>
                        </li>
                        <li>
                          <Link href="">
                            American Football Athletic Supporter
                          </Link>
                        </li>
                        <li>
                          <Link href=""> American Football Clothing </Link>
                        </li>
                        <li>
                          <Link href=""> American Football Footwear </Link>
                        </li>
                        <li>
                          <Link href="">American Football Helmet</Link>
                        </li>
                        <li>
                          <Link href="">American Football Mouth Guard</Link>
                        </li>
                        <li>
                          <Link href="">American Football Other Armour</Link>
                        </li>
                        <li>
                          <Link href="">American Football Shoulder Pads</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Golf
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Hockey
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Ice Hockey
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Motor Sports
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        squash Equipment
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Tennis
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Table Tennis
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Volley Ball
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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
                    
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Wrestling
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
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

</div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-items">
              <Link href="">
                <a>
                  Boxing Equipment <FaAngleDown />
                </a>
              </Link>
              <div className="drop-down-menu p-3">
                <ul>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Boxing Pads</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Punch Bags</a>
                    </Link>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Skipping Rope</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Bosing Guards</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Boxing Shoes</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Ring Robe</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Boxing Gloves</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Boxing Wraps</a>
                    </Link>
                  </li>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">Boxing Mitts</a>
                    </Link>
                  </li>
                </ul>
              
              </div>
            </li>
            <li className="menu-items">
              <Link href="">
                <a>
                  Mixed Martial Arts <FaAngleDown />
                </a>
              </Link>
              <div className="drop-down-menu p-4">
                <ul>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Protective Gear <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">Belt</Link>
                        </li>
                        <li>
                          <Link href="">Bracelets</Link>
                        </li>
                        <li>
                          <Link href=""> Cosmetic Pouches </Link>
                        </li>
                        <li>
                          <Link href=""> Jewellery Cases </Link>
                        </li>
                        <li>
                          <Link href="">Gloves</Link>
                        </li>
                        <li>
                          <Link href="">Wallets</Link>
                        </li>
                        <li>
                          <Link href="">Watch Straps</Link>
                        </li>
                        <li>
                          <Link href="">Lipstick Cases</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        MMA Gloves <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">Backpacks</Link>
                        </li>
                        <li>
                          <Link href="">Crossbody Bags</Link>
                        </li>
                        <li>
                          <Link href="">Crossbody Bags</Link>
                        </li>
                        <li>
                          <Link href="">Hand Bags</Link>
                        </li>
                        <li>
                          <Link href="">Crossbody Bags</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        MMA Clothing <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">Biker Jackets</Link>
                        </li>
                        <li>
                          <Link href="">Blazers and Reefers</Link>
                        </li>
                        <li>
                          <Link href=""> Bomber Jackets </Link>
                        </li>
                        <li>
                          <Link href=""> Messenger Bags </Link>
                        </li>
                        <li>
                          <Link href="">Bomber Jackets</Link>
                        </li>
                        <li>
                          <Link href="">Full Length Coats</Link>
                        </li>
                        <li>
                          <Link href="">Parka,Duffel and Trench Coats</Link>
                        </li>
                        <li>
                          <Link href="">Waist Coats / Gilets</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-items">
              <Link href="">
                <a>
                  Fashion Wears <FaAngleDown />
                </a>
              </Link>
              <div className="drop-down-menu p-4">
                <ul>
                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Outdoor Wears
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">Desk items</Link>
                        </li>
                        <li>
                          <Link href="">Diaries</Link>
                        </li>
                        <li>
                          <Link href="">Key Holders</Link>
                        </li>
                        <li>
                          <Link href="">Notepads</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Rain Wears <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">Document Bags</Link>
                        </li>
                        <li>
                          <Link href="">Organizers</Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="inner-dropdown w-100">
                    <Link href="">
                      <a className="d-flex items-link w-100">
                        Military Fashion
                        <FaAngleRight className="mt-1" />
                      </a>
                    </Link>
                    <div className="drop-down-menu-1 p-4">
                      <ul>
                        <li>
                          <Link href="">Cheque Book Cases</Link>
                        </li>
                        <li>
                          <Link href="">Document Bags</Link>
                        </li>
                        <li>
                          <Link href="">Folders</Link>
                        </li>
                        <li>
                          <Link href="">Gift Sets</Link>
                        </li>
                        <li>
                          <Link href="">Writing Portfolios</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                
                </ul>
              </div>
            </li>
            <li className="menu-items">
              <Link href="">
                <a>
                  Commoditios <FaAngleDown />
                </a>
              </Link>
              <div className="drop-down-menu p-4">
                <ul>
                  <li>
                    <Link href="">Bib Overalls</Link>
                  </li>
                  <li>
                    <Link href="">Coveralls</Link>
                  </li>
                  <li>
                    <Link href="">High Visibility Clothing</Link>
                  </li>
                  <li>
                    <Link href="">Jackets</Link>
                  </li>
                  <li>
                    <Link href="">Mechanic Gloves</Link>
                  </li>
                  <li>
                    <Link href="">Medical Uniforms</Link>
                  </li>
                  <li>
                    <Link href="">Trousers / Pants</Link>
                  </li>
                  <li>
                    <Link href="">Welding Gloves</Link>
                  </li>
                  <li>
                    <Link href="">Work Safety Gloves</Link>
                  </li>
                  <li>
                    <Link href="">Work Shirts</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-items">
              <Link href="">
                <a>
                  More
                  <FaAngleDown />
                </a>
              </Link>
              <div className="drop-down-menu p-4">
                <ul>
                  <li>
                    <Link href="">Abouts US</Link>
                  </li>
                  <li>
                    <Link href="">Career</Link>
                  </li>
                  <li>
                    <Link href="">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default MainNavbar;
