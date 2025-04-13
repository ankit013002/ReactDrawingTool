import React, { useEffect, useState } from "react";

const Tile = (props) => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (props.clearGrid) {
      setColor("#ffffff");
    }
  }, [props.clearGrid]);

  return (
    <div
      onClick={() => setColor(props.newColor)}
      style={{
        background: color,
        border: "1px solid black",
        width: "auto",
        height: "auto",
      }}
    ></div>
  );
};

export default Tile;
