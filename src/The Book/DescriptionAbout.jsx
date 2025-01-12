import React from "react";
import "./DescriptionAbout.css";
import stars from "../images/star.png";

export default function DescriptionAbout() {
  return (
    <div className="description-d-about">
      <img src={stars} alt="" className="star-about-1" />
      <img src={stars} alt="" className="star-about-2" />
      <img src={stars} alt="" className="star-about-3" />
      <img src={stars} alt="" className="star-about-4" />
      <img src={stars} alt="" className="star-about-5" />
      <p className="text-desc-about">
        "<b>&nbsp;This book should be in every high school.</b> I wish I had a{" "}
        <br />
        &nbsp; book like this back when I was in high school playing sports.{" "}
        <br />
        &nbsp;&nbsp; Every student athlete can relate to his book. It’s the
        untold <br />
        &nbsp; story of student athletes that now has emerged. I definitely{" "}
        <br />
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; recommend whether you are a student
        athlete, college <br />
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; student athlete, parent, or coach
        to read this book."
      </p>
      <p className="tex-desc2-about">CATHERINE DORAN</p>
      <p className="small-desc-about">Educator</p>
      <img src={stars} alt="" className="star-about-6" />
      <img src={stars} alt="" className="star-about-7" />
      <img src={stars} alt="" className="star-about-8" />
      <img src={stars} alt="" className="star-about-9" />
      <img src={stars} alt="" className="star-about-10  " />
      <p className="t-desc3-about">
        "A book I’ve been looking forward to! Dedicated to student <br />
        &nbsp; athletes, parents, coaches, and every day people to take <br />
        action and help support the upcoming generation to lead. I <br />
        believe in the climate <b>this book is needed</b> to help shift our{" "}
        <br />
        &nbsp;&nbsp;&nbsp; thinking from a me culture but to a we culture to
        help <br />
        advance the upcoming generation and prepare them for what’s <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        next!"
      </p>
      <p className="small-te-about">PAUETTE MANHERTZ</p>
    </div>
  );
}
