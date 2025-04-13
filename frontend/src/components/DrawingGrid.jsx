import React, { useEffect, useState } from "react";
import "./DrawingGrid.css";
import Tile from "./Tile";

const DrawingGrid = (props) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(props.width * props.height);
  }, [props.width, props.height]);

  return (
    <div className="drawing-grid-container">
      <ul className="list">
        <li className="list-item">{props.width}</li>
        <li className="list-item">{props.height}</li>
        <li className="list-item">{props.isPaint.toString()}</li>
        <li className="list-item">{props.gridCreation}</li>
        <li className="list-item">{props.color}</li>
      </ul>
      <div
        style={{
          width: `80%`,
          height: `80%`,
          background: "red",
          display: "grid",
          columnGap: "0",
          rowGap: "0",
          gridTemplateColumns: `repeat(${props.width}, 1fr)`,
          gridTemplateRows: `repeat(${props.height}, 1fr)`,
        }}
      >
        {Array(size)
          .fill(0)
          .map((x, index) => (
            <Tile
              key={index}
              newColor={props.color}
              gridStatus={props.gridCreation}
            />
          ))}
      </div>
    </div>
  );
};

export default DrawingGrid;
