import React, { useState, useEffect } from "react";
import logo from "./images/logo.png"; // Your logo
import icon_down_default from "./images/down-arrow.png"; // Default icon
import icon_down_hover from "./images/drop-down.png"; // Hover icon
import "./Navbar.css";
import menu_white from "./images/menu-white.png";
import menu_blue from "./images/menu-blue.png";
// import body_image from "./images/body-image.jpg";
import featured from "./images/Featured.png";

export default function Navbar() {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);

  const [text, setText] = useState("MENTAL HEALTH");
  const [animation, setAnimation] = useState("fade-in");

  // Change text every 3 seconds
  useEffect(() => {
    const texts = ["MENTAL HEALTH", "CAREER & LIFE SKILLS", "LEADERSHIP"];

    let index = 0;
    const interval = setInterval(() => {
      setAnimation("fade-out"); // Start fade-out animation

      // Change text after animation duration
      setTimeout(() => {
        index = (index + 1) % texts.length; // Cycle through the array
        setText(texts[index]);
        setAnimation("fade-in"); // Start fade-in animation
      }, 500); // Time for fade-out animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

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
    <div className="app-container">
      <div className="video-background">
        {/* <iframe
          src="https://player.vimeo.com/video/836736533?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo Video Background"
        ></iframe> */}
      </div>
      <div className="content">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <ul className="ul-content">
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/the-book">THE BOOK</a>
          </li>
          <li className="drop-do">
            <a
              href="#"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              SPEAKING
              <img
                src={isHovered ? icon_down_default : icon_down_hover}
                alt="Dropdown Icon"
                className="drop-down"
              />
            </a>
            {isDropdownVisible && (
              <div
                className="choose-speak"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="ch1-paragraph">
                  <p className="choose1">CAREER & LIFE SKILLS</p>
                </div>
                <div className="ch2-paragraph">
                  <p className="choose2">TRANSFORMATIONAL LEADERSHIP</p>
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#">PARTNERSHIP</a>
          </li>
        </ul>
        <button className="book-button">BOOK NOW</button>
        <img
          src={hoverMenu ? menu_blue : menu_white}
          alt="Menu"
          className="menu"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseNotHover}
        />
      </div>

      <div className="body-content">
        <h1 className="first-text-body">
          FORMER NFL ARHLETE <br />& TRANSFORMATIONAL <br />
          SPEAKER ON <span className={`change-text ${animation}`}>{text}</span>
        </h1>
        <button className="btn-1">SEE JEREMIAH IN ACTION</button>
        <button className="btn-2">SPEAKING PROGRAMS</button>
        <p className="paragraph-bet">FEATURED BY</p>
        <img src={featured} alt="" className="featured-img" />
      </div>
    </div>
  );
}
