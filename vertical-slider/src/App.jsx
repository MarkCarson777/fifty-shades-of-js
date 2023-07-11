import { useState, useEffect, useRef } from "react";

import "./App.css";

import up from "./icons/circle-chevron-up.svg";
import down from "./icons/circle-chevron-down.svg";

import waterfallOne from "./images/waterfall-one.jpg";
import waterfallTwo from "./images/waterfall-two.jpg";
import waterfallThree from "./images/waterfall-three.jpg";
import waterfallFour from "./images/waterfall-four.jpg";

const images = [
  { id: 1, image: waterfallOne },
  { id: 2, image: waterfallTwo },
  { id: 3, image: waterfallThree },
  { id: 4, image: waterfallFour },
];

export function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);
  const [sliderHeight, setSliderHeight] = useState(0);

  const sliderContainerRef = useRef(null);
  const slideLeftRef = useRef(null);
  const slideRightRef = useRef(null);

  useEffect(() => {
    const slidesLength = slideRightRef.current.querySelectorAll("div").length;
    slideLeftRef.current.style.top = `-${(slidesLength - 1) * 100}vh`;
    setSliderHeight(sliderContainerRef.current.clientHeight);
  }, []);

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainerRef.current.clientHeight;

    if (direction === "up") {
      setActiveSlideIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "down") {
      setActiveSlideIndex((prevIndex) => prevIndex - 1);
    }
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
        <div
          id={1}
          style={{
            backgroundColor: "rgba(60, 108, 80, 1.00)",
            color: "white",
          }}
        >
          <span>Waterfall One</span>
        </div>
        <div
          id={2}
          style={{
            backgroundColor: "rgba(196, 199, 199, 1.00)",
            color: "white",
          }}
        >
          <span>Waterfall Two</span>
        </div>
        <div
          id={3}
          style={{
            backgroundColor: "rgba(76, 124, 159, 1.00)",
            color: "white",
          }}
        >
          <span>Waterfall Three</span>
        </div>
        <div
          id={4}
          style={{
            backgroundColor: "rgba(234, 140, 84, 1.00)",
            color: "white",
          }}
        >
          <span>Waterfall Four</span>
        </div>
      </div>
      <div className="right-slide" ref={slideRightRef}>
        {images.map(({ id, image }) => (
          <div key={id} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <div className="buttons">
        <button className="up-button" onClick={() => changeSlide("up")}>
          <img src={up} />
        </button>
        <button className="down-button" onClick={() => changeSlide("down")}>
          <img src={down} />
        </button>
      </div>
    </div>
  );
}
