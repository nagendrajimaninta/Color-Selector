import "./styles.css";
import React from "react";

export default function App() {
  const [state, setState] = React.useState({
    selectedColor: "",
    appliedColor: "white",
    history: []
  });

  const handleApplyColor = (e) => {
    if (state.appliedColor === state.selectedColor) {
      return;
    }
    setState((prev) => ({
      ...prev,
      appliedColor: prev.selectedColor,
      history: [...prev.history, prev.selectedColor]
    }));
  };
  const handleColorPick = (color) => {
    setState((prevState) => ({ ...prevState, selectedColor: color }));
  };
  return (
    <div className="App">
      <div className="l-containe" r>
        <div
          className="drop"
          onClick={handleApplyColor}
          style={{
            backgroundColor: state.appliedColor
          }}
        ></div>
        <span>
          <strong>Apply Color </strong>
        </span>

        <div className="cp-container">
          {["red", "blue", "green", "yellow"].map((color) => (
            <div
              key={color}
              className="cp"
              onClick={() => handleColorPick(color)}
              style={{ backgroundColor: color }}
            ></div>
          ))}

          <div className="cp">
            <input
              type="color"
              onClick={(e) => handleColorPick(e.target.value)}
              onChange={(e) => handleColorPick(e.target.value)}
            />
          </div>
        </div>
        <span>
          <strong>Pick Color </strong>
        </span>
        <div className="cp-container">
          <div className="cp" style={{ background: state.selectedColor }}></div>
        </div>
        <span>
          <strong>Selected Color </strong>
        </span>
      </div>
      <div className="r-container">
        <span>
          <strong>History</strong>
        </span>
        {state.history.map((color) => (
          <div
            key={"his" + color}
            onClick={() => handleColorPick(color)}
            className="cp his"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
