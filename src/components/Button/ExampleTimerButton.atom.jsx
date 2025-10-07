import React from "react";
import Button from "./ExampleButton.molecule.jsx";
import timerGray from "./images/timerGray.png";
import timerRed from "./images/timerRed.png";

const TimerButton = ({ running, width = 65, height = 65, startTimer }) => {
  const imageSet = running
    ? { idle: timerGray, active: timerGray }
    : { idle: timerRed, active: timerRed };

  return (
    <button
      imageSet={imageSet}
      width={width}
      height={height}
      // disabled={running}
      onClick={() => {
        console.log("clicked");
        startTimer();
      }}
    >
      press
    </button>
  );
};

export default TimerButton;
