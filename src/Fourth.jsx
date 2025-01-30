import React from "react";
import "./Fourth.css";
import check from "./images/Check.png";
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import arrow from "./images/arrow.png";

export default function Fourth() {
  return (
    <div className="d-fourth-part">
      {/* <div className="seond-d"> */}
      <p className="element-text"> KEYNOTES - VIRTUAL - WORKSHOPS</p>
      <h2 className="h2-text">MARIO WANTS TO SOLVE</h2>
      <ul className="ul-content-fourth">
        <li>
          <span>
            <img src={check} alt="" className="icon-checked-1" />
          </span>
          <span className="text-icon-1">
            The growing issue of workplace stress and burnout.
          </span>
        </li>
        <li>
          <span>
            <img src={check} alt="" className="icon-checked-2" />
          </span>
          <span className="text-icon-2">
            The lack of practical tools for managing everyday anxiety.
          </span>
        </li>

        <li>
          <span>
            <img src={check} alt="" className="icon-checked-3" />
          </span>
          <span className="text-icon-3">
            the chanllenge of maintaining focus and mental clarity in
            high-pressure environments.
          </span>
        </li>
        <li>
          <span>
            <img src={check} alt="" className="icon-checked-4" />
          </span>
          <span className="text-icon-4">
            Limited access to mindfulness techniques and stress relief
            practices.
          </span>
        </li>

        <li>
          <span>
            <img src={check} alt="" className="icon-checked-5" />
          </span>
          <span className="text-icon-5">
            The need for sustainable, simple welness habits that fit into busy
            schedules.
          </span>
        </li>

        <li>
          <span>
            <img src={check} alt="" className="icon-checked-6" />
          </span>
          <span className="text-icon-6">
            The stigma surrounding mental health and seeking support in
            proffessional spaces.
          </span>
        </li>
      </ul>
      <div className="d-img">
        <div className="image-1">
          <img src={img1} alt="" className="img-1-personne" />
          <div className="element-opacity-1"></div>
        </div>
        <img src={img2} alt="" className="img-2-personne" />
        <div className="element-opacity-2"></div>
      </div>
      <ul className="ul-img-content">
        <li>
          <a href="#">
            <span className="text1-img">CAREER & LIFE SKILLS </span>
            {/* <span>
              <img src={arrow} alt="" className="arrow-icon-1" />
            </span> */}
          </a>
        </li>
      </ul>
      <ul className="ul-img-content">
        <li>
          <a href="#">
            <span className="text2-img">DEVELOPING POSITIVE MINDSETS</span>
            {/* <span>
              <img src={arrow} alt="" className="arrow-icon-2" />
            </span> */}
          </a>
        </li>
      </ul>
    </div>
  );
}
