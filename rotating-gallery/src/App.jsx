import "./App.css";

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
  return (
    <div className="container">
      {images.map(({ id, image, alt }) => (
        <span key={id}>
          <img src={image} alt={alt} />
        </span>
      ))}
    </div>
  );
}
