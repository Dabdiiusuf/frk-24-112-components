import React from "react";
import styles from "./Players.module.css";

const SecondPlayer = () => {
  return (
    <div className={styles.container}>
      <label for="P2">Player 2</label>
      <input type="text" placeholder="Player 2" name="P2" />
    </div>
  );
};

export default SecondPlayer;
