import React, { useState, useEffect } from "react";
import logo from "../images/logo.png"; // Your logo
import icon_down_default from "../images/down-arrow.png"; // Default icon
import icon_down_hover from "../images/drop-down.png"; // Hover icon
import "./NavbarA.css";
import menu_white from "../images/menu-white.png";
import menu_blue from "../images/menu-blue.png";
import book from "../images/book.png";
import checked from "../images/Check.png";

export default function NavbarA() {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);

  const handleMouseHover = () => {
    setHoverMenu(true);
  };
  const handleMouseNotHover = () => {
    setHoverMenu(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDropdownVisible(true); // Show dropdown when hovering over the link
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true); // Keep the dropdown visible when hovering over it
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false); // Hide the dropdown when the mouse leaves the dropdown content
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <a href="/">
          <img src={logo} alt="Logo" className="about-logo" />
        </a>
        <ul className="ul-content-about">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">THE BOOK</a>
          </li>
          <li className="drop-do-about">
            <a
              href="#"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              SPEAKING
              <img
                src={isHovered ? icon_down_default : icon_down_hover}
                alt="Dropdown Icon"
                className="drop-down-about"
              />
            </a>
            {isDropdownVisible && (
              <div
                className="choose-speak-about"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="ch1-paragraph-about">
                  <p className="choose1-about">CAREER & LIFE SKILLS</p>
                </div>
                <div className="ch2-paragraph-about">
                  <p className="choose2-about">TRANSFORMATIONAL LEADERSHIP</p>
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#">PARTNERSHIP</a>
          </li>
        </ul>
        <button>BOOK NOW</button>
        <img
          src={hoverMenu ? menu_blue : menu_white}
          alt="Menu"
          className="menu-about"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseNotHover}
        />
      </div>
      <img src={book} alt="" className="book-about" />
      <p className="about-first-text">
        A social emotional leadership playbook for student & Athlete <br />
        Success
      </p>
      <h1 className="h1-about">LEAD LIKE A CHAMPION</h1>
      <img src={checked} alt="" className="checked-about-1" />
      <p className="paragraph-1-about">
        {" "}
        Empower yourself to pursue your dreams and <br />
        overcome adversity{" "}
      </p>
      {/* ***** */}
      <img src={checked} alt="" className="checked-about-2" />
      <p className="paragraph-2-about">
        {" "}
        Unlock your potential to be a leader and make a <br />
        positive impact
      </p>
      {/* **** */}
      <img src={checked} alt="" className="checked-about-3" />
      <p className="paragraph-3-about">
        Find inspiration and guidance if you're feeling <br />
        doubtful or lost
      </p>
      {/* ***** */}
      <img src={checked} alt="" className="checked-about-4" />
      <p className="paragraph-4-about">
        Experience personal growth and build confidence <br />
        through powerful exercises
      </p>
      {/* ***** */}
      <img src={checked} alt="" className="checked-about-5" />
      <p className="paragraph-5-about">
        Equip yourself as a parent, student, teacher, or <br />
        coach with the tools to develop leadership skills
      </p>
      <button className="btn-1-about">PURCHASE YOUR COPY NOW</button>
      <button className="btn-2-about">REQUEST BULK ORDER</button>
    </div>
  );
}
