import React, { useContext } from "react";
import { GomokuContext } from "../../providers/GomokuContext";
import styles from "./Players.module.css";
import O from "../Icons/Images/O.png";

const SecondPlayer = () => {
  const { playerTwo, setPlayerTwo } = useContext(GomokuContext);

  return (
    <div className={styles.container}>
      <div className={styles.inputLabel}>
        <label for="P2">Player 2</label>
        <img src={O} className={styles.playerIcons}></img>
      </div>
      <input
        type="text"
        value={playerTwo}
        onChange={(e) => setPlayerTwo(e.target.value)}
        placeholder="Player 2"
        name="P2"
      />
    </div>
  );
};

export default SecondPlayer;
