import React, { useContext } from "react";
import styles from "./Players.module.css";
import O from "../Icons/Images/O.png";

const SecondPlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputLabel}>
        <label for="P2">Player 2</label>
        <img
          src={O}
          className={styles.playerIcons}
        ></img>
      </div>
      <input
        type="text"
        // value={playerTwo}
        // onChange={(e) => setPlayerTwo(e.target.value)}
        placeholder="Player 2"
        name="P2"
      />
    </div>
  );
};

export default SecondPlayer;
