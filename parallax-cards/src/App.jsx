import { Card } from "./components/Card";

import "./App.css";

import parallaxOne from "./images/parallaxOne.jpg";
import parallaxTwo from "./images/parallaxTwo.jpg";
import parallaxThree from "./images/parallaxThree.jpg";
import parallaxFour from "./images/parallaxFour.jpg";

const images = [
  { img: parallaxOne, title: "Image", desc: "Description" },
  { img: parallaxTwo, title: "Image", desc: "Description" },
  { img: parallaxThree, title: "Image", desc: "Description" },
  { img: parallaxFour, title: "Image", desc: "Description" },
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
