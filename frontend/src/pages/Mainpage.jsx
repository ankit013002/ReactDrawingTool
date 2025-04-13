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
  const [gridLines, setGridLines] = useState(true);
  const [recentColors, setRecentColors] = useState(["#ff0000", "#ff00ff"]);

  return (
    <div className="mainpage-container">
      <SelectionTools
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
        setIsPaint={setIsPaint}
        setClearGrid={setClearGrid}
        setGridLines={setGridLines}
        color={color}
        setColor={setColor}
        recentColors={recentColors}
      />
      <DrawingGrid
        width={width}
        height={height}
        isPaint={isPaint}
        clearGrid={clearGrid}
        color={color}
        gridLines={gridLines}
        recentColors={recentColors}
        setRecentColors={setRecentColors}
      />
    </div>
  );
};

export default Mainpage;
