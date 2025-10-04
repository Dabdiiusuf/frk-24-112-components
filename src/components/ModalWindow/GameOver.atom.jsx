import React from "react";
import styles from "./ModalWindow.module.css";
import { PlayAgainButton } from "../Button/ExampleStartPlayAgain.atom";
import X from "../Icons/Images/X.png";
import O from "../Icons/Images/O.png";

const GameOver = ({ GameOverText, playAgain, firstIcon }) => {
  return (
    <div className={styles.woodBox}>
      <div className={styles.layout}>
        <div className={styles.gameOverHeader}> Game Over</div>
        <div className={styles.paper} aria-hidden />
        <div className={styles.randomMessage}>
          <div>{GameOverText}</div>
          {firstIcon ? (
            <img src={X} alt="X icon" className={styles.icon} />
          ) : (
            <img src={O} alt="O icon" className={styles.icon} />
          )}
        </div>
        <div className={styles.btn}>
          <PlayAgainButton playAgain={playAgain} />
        </div>
      </div>
    </div>
  );
};

export default GameOver;
