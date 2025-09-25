import React from "react";
import styles from "./Backgound.module.css";

const Background = () => {
  return (
    <div className={styles.bgBox}>
      <div className={styles.header}>
        <h1 className={styles.gameName} data-text="Pirate Gomoku">
          Pirate Gomoku
        </h1>
      </div>
      <div className={styles.gameBoard}>game</div>
      <div className={styles.gameControlPanel}>panel</div>
    </div>
  );
};

export default Background;
