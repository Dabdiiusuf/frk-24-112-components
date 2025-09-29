import React from "react";
import styles from "./ModalWindow.module.css";
import { StartButton } from "../Button/ExampleStartPlayAgain.atom";
import PlayerOneInput from "../Players/FirstPlayer.atom";
import PlayerTwoInput from "../Players/SecondPlayer.atom";

const Instructions = () => {
  return (
    <div className={styles.woodBox}>
      <div className={styles.layout}>
        <div className={styles.instructionsHeader}>
          <div className={styles.subHeader}>PIRATE GOMOKU</div>
          <h2>How to play</h2>
        </div>
        <div className={styles.instructionsMessage}>
          <p>1. Players take turns placing their piece inside the squares. </p>
          <p>2. Black moves first.</p>
          <p>
            3. The objective is to get five in a row (horizontally, vertically,
            or diagonally).
          </p>
          <p>4. Once placed pieces cannot be moved or removed.</p>
          <p>
            5. The first player to make an unbroken line of five wins the game.
          </p>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.player1}>
            <PlayerOneInput />
          </div>
          <div className={styles.player2}>
            <PlayerTwoInput />
          </div>
        </div>
        <div className={styles.btn}>
          <StartButton />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
