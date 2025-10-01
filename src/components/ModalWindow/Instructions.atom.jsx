import React, { useCallback, useEffect, useRef } from "react";
import styles from "./ModalWindow.module.css";
import { StartButton } from "../Button/ExampleStartPlayAgain.atom";
import PlayerOne from "../Players/FirstPlayer.atom";
import PlayerTwo from "../Players/SecondPlayer.atom";

const Instructions = ({
  fetchNewGame,
  playerOne,
  playerTwo,
  createPlayers,
}) => {
  // const handlePress = useCallback(() => {
  //   createPlayers();
  // }, []);

  // useEffect(() => {
  //   if (localStorage.getItem("autoPressed") === 1) return;
  //   localStorage.setItem("autoPressed", "1");
  //   handlePress();
  // }, [handlePress]);

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
          <button onClick={createPlayers}>Generate Player</button>
          <div className={styles.player1}>
            <PlayerOne playerOne={playerOne} />
          </div>
          <div className={styles.player2}>
            <PlayerTwo playerTwo={playerTwo} />
          </div>
        </div>
        <div className={styles.btn}>
          <StartButton fetchNewGame={fetchNewGame} />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
