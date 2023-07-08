import "./App.css";

import jungleOne from "./images/jungle-one.jpg";
import jungleTwo from "./images/jungle-two.jpg";
import jungleThree from "./images/jungle-three.jpg";
import jungleFour from "./images/jungle-four.jpg";

const images = [
  { id: 1, image: jungleOne },
  { id: 2, image: jungleTwo },
  { id: 3, image: jungleThree },
  { id: 4, image: jungleFour },
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
