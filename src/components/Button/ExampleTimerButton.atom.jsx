import React from "react";
import Button from "./ExampleButton.molecule.jsx";
import timerGray from "./images/timerGray.png";
import timerRed from "./images/timerRed.png";

const TimerButton = ({
  started,
  onStart,
  onStop,
  width = 139,
  height = 139,
}) => {
  const imageSet = started
    ? { idle: timerRed, active: timerRed }
    : { idle: timerGray, active: timerGray };

  return (
    <Button
      imageSet={imageSet}
      width={width}
      height={height}
      onClick={started ? onStop : onStart}
    />
  );
};

export default TimerButton;
