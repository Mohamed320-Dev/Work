import React from "react";
import "./ThirdPartAbout.css";
import img_personnes from "../images/img-1.jpg";

export default function ThirdPartAbout() {
  return (
    <div className="third-d-about">
      <h2 className="title-text-about">WHAT YOU WILL LEARN</h2>
      <img src={img_personnes} alt="" className="img-personnes-about" />
      <p className="text-body-about">
        <strong>What you'll Learn: </strong>
        <br />
        you'll gain practical, evidence-based tools to manage stress, enhance{" "}
        <br />
        focus, and find balance. Discover mindfulness techniques to improve{" "}
        <br />
        mental clarity, sound therapy tp reset your nervous system, and <br />
        personalized strategies tailored to your unique needs. Walk away with{" "}
        <br />
        sustainable habits and simple practices to cultivate resilience and{" "}
        <br />
        maintain well-being in your daily life.
      </p>
    </div>
  );
}
