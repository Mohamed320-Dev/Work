import React from "react";
import "./BelievePart.css";
import star from "./images/star.png";
import qunn from "./images/Quinn_White.png";

export default function BelievePart() {
  return (
    <div className="d-believe-part">
      <img src={star} alt="" className="star-icon-1" />
      <img src={star} alt="" className="star-icon-2" />
      <img src={star} alt="" className="star-icon-3" />
      <img src={star} alt="" className="star-icon-4" />
      <img src={star} alt="" className="star-icon-5" />
      <p className="text-description">
        "Jeremiah’s session on transitioning into college for our freshmen was
        incredible. I believe <br />
        Jeremiah's story and his wealth of knowledge truly impacted our first
        year students to start <br />
        &nbsp;&nbsp;&nbsp;&nbsp; off on the right foot. I have never gotten as
        much positive feedback as I have after a <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        speaker has come to campus like I have for Jeremiah."
      </p>
      <p className="t-description">KRISTEN CASAMENTO</p>
      <p className="des-text-bel">
        Senior Assistant Athletic Director of Academic Support at Quinnipiac
        University
      </p>
      <img src={qunn} alt="" className="qunn-icon" />
    </div>
  );
}
