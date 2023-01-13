import React, { useState, useEffect } from "react";

export const ColorCodes = () => {
  const [colors, setColors] = useState(Array.from({ length: 3 }));
  const [color, setColor] = useState(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const makeColors = function () {
    const randomColors = colors.map((color) => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      return randomColor;
    });
    const randomIndex = Math.floor(Math.random() * 3);
    setColors(randomColors);
    setColor(randomColors[randomIndex]);
  };

  useEffect(() => {
    makeColors();
  }, []);

  const checkAnswer = function (selection) {
    if (selection === color) {
      setMessage("Correct!");
    } else {
      setMessage("Wrong");
    }
    setShowMessage(true);
    setShowButton(true);
  };

  const playAgain = function () {
    makeColors();
    setShowMessage(false);
    setShowButton(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Color Codes</h1>
      {/* Randomly generate the HEX below. */}
      <h2>{color}</h2>
      <h2>What color is this?</h2>
      <div style={{ display: "flex" }}>
        {/* map through colors to create divs of box color  */}
        {colors.map((currColor, index) => {
          return (
            <div
              style={{
                background: currColor,
                height: "100px",
                width: "100px"
              }}
              onClick={() => {
                console.log("hello");
                return checkAnswer(currColor);
              }}
            ></div>
          );
        })}
      </div>
      {showMessage && <h1>{message}</h1>}
      {showButton && <button onClick={playAgain}>Play Again</button>}

      {/*
        <div data-testid="color-container">
          <div data-testid="incorrect-color"></div>
          <div data-testid="correct-color"></div>
        </div>
      */}
    </div>
  );
};
