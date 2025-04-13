import React from "react";
import "./SelectionTools.css";

const SelectionTools = (props) => {
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
      <div className="selection-buttons-container">
        <button
          onClick={() =>
            props.setClearGrid((prevClearGrid) => {
              return prevClearGrid + 1;
            })
          }
          className="clear-grid-button"
        >
          Clear Grid
        </button>
        <div className="color-selection-container">
          <div
            style={{
              backgroundColor: props.color,
              width: "50%",
            }}
          ></div>
          <input
            style={{ width: "50%" }}
            onChange={(e) => props.setColor(e.target.value)}
          />
        </div>
        <button
          onClick={() => props.setColor("#ffffff")}
          className="erase-button"
        >
          Erase
        </button>
      </div>
    </div>
  );
};

export default SelectionTools;
