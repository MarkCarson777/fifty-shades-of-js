import { useState } from "react";

import "./App.css";

import left from "./icons/angles-left.svg";
import right from "./icons/angles-right.svg";

import snowOne from "./images/snow-one.jpg";
import snowTwo from "./images/snow-two.jpg";
import snowThree from "./images/snow-three.jpg";
import snowFour from "./images/snow-four.jpg";
import snowFive from "./images/snow-five.jpg";
import snowSix from "./images/snow-six.jpg";
import snowSeven from "./images/snow-seven.jpg";
import snowEight from "./images/snow-eight.jpg";

const images = [
  { id: 1, image: snowOne, alt: "Image One" },
  { id: 2, image: snowTwo, alt: "Image Two" },
  { id: 3, image: snowThree, alt: "Image Three" },
  { id: 4, image: snowFour, alt: "Image Four" },
  { id: 5, image: snowFive, alt: "Image Five" },
  { id: 6, image: snowSix, alt: "Image Six" },
  { id: 7, image: snowSeven, alt: "Image Seven" },
  { id: 8, image: snowEight, alt: "Image Eight" },
];

export function App() {
  const [rotateY, setRotateY] = useState(45);
  const [activeBtn, setActiveBtn] = useState(null);

  const onClick = (button) => {
    setActiveBtn(button);

    button === "prev" ? onPrev() : onNext();

    setTimeout(() => {
      setActiveBtn(null);
    }, 500);
  };

  function onPrev() {
    setRotateY((prevY) => prevY + 45);
  }

  function onNext() {
    setRotateY((prevY) => prevY - 45);
  }

  return (
    <>
      <div
        className="img-container"
        style={{ transform: `perspective(1000px) rotateY(${rotateY}deg)` }}
      >
        {images.map(({ id, image, alt }) => (
          <span
            key={id}
            style={{
              transform: `rotateY(calc(${id} * 45deg)) translateZ(400px)`,
            }}
          >
            <img src={image} alt={alt} />
          </span>
        ))}
      </div>
      <div className="btn-container">
        <button
          className={`btn ${activeBtn === "prev" && "pulse"}`}
          onClick={() => onClick("prev")}
        >
          <img src={left} alt="Left" />
        </button>
        <button
          className={`btn ${activeBtn === "next" && "pulse"}`}
          onClick={() => onClick("next")}
        >
          <img src={right} alt="Right" />
        </button>
      </div>
    </>
  );
}
