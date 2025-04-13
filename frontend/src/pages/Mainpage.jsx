import React, { useState } from "react";
import "./Mainpage.css";
import SelectionTools from "../components/SelectionTools";
import DrawingGrid from "../components/DrawingGrid";

const Mainpage = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [isPaint, setIsPaint] = useState(false);
  const [clearGrid, setClearGrid] = useState(0);
  const [color, setColor] = useState("#000000");

  return (
    <div className="mainpage-container">
      <SelectionTools
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
        setIsPaint={setIsPaint}
        setClearGrid={setClearGrid}
        color={color}
        setColor={setColor}
      />
      <DrawingGrid
        width={width}
        height={height}
        isPaint={isPaint}
        clearGrid={clearGrid}
        color={color}
      />
    </div>
  );
};

export default Mainpage;
