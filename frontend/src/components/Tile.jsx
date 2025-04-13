import React, { useEffect, useState } from "react";

const Tile = (props) => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (props.gridStatus == "clear") {
      setColor("#ffffff");
    }
  }, [props.gridStatus]);

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
