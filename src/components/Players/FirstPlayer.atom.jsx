import React from "react";
import styles from "./Players.module.css";

const FirstPlayer = () => {
  return (
    <div className={styles.container}>
      <label for="P1">Player 1</label>
      <input type="text" placeholder="Player 1" name="P1" />
    </div>
  );
};

export default FirstPlayer;
