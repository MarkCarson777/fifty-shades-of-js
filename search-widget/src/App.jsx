import { useState } from "react";

import classnames from "classnames";

import "./App.css";

import search from "./icons/search.svg";

export function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classnames("search", isActive && "active")}>
      <input className="input" type="text" placeholder="Search..." />
      <button className="btn" onClick={() => setIsActive(!isActive)}>
        <img src={search} alt="Search" />
      </button>
    </div>
  );
}
