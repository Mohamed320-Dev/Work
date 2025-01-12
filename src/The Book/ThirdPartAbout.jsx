import React from "react";
import "./ThirdPartAbout.css";
import img_personnes from "../images/img-1.jpg";

export default function ThirdPartAbout() {
  return (
    <div className="third-d-about">
      <h2 className="title-text-about">WHAT YOU WILL LEARN</h2>
      <img src={img_personnes} alt="" className="img-personnes-about" />
      <p className="text-body-about">
        In <i>Lead Like A Champion,</i> former NFL player, Jeremiah Brown,{" "}
        <br />
        draws on his athletic experience and more than 10 years of <br />
        serving in the NYC school system to explore the foundational <br />
        principles every student-athlete needs to succeed during their <br />
        playing career and in life after sports. Brown expounds on the <br />
        most common issues student-athletes face and provides <br />
        practical steps and strategies they can implement to reach <br />
        their full potential.
      </p>
    </div>
  );
}
