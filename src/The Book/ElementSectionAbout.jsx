import React from "react";
import star from "../images/star.png";
import "./ElementSectionAbout.css";

export default function ElementSectionAbout() {
  return (
    <div className="d-element-section-about">
      <img src={star} alt="" className="icon-star-1-about-the-book" />
      <img src={star} alt="" className="icon-star-2-about-the-book" />
      <img src={star} alt="" className="icon-star-3-about-the-book" />
      <img src={star} alt="" className="icon-star-4-about-the-book" />
      <img src={star} alt="" className="icon-star-5-about-the-book" />
      <p className="text-about-the-book">
        "This book is incredible. The stories are <strong>so authentic</strong>{" "}
        and Jeremiah’s <br />
        &nbsp; vulnerability in telling his story! Excited to get a copy for all
        of my <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; students for next school year."
      </p>
      <p className="small-text-about-the-book">L. Boykins</p>
      <p className="text-s-about-the-book">Educator</p>
    </div>
  );
}
