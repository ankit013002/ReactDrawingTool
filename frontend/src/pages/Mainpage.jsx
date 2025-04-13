import React, { useState } from "react";
import "./Mainpage.css";
import SelectionTools from "../components/SelectionTools";
import DrawingGrid from "../components/DrawingGrid";

const Mainpage = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isPaint, setIsPaint] = useState(false);
  const [gridCreation, setGridCreation] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <div className="mainpage-container">
      <SelectionTools
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
        setIsPaint={setIsPaint}
        setGridCreation={setGridCreation}
        color={color}
        setColor={setColor}
      />
      <DrawingGrid
        width={width}
        height={height}
        isPaint={isPaint}
        gridCreation={gridCreation}
        color={color}
      />
    </div>
  );
};

export default Mainpage;
