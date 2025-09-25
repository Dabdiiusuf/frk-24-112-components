import { useState } from "react";
import styles from "./ModalWindow.module.css";
import { RandomTextArray } from "./RandomWinText.atom";
import StartPlayAgainBtn from "../Button/ExampleStartPlayAgain.atom";

const ModalWindow = () => {
  const textIndex = Math.floor(Math.random() * RandomTextArray.length);
  const [randomText, setRandomText] = useState(RandomTextArray[textIndex]);
  const [started, setStarted] = useState(false);

  return (
    <div className={styles.woodBox}>
      <div className={styles.layout}>
        <div className={styles.header}> Import Game Name / Game Over here!</div>
        <div className={styles.message}>{randomText}/rules here!</div>
        <div className={styles.inputBox}>
          <div className={styles.player1}>
            import player1 <br />
            input here!
          </div>

          <div className={styles.player2}>
            import player2 <br />
            input here!
          </div>
        </div>
        <div className={styles.btn}>
          <StartPlayAgainBtn
            started={started}
            onStart={() => setStarted(true)}
            onPlayAgain={() => setStarted(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
