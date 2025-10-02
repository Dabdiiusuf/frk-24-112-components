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
  const [resetSignal, setResetSignal] = useState(0);

  // ✅ Start with initial points (not 0)
  const [firstPlayerPoints, setFirstPlayerPoints] = useState(3);
  const [secondPlayerPoints, setSecondPlayerPoints] = useState(1);

  const handleStart = () => {
    setStartSignal((s) => s + 1);
    setRunning(true);
  };

  const handleReset = () => {
    setRunning(false);
    setResetSignal((r) => r + 1);

    // ✅ Reset points to 0 when reset button is clicked
    setFirstPlayerPoints(0);
    setSecondPlayerPoints(0);
  };

  return (
    <div className={styles.panelContainer}>
      <div></div>
      <div className={styles.stoneBoard}>
        <div className={styles.firstStone}>
          <p>{FirstPlayer}</p>
          <p>Points: {firstPlayerPoints}</p>
          <p>Icon</p>
          <p>"Playing"</p>
        </div>
        <div className={styles.secondStone}>
          <p>{SecondPlayer}</p>
          <p>Points: {secondPlayerPoints}</p>
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
            resetSignal={resetSignal}
            onComplete={() => setRunning(false)}
          />
        </p>
      </div>
      <div className={styles.timerReset}>
        <TimerButton running={running} onStart={handleStart} />
        <ResetBtn onReset={handleReset} />
      </div>
    </div>
  );
};

export default GameControlPanel;