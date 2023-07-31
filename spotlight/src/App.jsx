import React, { useRef, useEffect } from "react";

import "./App.css";

export const App = () => {
  const heroRef = useRef(null);
  const lightRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    const shine = (e) => {
      const {
        offsetWidth: width,
        offsetHeight: height,
        offsetLeft: left,
        offsetTop: top,
      } = heroRef.current;
      const { clientX, clientY } = e;

      const xCenter = (left + width) / 2;
      const yCenter = (top + height) / 2;
      const x = clientX - left;
      const y = clientY - top;
      const angle = Math.atan2(x - xCenter, -(y - yCenter)) * (180 / Math.PI);

      lightRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    };

    heroRef.current.addEventListener("mousemove", shine);

    return () => {
      heroRef.current.removeEventListener("mousemove", shine);
    };
  }, []);

  return (
    <div className="container">
      <div className="hero" ref={heroRef}>
        <p>
          dcscsdcsdcsdcsdcsdcsdsdvsdvvvdvxcvxcvxcvxcvxvxcvxcvxcvxcvxcvxcvxcvxc
        </p>
        <span className="xy-center" ref={lightRef}></span>
        <h1 className="xy-center" ref={sourceRef}>
          😏
        </h1>
      </div>
    </div>
  );
};
