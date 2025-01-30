import React from "react";
import "./ThirdPart.css";
import personne from "./images/personne.png";
import star from "./images/star.png";
import logoSmall from "./images/Logosmall.png";
import audiene from "./images/audience.jpg";

export default function ThirdPart() {
  return (
    <div className="d-third-part">
      <div className="d-img-personne">
        <img src={personne} alt="" className="personne-img" />
      </div>
      {/* <div className="d-text-content"> */}
      <img src={star} alt="" className="icon-star1" />
      <img src={star} alt="" className="icon-star2" />
      <img src={star} alt="" className="icon-star3" />
      <img src={star} alt="" className="icon-star4" />
      <img src={star} alt="" className="icon-star5" />
      <p className="text-c">
        "Our team was amazed! In just 15 minutes, everyone felt calmer, more{" "}
        <br />
        focused, and ready to tackle the day. Mario’s guidance was the perfect{" "}
        <br />
        blend of practical and inspiring – this was truly a game-changer for our{" "}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; workplace." <br />
      </p>
      <p className="text-name">RICHARD YEARGIN</p>
      <p className="text-work">Professor at Clemson University</p>
      <img src={logoSmall} alt="" className="logo-small" />
      {/* </div> */}
    </div>
  );
}
