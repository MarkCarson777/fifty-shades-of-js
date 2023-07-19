import { useState, useEffect, useRef } from "react";

export function Card({ image, title }) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const cardRef = useRef(null);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const onMouseMove = (event) => {
    setMouseX(event.pageX - cardRef.current.offsetLeft - width / 2);
    setMouseY(event.pageY - cardRef.current.offsetTop - height / 2);
  };

  const onMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const onMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseLeaveDelay(delay);
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  return (
    <div
      className="container"
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={cardRef}
    >
      <div
        className="card"
        style={{
          transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
        }}
      >
        <div
          className="img"
          style={{
            transform: `translateX(${mousePX * -40}px) translateY(${
              mousePY * -40
            }px)`,
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}
