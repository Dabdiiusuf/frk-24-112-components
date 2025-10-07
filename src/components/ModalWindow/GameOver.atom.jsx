import React from "react";
import styles from "./ModalWindow.module.css";
import { PlayAgainButton } from "../Button/ExampleStartPlayAgain.atom";
import X from "../Icons/Images/X.png";
import O from "../Icons/Images/O.png";
import ResetBtn from "../Button/Reset.atom";

const GameOver = ({
  GameOverText,
  handlePlayAgain,
  firstIcon,
  handleResetAgain,
}) => {
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
        <div className={styles.btnRow}>
          <PlayAgainButton handlePlayAgain={handlePlayAgain} width={350} />
          <ResetBtn handleResetAgain={handleResetAgain} className="quitReset" />
        </div>
      </div>
    </div>
  );
};

export default GameOver;
