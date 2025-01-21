import React, { useEffect, useState } from "react";
import "./LookInside.css";

export default function LookInside() {
  const [isAnimated1, setIsAnimated1] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);
  const [isAnimated4, setIsAnimated4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element1 = document.querySelector(".text-1-cercle1-about");
      const rect1 = element1.getBoundingClientRect();
      const isVisible1 = rect1.top < window.innerHeight && rect1.bottom >= 0;
      if (isVisible1) {
        setIsAnimated1(true);
      }

      const element2 = document.querySelector(".text-2-cercle2-about");
      const rect2 = element2.getBoundingClientRect();
      const isVisible2 = rect2.top < window.innerHeight && rect2.bottom >= 0;
      if (isVisible2) {
        setIsAnimated2(true);
      }

      const element3 = document.querySelector(".text-3-cercle3-about");
      const rect3 = element3.getBoundingClientRect();
      const isVisible3 = rect3.top < window.innerHeight && rect3.bottom >= 0;
      if (isVisible3) {
        setIsAnimated3(true);
      }

      const element4 = document.querySelector(".text-4-cercle4-about");
      const rect4 = element4.getBoundingClientRect();
      const isVisible4 = rect4.top < window.innerHeight && rect4.bottom >= 0;
      if (isVisible4) {
        setIsAnimated4(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load in case the element is already visible

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="d-look-insid-about">
      <div className="p-title-about">
        <h2 className="title-shoose-about">TAKE A LOOK INSIDE</h2>
      </div>
      <div className="d-line-scroll-about"></div>
      <div className="d-cercle-1-about">
        <p className="p-number-1-about">1</p>
      </div>
      <div className="d-2-cercle1">
        <div className="d-c1-about"></div>
        <h2
          className={`text-1-cercle1-about ${
            isAnimated1 ? "animated-text1-about" : ""
          }`}
        >
          {" "}
          YOUR WHY IS YOUR SUPERPOWER
        </h2>
      </div>
      {/* // **** */}
      <div className="d-cercle-2-about">
        <p className="p-number-2-about">2</p>
      </div>
      <div className="d-3-cercle2">
        <div className="d-c2-about"></div>
        <h2
          className={`text-2-cercle2-about ${
            isAnimated2 ? "animated-text2-about" : ""
          }`}
        >
          {" "}
          SHOW ME YOUR FRIENDS AND I’LL SHOW YOU YOUR FUTURE
        </h2>
      </div>
      {/* // ******** */}
      <div className="d-cercle-3-about">
        <p className="p-number-3-about">3</p>
      </div>
      <div className="d-4-cercle3">
        <div className="d-c3-about"></div>
        <h2
          className={`text-3-cercle3-about ${
            isAnimated3 ? "animated-text3-about" : ""
          }`}
        >
          YOUR SPORT IS WHAT YOU DO, NOT WHO YOU ARE
        </h2>
      </div>
      {/* // ******* */}
      <div className="d-cercle-4-about">
        <p className="p-number-4-about">4</p>
      </div>
      <div className="d-5-cercle4">
        <div className="d-c4-about"></div>
        <h2
          className={`text-4-cercle4-about ${
            isAnimated4 ? "animated-text4-about" : ""
          }`}
        >
          DIFFICULT TIMES CAN DEVELOP, DEFEAT OR DEFINE YOU
        </h2>
      </div>
      {/* // ******** */}
      <div className="d-cercle-5-about">
        <p className="p-number-5-about">5</p>
      </div>
      <div className="d-6-cercle5">
        <div className="d-c5-about"></div>
        <h2 className="text-5-cercle5-about">
          LEGACY LEADERSHIP - YOU DON’T NEED A TITLE TO BE LEADER
        </h2>
      </div>
      {/* // ******** */}
      <div className="d-cercle-6-about">
        <p className="p-number-6-about">6</p>
      </div>
      <div className="d-7-cercle6">
        <div className="d-c6-about"></div>
        <h2 className="text-6-cercle6-about">
          HIGH VALUES LEAD TO HIGH PERFORMANCE
        </h2>
      </div>
      {/* // ********* */}
      <div className="d-cercle-7-about">
        <p className="p-number-7-about">7</p>
      </div>
      <div className="d-8-cercle7">
        <div className="d-c7-about"></div>
        <h2 className="text-7-cercle7-about">COMMUNICATION BRIDGES THE GAP</h2>
      </div>
      {/* // ******* */}
      <div className="d-cercle-8-about">
        <p className="p-number-8-about">8</p>
      </div>
      <div className="d-9-cercle8">
        <div className="d-c8-about"></div>
        <h2 className="text-8-cercle8-about"> YOU VS YOU</h2>
      </div>
      {/* // ********** */}
      <div className="d-cercle-9-about">
        <p className="p-number-9-about">9</p>
      </div>
      <div className="d-10-cercle9">
        <div className="d-c9-about"></div>
        <h2 className="text-9-cercle9-about"> THE P.A.T.H. TO CONFIDENCE</h2>
      </div>
      {/* // ******** */}
      <div className="d-cercle-10-about">
        <p className="p-number-10-about">10</p>
      </div>
      <div className="d-11-cercle10">
        <div className="d-c10-about"></div>
        <h2 className="text-10-cercle10-about"> YOUR NAME, IMAGE & LIKENESS</h2>
      </div>
    </div>
  );
}
