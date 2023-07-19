import { Card } from "./components/Card";

import "./App.css";

import parallaxOne from "./images/parallaxOne.jpg";
import parallaxTwo from "./images/parallaxTwo.jpg";
import parallaxThree from "./images/parallaxThree.jpg";
import parallaxFour from "./images/parallaxFour.jpg";

const images = [
  { img: parallaxOne, title: "Alps" },
  { img: parallaxTwo, title: "Dolomites" },
  { img: parallaxThree, title: "Pyrenees" },
  { img: parallaxFour, title: "Atlas" },
];

export function App() {
  return (
    <div className="page-container">
      {images.map(({ img, title }) => (
        <Card image={img} title={title} />
      ))}
    </div>
  );
}
