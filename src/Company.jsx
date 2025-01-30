import React from "react";
import "./Company.css";
import img1 from "./images/logo1-1.png";
import img2 from "./images/logo2-2.png";
import img3 from "./images/logo3-3.jpg";
import img4 from "./images/logo4-4.jpg";

export default function Company() {
  return (
    <div className="d-company">
      <h2 className="title-element">PAST AUDIENCES INCLUDE</h2>
      <img src={img1} alt="" className="img-1-company" />
      <img src={img2} alt="" className="img-2-company" />
      <img src={img3} alt="" className="img-3-company" />
      <img src={img4} alt="" className="img-4-company" />
    </div>
  );
}
