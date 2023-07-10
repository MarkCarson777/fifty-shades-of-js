import "./App.css";

import jungleOne from "./images/jungleOne.jpg";
import jungleTwo from "./images/jungleTwo.jpg";
import jungleThree from "./images/jungleThree.jpg";
import jungleFour from "./images/jungleFour.jpg";

const images = [
  { id: 1, src: jungleOne, alt: "jungle" },
  { id: 2, src: jungleTwo, alt: "jungle" },
  { id: 3, src: jungleThree, alt: "jungle" },
  { id: 4, src: jungleFour, alt: "jungle" },
];

export function App() {
  return (
    <div>
      <div>
        <img src="#" alt="image" />
        <div>This is an image</div>
      </div>
      <div>
        <img src="#" alt="image" />
        <div>This is an image</div>
      </div>
      <div>
        <img src="#" alt="image" />
        <div>This is an image</div>
      </div>
      <div>
        <img src="#" alt="image" />
        <div>This is an image</div>
      </div>
    </div>
  );
}
