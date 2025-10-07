import React, { useState } from "react";
import Button from "./ExampleButton.molecule.jsx";
import timerGray from "./images/timerGray.png";
import timerRed from "./images/timerRed.png";
import styles from "./ExampleButton.module.css";

const TimerButton = ({ startTimer }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={() => {
        console.log("clicked");
        startTimer();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.resetButton}
    >
      <img
        src={hover ? timerRed : timerGray}
        alt="Reset Game"
        className={styles.resetBtnIMG}
      />
    </button>
  );
};

export default TimerButton;
