import React, { useState, useEffect } from "react";
import "./BookPart.css";
import book_img from "./images/book.png";

export default function BookPart() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".img-book");
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load in case the element is already visible

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="d-book-part">
      <img
        src={book_img}
        alt="Book"
        className={`img-book ${isAnimated ? "animated-d" : ""}`}
      />
      <h2 className="t-1">
        EVERYONE HAS THE POTENTIAL <br />
        TO BE A LEADER.
      </h2>
      <p className="p-1">
        <i>
          Lead Like a Champion: A Social Emotional Leadership Playbook for{" "}
          <br />
          Student & Athlete Success{" "}
        </i>
        is the perfect playbook for both students <br />
        and athletes on how to navigate success on and off the field.
      </p>
      <button className="b-1">GET YOUR COPY</button>
      <button className="b-2">LEARN MORE</button>
    </div>
  );
}
