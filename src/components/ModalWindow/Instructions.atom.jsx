import React from "react";
import styles from "./ModalWindow.module.css";
import { StartButton } from "../Button/ExampleStartPlayAgain.atom";
import PlayerOne from "../Players/FirstPlayer.atom";
import PlayerTwo from "../Players/SecondPlayer.atom";
import Generate from "./images/generate.png";

const Instructions = ({
  fetchNewGame,
  playerOne,
  playerTwo,
  createPlayers,
  error,
  closeInstructions,
}) => {
  return (
    <div className={styles.woodBox}>
      <div className={styles.layout}>
        <div className={styles.instructionsHeader}>
          <div className={styles.subHeader}>PIRATE GOMOKU</div>
        </div>
        <div
          className={styles.paper}
          aria-hidden
        />
        <div className={styles.instructionsMessage}>
          <h2 className={styles.title}>How to play</h2>
          <p>1. Players take turns placing their piece inside the squares. </p>
          <p>2. Black moves first!</p>
          <p>
            3. The objective is to get five in a row (horizontally, vertically,
            or diagonally).
          </p>
          <p>4. Once placed pieces cannot be moved or removed.</p>
          <p>
            5. The first player to make an unbroken line of five wins the game.
          </p>
          <h2 className={styles.errorMessage}>{error}</h2>
        </div>
        <div className={styles.nameBox}>
          <div className={styles.p1NameBox}>
            <PlayerOne playerOne={playerOne} />
          </div>
          <div className={styles.p2NameBox}>
            <PlayerTwo playerTwo={playerTwo} />
          </div>
          <div className={styles.div3}>
            <button
              onClick={createPlayers}
              className={styles.generateBtn}
              aria-label="Generate pirate names"
            >
              <img
                src={Generate}
                alt="Generate pirate names"
                draggable="false"
              />
            </button>
          </div>
        </div>
        <div className={styles.btn}>
          <StartButton fetchNewGame={fetchNewGame || closeInstructions} />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
