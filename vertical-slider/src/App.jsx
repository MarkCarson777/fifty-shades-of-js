import "./App.css";

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
      <div className="left-slide"></div>
      <div className="right-slide">
        {images.map(({ id, image }) => (
          <div key={id} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
    </div>
  );
}
