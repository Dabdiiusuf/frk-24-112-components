import React from "react";
import styles from "./ModalWindow.module.css";
import { PlayAgainButton } from "../Button/ExampleStartPlayAgain.atom";
import X from "../Icons/Images/X.png";

const GameOver = ({ GameOverText, playAgain }) => {
  return (
    <div className={styles.woodBox}>
      <div className={styles.layout}>
        <div className={styles.gameOverHeader}> Game Over</div>
        <div className={styles.paper} aria-hidden />
        <div className={styles.randomMessage}>
          <div>{GameOverText}</div>
          <img src={X} alt="X icon" className={styles.icon} />
        </div>
        <div className={styles.btn}>
          <PlayAgainButton playAgain={playAgain} />
        </div>
      </div>
    </div>
  );
};

export default GameOver;
