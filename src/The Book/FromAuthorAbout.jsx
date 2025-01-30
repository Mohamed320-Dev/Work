import React from "react";
import slide from "../images/img-animated.jpg";
import "./FromAuthorAbout.css";

export default function FromAuthorAbout() {
  return (
    <div className="d-from-author-about">
      <h2 className="name-of-personne-about">From the Author</h2>
      <p className="p-1-personne-about">
        I wrote this book with the intention of empowering <br />
        individuals to pursue their dreams and overcome <br />
        adversity. It is my belief that everyone has the potential <br />
        to be a leader and make a positive impact on the world. <br />
        This book is meant to provide inspiration and guidance <br />
        for those who may feel doubtful or lost. I hope that it <br />
        will help people to see the leader within themselves and <br />
        unlock their potential to achieve great things. If even <br />
        one person is inspired to pursue their dreams after <br />
        reading this book, then I will consider it a success.
      </p>
      <h4 className="de-text-p-about">Jeremiah Brown</h4>
      <button className="b-about-personne-about">MORE ABOUT MARIO</button>
      <img
        src={slide}
        alt="Jeremiah Slide"
        className="slide-1-personne-about"
      />
    </div>
  );
}
