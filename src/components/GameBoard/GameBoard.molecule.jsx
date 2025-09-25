import React from "react";
import Board from "./Board.atom";

import styles from "./GameBoard.module.css";

const GameBoard = () => {
  return (
    <div className={styles.boardFrame}>
      <Board />
    </div>
  );
};

export default GameBoard;
