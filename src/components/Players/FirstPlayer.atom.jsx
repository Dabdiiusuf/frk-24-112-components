import React, { useContext } from "react";
import styles from "./Players.module.css";
import X from "../Icons/Images/X.png";

const FirstPlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputLabel}>
        <label for="P1">Player 1</label>
        <img src={X} className={styles.playerIcons}></img>
      </div>
      <input
        type="text"
        // value={playerOne}
        onChange={(e) => setPlayerOne(e.target.value)}
        placeholder="Player 1"
        name="P1"
      />
    </div>
  );
};

export default FirstPlayer;
