import "./App.css";

import jungleOne from "./images/jungle-one.jpg";
import jungleTwo from "./images/jungle-two.jpg";
import jungleThree from "./images/jungle-three.jpg";
import jungleFour from "./images/jungle-four.jpg";

const images = [
  { id: 1, src: jungleOne, alt: "jungle", label: "This is an image" },
  { id: 2, src: jungleTwo, alt: "jungle", label: "This is an image" },
  { id: 3, src: jungleThree, alt: "jungle", label: "This is an image" },
  { id: 4, src: jungleFour, alt: "jungle", label: "This is an image" },
];

export function App() {
  return (
    <div>
      {images.map(({ id, src, alt, label }) => (
        <div key={id}>
          <img src={src} alt={alt} />
          <div>{label}</div>
        </div>
      ))}
    </div>
  );
}
