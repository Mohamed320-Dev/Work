import React, { useState, useEffect } from "react";
import "./Section.css";

export default function Section() {
  const [firstNumber, setFirstNumber] = useState(50);
  const [secondNumber, setSecondNumber] = useState(80);
  const [thirdNumber, setThirdNumber] = useState(0);

  useEffect(() => {
    // Increment first number from 50 to 80
    const incrementFirst = setInterval(() => {
      setFirstNumber((prev) => {
        if (prev < 75) return prev + 1;
        clearInterval(incrementFirst);
        return prev;
      });
    }, 50);

    // Increment second number from 80 to 100
    const incrementSecond = setInterval(() => {
      setSecondNumber((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(incrementSecond);
        return prev;
      });
    }, 50);

    // Increment third number from 0 to 20
    const incrementThird = setInterval(() => {
      setThirdNumber((prev) => {
        if (prev < 20) return prev + 1;
        clearInterval(incrementThird);
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(incrementFirst);
      clearInterval(incrementSecond);
      clearInterval(incrementThird);
    };
  }, []);

  return (
    <div className="d-section">
      <div className="element-btn">
        <a href="#">
          <span className="text-element">BOOK JEREMIAH NOW</span>
        </a>
      </div>
      <div className="d-numbers">
        <div className="div-first-part">
          <h3 className="first-text-number">EVENTS PER YEAR</h3>
          <span className="number-d-1">{firstNumber}</span>
          <span className="icon-d-1">+</span>
        </div>
        {/* ** */}
        <div className="div-second-number">
          <h3 className="second-text-number">ORGANISATION/SCHOOL SERVED</h3>
          <span className="number-d-2">{secondNumber}</span>
          <span className="icon-d-2">+</span>
        </div>
        {/* ** */}
        <div className="div-third-number">
          <h3 className="third-text-number">REPEAT AUDIENCES</h3>
          <span className="number-d-3">{thirdNumber}</span>
          <span className="icon-d-3">+</span>
        </div>
      </div>
    </div>
  );
}
