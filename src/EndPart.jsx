import React from "react";
import "./EndPart.css";
import logo from "./images/logo.png";
import instagram from "./images/instagram.png";
import youtube from "./images/youtube.png";
import linkdin from "./images/linkdin.png";

export default function EndPart() {
  return (
    <div className="d-end-part">
      <img src={logo} alt="" className="end-logo" />
      <ul className="end-ul">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>THE BOOK</li>
        <li>CAREER & LIFE SKILLS</li>
        <li>LEADERSHIP</li>
        <li>MEDIA KIT</li>
      </ul>
      <img src={instagram} alt="" className="icon-instagram" />
      <img src={youtube} alt="" className="icon-youtube" />
      <img src={linkdin} alt="" className="icon-linkdin" />
      <p className="end-t-1">© 2024 Jeremiah Inspires</p>
      <p className="end-t-2">Web Design by Kristin Pearson</p>
    </div>
  );
}
