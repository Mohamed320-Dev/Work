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
        "Jeremiah Brown is an incredible speaker and having him speak to <br />
        my undergraduate and graduate students here at Clemson{" "}
        <strong>
          has been <br />a game changer.
        </strong>{" "}
        His story and presentation skills had each of my <br />
        students at the edge of their seats wanting more and more. Excited{" "}
        <br />
        to bring Jeremiah and his team at Lead back to Clemson University."
      </p>
      <p className="text-name">RICHARD YEARGIN</p>
      <p className="text-work">Professor at Clemson University</p>
      <img src={logoSmall} alt="" className="logo-small" />
      {/* </div> */}
    </div>
  );
}
