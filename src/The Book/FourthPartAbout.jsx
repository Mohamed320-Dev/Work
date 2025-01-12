import React from "react";
import "./FourthPartAbout.css";
import checked from "../images/Check.png";

export default function FourthPartAbout() {
  return (
    <div className="d-fourth-about">
      <h2 className="t-text-about">THIS BOOK IS FOR YOU IF YOU'RE...</h2>
      <img src={checked} alt="" className="icon-checked-about-1" />
      <p className="t-ch-about-1"> Parent of a student and or athlete </p>
      {/* **** */}
      <img src={checked} alt="" className="icon-checked-about-2" />
      <p className="t-ch-about-2">
        {" "}
        Student or athlete with goals of being successful inside and <br />
        outside of your sport{" "}
      </p>
      {/* ********* */}
      <img src={checked} alt="" className="icon-checked-about-3" />
      <p className="t-ch-about-3">
        {" "}
        Teacher or coach looking to educate, equip, and empower <br />
        your students and athletes to be leaders
      </p>
    </div>
  );
}
