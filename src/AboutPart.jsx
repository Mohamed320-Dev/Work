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
    <div>
      <h2 className="name-of-personne">MEET JEREMIAH</h2>
      <p className="p-1-personne">
        As a dynamic professional speaker, Jeremiah <br />
        is dedicated to empowering individuals to <br />
        unlock their full potential, cultivate positive <br />
        team cultures, and embrace servant <br />
        leadership principles.
      </p>
      <p className="p-2-personne">
        With a diverse background as a former NFL <br />
        athlete, director of athletics, and school <br />
        leader, Jeremiah connects with audiences <br />
        ranging from K-12 educators to corporate <br />
        teams. Through his captivating presentations, <br />
        he ignites purpose, resilience, and <br />
        determination, encouraging listeners to <br />
        overcome challenges and achieve their goals. <br />
        Jeremiah’s speaking engagements leave a <br />
        lasting impact, and he has also authored an <br />
        empowering book as a valuable resource. <br />
        Join Jeremiah on a transformative journey to <br />
        unleash greatness and make a lasting impact.
      </p>
      <button className="b-about-personne">MORE ABOUT JEREMIAH</button>
      <img src={slide} alt="Jeremiah Slide" className="slide-1-personne" />
    </div>
  );
}
