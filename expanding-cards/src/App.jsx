import { useState } from "react";
import "./App.css";

import mountainOne from "./images/mountain-one.jpg";
import mountainTwo from "./images/mountain-two.jpg";
import mountainThree from "./images/mountain-three.jpg";
import mountainFour from "./images/mountain-four.jpg";
import mountainFive from "./images/mountain-five.jpg";

const images = [
  { id: "1", image: mountainOne, label: "Mountain One" },
  { id: "2", image: mountainTwo, label: "Mountain Two" },
  { id: "3", image: mountainThree, label: "Mountain Three" },
  { id: "4", image: mountainFour, label: "Mountain Four" },
  { id: "5", image: mountainFive, label: "Mountain Five" },
];

export function App() {
  const [activeImg, setActiveImg] = useState("1");

  const onClick = (id) => {
    setActiveImg(id);
  };

  return (
    <div className="container">
      {images.map(({ id, image, label }) => (
        <div
          key={id}
          onClick={() => onClick(id)}
          className={`panel ${activeImg === id ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3>{label}</h3>
        </div>
      ))}
    </div>
  );
}
