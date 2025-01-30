import React from "react";
import "./FourthPartAbout.css";
import checked from "../images/Check.png";

export default function FourthPartAbout() {
  return (
    <div className="d-fourth-about">
      <h2 className="t-text-about">This is for...</h2>
      <img src={checked} alt="" className="icon-checked-about-1" />
      <p className="t-ch-about-1">
        {" "}
        <strong>Cororate Teams :</strong> Businesses seeking to improve employee
        well-being, reduce burnout, <br />
        and enhance productivity.{" "}
      </p>
      {/* **** */}
      <img src={checked} alt="" className="icon-checked-about-2" />
      <p className="t-ch-about-2">
        {" "}
        <strong>Leadership Teams :</strong> Executives and managers looking for
        effective strategies to manage stress and <br />
        maintain focus under pressure.
      </p>
      {/* ********* */}
      <img src={checked} alt="" className="icon-checked-about-3" />
      <p className="t-ch-about-3">
        {" "}
        <strong>HR Prossionals :</strong> Organizations prioritizing workplace
        wellness and mental health initiatives.
      </p>
      {/* *************** */}
      <img src={checked} alt="" className="icon-checked-about-4" />
      <p className="t-ch-about-4">
        {" "}
        <strong>Educators and Schools :</strong> Teachers, administrators, and
        students seeking mindfulness tools to create <br />a calmer, more
        focused environment.
      </p>
      {/* **************** */}
      <img src={checked} alt="" className="icon-checked-about-5" />
      <p className="t-ch-about-5">
        {" "}
        <strong>Healthcare Providers :</strong> Teams in high-stress fields who
        need practical wellness solutions to prevent burnout.
      </p>
    </div>
  );
}
