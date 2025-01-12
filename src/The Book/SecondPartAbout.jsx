import React from "react";
import "./SecondPartAbout.css";
import star from "../images/star.png";
import img_john from "../images/img-john.png";

export default function SecondPartAbout() {
  return (
    <div className="second-d-about">
      <img src={star} alt="" className="icon-star-1-about" />
      <img src={star} alt="" className="icon-star-2-about" />
      <img src={star} alt="" className="icon-star-3-about" />
      <img src={star} alt="" className="icon-star-4-about" />
      <img src={star} alt="" className="icon-star-5-about" />
      <p className="text-about">
        "Coach Brown tells an incredible story here, but more importantly he{" "}
        <br />
        provides <strong> practical steps </strong>for young athletes to reach
        their goals within <br />
        &nbsp;&nbsp;&nbsp; and beyond their sport. Highly recommend for all
        student athletes,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        coaches, and parents of student athletes!"
      </p>
      <p className="small-text-about">BRIAN FRIEDMAN</p>
      <p className="text-s-about">Director of Athletics, John Jay Campus</p>
      <img src={img_john} alt="" className="img-john" />
    </div>
  );
}
