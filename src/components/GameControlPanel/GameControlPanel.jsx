import React, { useState } from "react";
import styles from "./GameControlPanel.module.css";
import ResetBtn from "../Button/Reset.atom";
import TimerButton from "../Button/ExampleTimerButton.atom";
import Timer from "../Timer/Timer";
import X from "../Icons/Images/X.png";
import O from "../Icons/Images/O.png";
import doneImg from "../Button/images/selectPlayerDone.png";
import playingImg from "../Button/images/selectPlayerPlaying.png";
import Instructions from "../ModalWindow/Instructions.atom";

const GameControlPanel = ({
  playerOne,
  playerTwo,
  firstPoints,
  secondPoints,
  currentPlayer,
  handleResetAgain,
  startTimer,
  running,
  timeLeft,
}) => {
  return (
    <div className={styles.panelContainer}>
      <div></div>
      <div className={styles.stoneBoard}>
        <div className={styles.firstStone}>
          <div className={styles.Players}>{playerOne}</div>
          <p>Points: {firstPoints}</p>
          <img src={X} alt="X icon" className={styles.icons} />
          {currentPlayer === 1 ? (
            <img src={playingImg} alt="playing" />
          ) : (
            <img src={doneImg} alt="done" />
          )}
        </div>
        <div className={styles.secondStone}>
          <div className={styles.Players}>{playerTwo}</div>
          <p>Points: {secondPoints}</p>
          <img src={O} alt="X icon" className={styles.icons} />
          {currentPlayer === 2 ? (
            <img src={playingImg} alt="playing" />
          ) : (
            <img src={doneImg} alt="done" />
          )}
        </div>
      </div>
      <div className={styles.message}>
        <div className={styles.playerTurn}>
          ARRR, IT BE{" "}
          {currentPlayer === 1 ? (
            <span className={styles.Player}>{playerOne}</span>
          ) : (
            <span className={styles.Player}>{playerTwo}</span>
          )}{" "}
          ONE'S TURN! MAKE YER MOVE, MATEY, AFORE THE TIDE CHANGES!
        </div>
        <div className={styles.displayTimer}>
          <Timer timeLeft={timeLeft} />
        </div>
      </div>
      <div className={styles.timerReset}>
        <TimerButton startTimer={startTimer} running={running} />
        <ResetBtn handleResetAgain={handleResetAgain} />
      </div>
    </div>
  );
};

export default GameControlPanel;
