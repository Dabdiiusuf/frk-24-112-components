import React from "react";

import styles from "./GameBoard.module.css";

const GameBoard = ({ children }) => {
  return <div className={styles.boardFrame}>{children}</div>;
};

export default GameBoard;
