import React, { useState, useEffect } from "react";
import "./AboutPart.css";
// import slide1 from "./images/slide-1.jpg";
// import slide2 from "./images/slide-2.jpg";
import slide from "./images/img-animated.jpg";

export default function AboutPart() {
  // const [currentSlide, setCurrentSlide] = useState(slide1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide === slide1 ? slide2 : slide1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="d-about-part">
      <h2 className="name-of-personne">MEET MARIO</h2>
      <p className="p-1-personne">
        Licensed Therapist | Mindfulness Advocate Mario <br />
        Wilcox is a licensed therapist passionate about <br />
        teaching the power of mindfulness. His goal is to <br />
        equip individuals with tools to manage stress, <br />
        improve focus, and find balance in their lives.
      </p>
      <button className="b-about-personne">MORE ABOUT MARIO</button>
      <img src={slide} alt="Jeremiah Slide" className="slide-1-personne" />
    </div>
  );
}
