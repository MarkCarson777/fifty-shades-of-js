import { useState, useEffect } from "react";

import "./App.css";

export function App() {
  const [paddle1Y, setPaddle1Y] = useState(0);
  const [paddle2Y, setPaddle2Y] = useState(0);
  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(0);

  useEffect(() => {
    const onKeyDown = (event) => {
      // update paddle positions depending on key presses
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    // move ball
    // check for collisions
  }, [paddle1Y, paddle2Y, ballX, ballY]);

  return <div>{/*Render game components*/}</div>;
}
