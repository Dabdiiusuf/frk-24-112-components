import React, { useState } from "react";
import styles from "./GameControlPanel.module.css";
import ResetBtn from "../Button/Reset.atom";
import TimerButton from "../Button/ExampleTimerButton.atom";
import Timer from "../Timer/Timer";

const GameControlPanel = ({
  FirstPlayer = "Daniel",
  SecondPlayer = "Player 2",
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
          <p>{FirstPlayer}</p>
          <p>Points: 3</p>
          <p>Icon</p>
          <p>"Playing"</p>
        </div>
        <div className={styles.secondStone}>
          <p>{SecondPlayer}</p>
          <p>Points: 1</p>
          <p>Icon</p>
          <p>Done</p>
        </div>
      </div>
      <div className={styles.message}>
        <p className={styles.playerTurn}>
          ARRR, IT BE <span className={styles.Player}>{FirstPlayer}</span> ONE'S
          TURN! MAKE YER MOVE, MATEY, AFORE THE TIDE CHANGES!
        </p>
        <p className={styles.displayTimer}>
          <Timer
            duration={600}
            running={running}
            startSignal={startSignal}
            onComplete={() => setRunning(false)}
          />
        </p>
      </div>
      <div className={styles.timerReset}>
        <TimerButton running={running} onStart={handleStart} />
        <ResetBtn />
      </div>
    </div>
  );
};

export default GameControlPanel;
