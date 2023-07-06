import { useEffect, useState } from "react";

import "./App.css";

export function App() {
  // select colors for the hover effect
  const colors = [
    "rgba(214, 87, 69, 1.00)",
    "rgba(133, 72, 168, 1.00)",
    "rgba(82, 150, 213, 1.00)",
    "rgba(216, 131, 59, 1.00)",
    "rgba(101, 201, 122, 1.00)",
  ];
  // set number of tiles required
  const tiles = 500;
  // initialise the tileSet state variable with a value of an empty array
  const [tileSet, setTileSet] = useState([]);

  // generate a set of tiles when the component is mounted
  useEffect(() => {
    // create an array where the number of elements is specified by the tiles variable
    const tileSet = [];

    for (let i = 0; i < tiles; i++) {
      const tile = { id: i };
      tileSet.push(tile);
    }

    setTileSet(tileSet);
  }, []);

  // set the color of the tile
  function setColor(index) {
    setTileSet((prevTiles) => {
      // use most recent state value
      const newTiles = [...prevTiles];
      // select random color
      const color = getRandomColor();

      // create new tile object at specific index
      newTiles[index] = {
        // copy all properties of the original
        ...newTiles[index],
        // update the following properties
        backgroundColor: color,
        boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
      };

      // update state with newTiles array
      return newTiles;
    });
  }

  // reset the color of the tile
  function resetColor(index) {
    setTileSet((prevTiles) => {
      // use most recent state value
      const newTiles = [...prevTiles];

      // create new tile object at specific index
      newTiles[index] = {
        // copy all properties of the original
        ...newTiles[index],
        // update the following properties
        backgroundColor: "#1d1d1d",
        boxShadow: "0 0 2px #000",
      };

      // update state with newTiles array
      return newTiles;
    });
  }

  // pick a random color from the colors array
  function getRandomColor() {
    const element = Math.floor(Math.random() * colors.length);
    return colors[element];
  }

  return (
    <div className="container">
      {tileSet.map((tile) => (
        <div
          key={tile.id}
          className="tile"
          style={{
            background: tile.backgroundColor,
            boxShadow: tile.boxShadow,
          }}
          onMouseOver={() => setColor(tile.id)}
          onMouseOut={() => resetColor(tile.id)}
        />
      ))}
    </div>
  );
}
