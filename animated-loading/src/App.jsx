import { useState, useEffect } from "react";

import nature from "./images/nature.jpg";

import "./App.css";

export function App() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTimeout(getData, 2500);
  }, []);

  const getData = () => {
    setImage(nature);
    setTitle("This is a title");
    setDescription("This is a description.");
  };

  return (
    <div className="card">
      <img className="card-img" src={image} alt={image} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
}
