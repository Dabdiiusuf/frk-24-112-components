import React from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = () => {
  return (
    <div className={styles.woodBox}>
      <div className={styles.layout}>
        <div className={styles.header}> Import Game Name / Game Over here!</div>
        <div className={styles.message}>Import message/rules here!</div>
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
        <div className={styles.btn}>import button here!</div>
      </div>
    </div>
  );
};

export default ModalWindow;
