import React, { useState } from "react";
import "./SelectionTools.css";

const SelectionTools = (props) => {
  const [colorInUse, setColorInUse] = useState("");

  return (
    <div className="selection-tools-container">
      <div className="selection-slider-container">
        <div className="selection-width-container">
          <div className="selection-width-title">Grid Width</div>
          <div className="selection-slider-width-container">
            <input
              type="range"
              value={props.width}
              onChange={(e) => props.setWidth(e.target.value)}
              min="1"
              max="100"
              className="selection-slider-width"
            />
            <div className="selection-text-width-container">{props.width}</div>
          </div>
        </div>
        <div className="selection-height-container">
          <div className="selection-height-title">Grid Height</div>
          <div className="selection-slider-height-container">
            <input
              type="range"
              value={props.height}
              onChange={(e) => props.setHeight(e.target.value)}
              min="1"
              max="100"
              className="selection-slider-height"
            />
            <div className="selection-text-height-container">
              {props.height}
            </div>
          </div>
        </div>
      </div>
      <div className="selection-color-array">
        {props.recentColors.map((item, index) => (
          <div
            key={index}
            style={{ background: item, height: "60%", width: "20%" }}
            onClick={() => {
              setColorInUse(item);
              props.setColor(item);
            }}
          ></div>
        ))}
      </div>
      <div className="selection-buttons-container">
        <button
          onClick={() =>
            props.setClearGrid((prevClearGrid) => {
              return prevClearGrid + 1;
            })
          }
          className="selection-button"
        >
          Clear Grid
        </button>
        <button
          onClick={() =>
            props.setGridLines((prevGridLines) => {
              return !prevGridLines;
            })
          }
          className="selection-button"
        >
          Grid Lines
        </button>
        <div className="color-selection-container">
          <div
            style={{
              backgroundColor: props.color,
              width: "20%",
            }}
          ></div>
          <input
            style={{ width: "80%" }}
            onChange={(e) => {
              if (e.target.value.length == 6) {
                props.setColor("#" + e.target.value);
                setColorInUse("#" + e.target.value);
              }
            }}
          />
        </div>
        <button
          onClick={() => props.setColor(colorInUse)}
          className="selection-button"
        >
          Paint
        </button>
        <button
          onClick={() => props.setColor("#ffffff")}
          className="selection-button"
        >
          Erase
        </button>
      </div>
    </div>
  );
};

export default SelectionTools;
