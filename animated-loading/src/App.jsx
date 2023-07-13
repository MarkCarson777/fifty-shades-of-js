import { useState, useEffect } from "react";

import nature from "./images/nature.jpg";

import "./App.css";

export function App() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

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
      {image ? (
        <img className="card-img" src={image} alt={image} />
      ) : (
        <div className="bg-animation img-placeholder"></div>
      )}
      <div className="card-content">
        {title ? (
          <h3 className="card-title">{title}</h3>
        ) : (
          <div className="bg-animation text-placeholder"></div>
        )}
        {description ? (
          <p className="card-desc">{description}</p>
        ) : (
          <div className="bg-animation text-placeholder"></div>
        )}
      </div>
    </div>
  );
}
