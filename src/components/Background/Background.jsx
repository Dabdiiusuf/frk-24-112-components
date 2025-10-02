import React from "react";
import styles from "./Backgound.module.css";
import GameBoard from "../GameBoard/GameBoard.molecule";
import GameControlPanel from "../GameControlPanel/GameControlPanel";

const Background = ({
  gameArea = <GameBoard />,
  controlPanel = <GameControlPanel playerOne="Daniel" playerTwo="Jack" />,
  modalWindow = null,
  gameDraw = null,
}) => {
  return (
    <div className={styles.bgBox}>
      <div className={styles.header}>
        <h1 className={styles.gameName} data-text="Pirate Gomoku">
          Pirate Gomoku
        </h1>
      </div>

      {/* Main Game Board */}
      <div>{gameArea}</div>

      {/* Control Panel */}
      <div>{controlPanel}</div>

      {/* Optional modal or draw */}
      <div>{modalWindow}</div>
      <div>{gameDraw}</div>
    </div>
  );
};

export default Background;
