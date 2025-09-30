import React from "react";
import styles from "./Backgound.module.css";
import GameBoard from "../GameBoard/GameBoard.molecule";
import GameControlPanel from "../GameControlPanel/GameControlPanel";

const Background = () => {
  return (
    <div className={styles.bgBox}>
      <div className={styles.header}>
        <h1
          className={styles.gameName}
          data-text="Pirate Gomoku"
        >
          Pirate Gomoku
        </h1>
      </div>
      <div className={styles.gameBoard}>{/* <GameBoard /> */}</div>
      <div className={styles.gameControlPanelDiv}>
        <GameControlPanel />
      </div>
    </div>
  );
};

export default Background;
