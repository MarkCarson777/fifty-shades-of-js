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
  return (
    <div className="container">
      <div className="left-slide">
        <div
          style={{ backgroundColor: "rgba(247, 115, 39, 1.0)", color: "white" }}
        >
          <span>Waterfall One</span>
        </div>
        <div>
          <span>Waterfall Two</span>
        </div>
        <div>
          <span>Waterfall Three</span>
        </div>
        <div>
          <span>Waterfall Four</span>
        </div>
      </div>
      <div className="right-slide">
        {images.map(({ id, image }) => (
          <div key={id} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <div className="buttons">
        <button className="up-button">
          <img src={up} />
        </button>
        <button className="down-button">
          <img src={down} />
        </button>
      </div>
    </div>
  );
}
