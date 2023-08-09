import mountain from "./images/mountain.jpg";
import overlay from "./images/mountain-overlay.png";

import "./App.css";

export function App() {
  return (
    <div className="card">
      <div className="wrapper">
        <img src={mountain} className="background-img" alt="Mountain" />
      </div>
      <h1 className="title">Yosemite</h1>
      <img className="overlay" src={overlay} alt="Mountain peak" />
    </div>
  );
}
