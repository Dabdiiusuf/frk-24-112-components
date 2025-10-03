import React, { useState } from "react";
import styles from "./GameControlPanel.module.css";
import ResetBtn from "../Button/Reset.atom";
import TimerButton from "../Button/ExampleTimerButton.atom";
import Timer from "../Timer/Timer";
import X from "../Icons/Images/X.png";
import O from "../Icons/Images/O.png";
import PlayingDone from "../Button/images/playing-done.png";

const GameControlPanel = ({
  playerOne,
  playerTwo,
  firstPoints,
  secondPoints,
}) => {
  const [running, setRunning] = useState(false);
  const [startSignal, setStartSignal] = useState(0);

  const handleStart = () => {
    setStartSignal((s) => s + 1);
    setRunning(true);
  };

  return (
    <div className={styles.panelContainer}>
      <div></div>
      <div className={styles.stoneBoard}>
        <div className={styles.firstStone}>
          <div className={styles.Players}>{playerOne}</div>
          <p>Points: {firstPoints}</p>
          <img src={X} alt="X icon" className={styles.icons} />
          <img src={PlayingDone} alt="X icon" />
        </div>
        <div className={styles.secondStone}>
          <div className={styles.Players}>{playerTwo}</div>
          <p>Points: {secondPoints}</p>
          <img src={O} alt="X icon" className={styles.icons} />
          <img src={PlayingDone} alt="X icon" />
        </div>
      </div>
      <div className={styles.message}>
        <p className={styles.playerTurn}>
          ARRR, IT BE <span className={styles.Player}>{playerOne}</span> ONE'S
          TURN! MAKE YER MOVE, MATEY, AFORE THE TIDE CHANGES!
        </p>
        <div className={styles.displayTimer}>
          <Timer
            duration={600}
            running={running}
            startSignal={startSignal}
            onComplete={() => setRunning(false)}
            data-text={Timer}
          />
        </div>
      </div>
      <div className={styles.timerReset}>
        <TimerButton running={running} onStart={handleStart} />
        <ResetBtn />
      </div>
    </div>
  );
};

export default GameControlPanel;
