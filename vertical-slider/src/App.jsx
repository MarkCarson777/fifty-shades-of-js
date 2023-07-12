import { useState, useEffect, useRef } from "react";

import "./App.css";

import up from "./icons/circle-chevron-up.svg";
import down from "./icons/circle-chevron-down.svg";

import waterfallOne from "./images/waterfall-one.jpg";
import waterfallTwo from "./images/waterfall-two.jpg";
import waterfallThree from "./images/waterfall-three.jpg";
import waterfallFour from "./images/waterfall-four.jpg";

const images = [
  {
    id: 1,
    image: waterfallOne,
    color: "rgba(60, 108, 80, 1.0)",
    label: "Waterfall One",
  },
  {
    id: 2,
    image: waterfallTwo,
    color: "rgba(130, 133, 174, 1.0)",
    label: "Waterfall Two",
  },
  {
    id: 3,
    image: waterfallThree,
    color: "rgba(76, 124, 159, 1.0)",
    label: "Waterfall Three",
  },
  {
    id: 4,
    image: waterfallFour,
    color: "rgba(234, 140, 84, 1.0)",
    label: "Waterfall Four",
  },
];

export function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [pulse, setPulse] = useState(false);

  const sliderContainerRef = useRef(null);
  const slideLeftRef = useRef(null);
  const slideRightRef = useRef(null);

  const onClick = (id, direction) => {
    setActiveButton(id);
    setPulse(true);
    changeSlide(direction);

    setTimeout(() => {
      setActiveButton(null);
      setPulse(false);
    }, 500);
  };

  useEffect(() => {
    const slidesLength = slideRightRef.current.querySelectorAll("div").length;
    slideLeftRef.current.style.top = `-${(slidesLength - 1) * 100}vh`;
    setSliderHeight(sliderContainerRef.current.clientHeight);
  }, []);

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainerRef.current.clientHeight;

    setActiveSlideIndex((prevIndex) => {
      if (direction === "up") {
        return prevIndex + 1;
      } else if (direction === "down") {
        return prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    const slidesLength = slideRightRef.current.querySelectorAll("div").length;

    if (activeSlideIndex > slidesLength - 1) {
      setActiveSlideIndex(0);
    } else if (activeSlideIndex < 0) {
      setActiveSlideIndex(slidesLength - 1);
    }

    slideRightRef.current.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
    slideLeftRef.current.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  }, [activeSlideIndex, sliderHeight]);

  return (
    <div className="container" ref={sliderContainerRef}>
      <div className="left-slide" ref={slideLeftRef}>
        {images.map(({ id, color, label }) => (
          <div
            key={id}
            id={id}
            style={{
              backgroundColor: color,
              color: "white",
            }}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="right-slide" ref={slideRightRef}>
        {images.map(({ id, image }) => (
          <div key={id} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <div className="buttons">
        <button
          className={`up-button ${pulse && activeButton === 1 ? "pulse" : ""}`}
          onClick={() => onClick(1, "up")}
        >
          <img src={up} alt="up" />
        </button>
        <button
          className={`down-button ${
            pulse && activeButton === 2 ? "pulse" : ""
          }`}
          onClick={() => onClick(2, "down")}
        >
          <img src={down} alt="down" />
        </button>
      </div>
    </div>
  );
}
