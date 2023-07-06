import { useState } from "react";

import "./App.css";

import search from "./icons/search.svg";

export function App() {
  const [active, isActive] = useState(false);

  return (
    <div className="search">
      <input className="input" type="text" placeholder="Search" />
      <button className="btn">
        <img src={search} alt="Search" />
      </button>
    </div>
  );
}
