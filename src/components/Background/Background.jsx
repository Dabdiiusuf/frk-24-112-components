import React from "react";
import styles from "./Backgound.module.css";
import GameBoard from "../GameBoard/GameBoard.molecule";
import GameControlPanel from "../GameControlPanel/GameControlPanel";

const Background = ({ children }) => {
  const [
    gameArea = null,
    modalWindow = null,
    gameDraw = null,
    gameWon = null,
    controlPanel = null,
  ] = React.Children.toArray(children);

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

      <div>{gameArea}</div>
      <div>{controlPanel}</div>
      <div>{modalWindow}</div>
      <div>{gameDraw}</div>
      <div>{gameWon}</div>
    </div>
  );
};

export default Background;
