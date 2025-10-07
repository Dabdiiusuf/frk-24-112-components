import React from "react";
import Button from "./ExampleButton.molecule.jsx";
import timerGray from "./images/timerGray.png";
import timerRed from "./images/timerRed.png";

const TimerButton = ({ running, onStart, width = 65, height = 65 }) => {
  const imageSet = running
    ? { idle: timerGray, active: timerGray }
    : { idle: timerRed, active: timerRed };

  return (
    <Button
      imageSet={imageSet}
      width={width}
      height={height}
      disabled={running}
      onClick={running ? undefined : onStart}
    />
  );
};

export default TimerButton;
