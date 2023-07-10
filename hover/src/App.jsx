import classnames from "classnames";

import "./App.css";

import jungleOne from "./images/jungle-one.jpg";
import jungleTwo from "./images/jungle-two.jpg";
import jungleThree from "./images/jungle-three.jpg";
import jungleFour from "./images/jungle-four.jpg";

const images = [
  {
    id: 1,
    src: jungleOne,
    alt: "jungle",
    label: "Blur",
    styles: {
      blur: true,
      fade: true,
    },
  },
  {
    id: 2,
    src: jungleTwo,
    alt: "jungle",
    label: "Zoom",
    styles: {
      fade: true,
      zoom: true,
    },
  },
  {
    id: 3,
    src: jungleThree,
    alt: "jungle",
    label: "Slide",
    styles: { blur: true, slideLeft: true },
  },
  {
    id: 4,
    src: jungleFour,
    alt: "jungle",
    label: "Grayscale",
    styles: { grayScale: true, slideLeft: true },
  },
];

export function App() {
  return (
    <div className="grid">
      {images.map(({ id, src, alt, label, styles }) => (
        <div key={id} className="img-container">
          <img
            src={src}
            alt={alt}
            className={classnames(
              styles?.blur && "blur",
              styles?.zoom && "zoom",
              styles?.grayScale && "gray-scale"
            )}
          />
          <div
            className={classnames(
              styles?.fade && "fade",
              styles?.slideLeft && "slide-left",
              "label"
            )}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
