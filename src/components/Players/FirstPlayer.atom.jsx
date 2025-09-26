import React, { useContext } from "react";
import { GomokuContext } from "../../providers/GomokuContext";
import styles from "./Players.module.css";

const FirstPlayer = () => {
  const { playerOne, setPlayerOne } = useContext(GomokuContext);

  return (
    <div className={styles.container}>
      <label for="P1">Player 1</label>
      <input
        type="text"
        value={playerOne}
        onChange={(e) => setPlayerOne(e.target.value)}
        placeholder="Player 1"
        name="P1"
      />
    </div>
  );
};

export default FirstPlayer;
