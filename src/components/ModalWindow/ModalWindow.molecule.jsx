import { useState, useContext } from "react";
import styles from "./ModalWindow.module.css";
import StartPlayAgainBtn from "../Button/ExampleStartPlayAgain.atom";
import PlayerOneInput from "../Players/FirstPlayer.atom";
import PlayerTwoInput from "../Players/SecondPlayer.atom";
import { GomokuContext } from "../../providers/GomokuContext";

const ModalWindow = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className={styles.woodBox}>
      {/* <div className={styles.layout}>
        <RandomWinText />
        <div className={styles.header}> Import Game Name / Game Over here!</div>
        <div className={styles.message}>{randomText}/rules here!</div>
        <div className={styles.inputBox}>
          <div className={styles.player1}>
            <PlayerOneInput />
          </div>
          <div className={styles.player2}>
            <PlayerTwoInput />
          </div>
        </div>
        <div className={styles.btn}>
          <StartPlayAgainBtn
            started={started}
            onStart={() => setStarted(true)}
            onPlayAgain={() => setStarted(false)}
          />
        </div>
      </div> */}
    </div>
  );
};

export default ModalWindow;
