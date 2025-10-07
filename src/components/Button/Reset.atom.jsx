import React, { useState } from "react";
import restartDark from "./images/restart-dark.png";
import restartOrange from "./images/restart-orange.png";
import styles from "./ExampleButton.module.css";

const Reset = ({ handleResetAgain }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={handleResetAgain}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.resetButton}
    >
      <img
        src={hover ? restartOrange : restartDark}
        alt="Reset Game"
        className={styles.resetBtnIMG}
      />
    </button>
  );
};

export default Reset;
