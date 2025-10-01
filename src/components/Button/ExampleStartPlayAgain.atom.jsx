import React from "react";
import Button from "./ExampleButton.molecule.jsx";
import playAgainWhite from "./images/playAgainWhite.png";
import playAgainRed from "./images/playAgainRed.png";
import startWhite from "./images/startWhite.png";
import startRed from "./images/startRed.png";

export const PlayAgainButton = ({ width = 420, height = 90 }) => {
  const imageSet = {
    idle: playAgainWhite,
    hover: playAgainRed,
    active: playAgainRed,
  };

  return (
    <Button
      imageSet={imageSet}
      width={width}
      height={height}
    ></Button>
  );
};

// export default StartPlayAgain;

export const StartButton = ({ width = 420, height = 90, fetchNewGame }) => {
  const imageSet = {
    idle: startWhite,
    hover: startRed,
    active: startRed,
  };

  return (
    <Button
      onClick={fetchNewGame}
      imageSet={imageSet}
      width={width}
      height={height}
    ></Button>
  );
};

const defaultBtn = () => {};
export default defaultBtn;
