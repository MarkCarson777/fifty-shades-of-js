import { useState, useEffect, useRef } from "react";

export function Card({ image, title }) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseOutDelay, setMouseOutDelay] = useState(null);

  const cardRef = useRef(null);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const onMouseMove = (event) => {
    setMouseX(event.pageX - cardRef.current.offsetLeft - width / 2);
    setMouseY(event.pageY - cardRef.current.offsetTop - height / 2);
  };

  const onMouseIn = () => {
    clearTimeout(mouseOutDelay);
  };

  const onMouseOut = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseOutDelay(delay);
  };

  const mouseXPosition = mouseX / width;
  const mouseYPosition = mouseY / height;

  return (
    <div
      className="container"
      onMouseMove={onMouseMove}
      onMouseIn={onMouseIn}
      onMouseOut={onMouseOut}
      ref={cardRef}
    >
      <div
        className="card"
        style={{
          transform: `rotateY(${mouseXPosition * 30}deg) rotateX(${
            mouseYPosition * -30
          }deg)`,
        }}
      >
        <div
          className="img"
          style={{
            transform: `translateX(${mouseXPosition * -40}px) translateY(${
              mouseYPosition * -40
            }px)`,
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}
