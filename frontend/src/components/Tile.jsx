import React, { useEffect, useState } from "react";

const Tile = (props) => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (props.clearGrid) {
      setColor("#ffffff");
    }
  }, [props.clearGrid]);

  const HandleColorChange = (e) => {
    if (e.nativeEvent.buttons == 1) {
      UpdateColor();
    }
  };

  const UpdateColor = () => {
    console.log(props.recentColors);
    console.log(props.newColor);
    console.log(props.recentColors.indexOf(props.newColor) != -1);
    if (props.recentColors.indexOf(props.newColor) == -1) {
      props.setRecentColors((prevArray) => {
        if (prevArray.length >= 10) {
          prevArray.shift();
        }
        return [...prevArray, props.newColor];
      });
    }
    setColor(props.newColor);
  };

  return (
    <div
      onClick={() => UpdateColor()}
      onMouseEnter={(e) => HandleColorChange(e)}
      onDragStart={(e) => e.preventDefault()} // <-- add this
      onMouseDown={(e) => e.preventDefault()} // <-- also helps with selecting
      style={{
        background: color,
        border: props.gridLines ? "1px solid black" : "none",
        width: "auto",
        height: "auto",
      }}
    ></div>
  );
};

export default Tile;
