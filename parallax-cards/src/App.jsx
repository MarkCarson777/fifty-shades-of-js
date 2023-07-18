import { Card } from "./components/Card";

import "./App.css";

import tunnelOne from "./images/tunnelOne.jpg";
import tunnelTwo from "./images/tunnelTwo.jpg";
import tunnelThree from "./images/tunnelThree.jpg";
import tunnelFour from "./images/tunnelFour.jpg";

const images = [
  { img: tunnelOne, title: "Image", desc: "Description" },
  { img: tunnelTwo, title: "Image", desc: "Description" },
  { img: tunnelThree, title: "Image", desc: "Description" },
  { img: tunnelFour, title: "Image", desc: "Description" },
];

export function App() {
  return (
    <div className="container">
      {images.map(({ img, title, desc }) => (
        <Card image={img} title={title} desc={desc} />
      ))}
    </div>
  );
}
