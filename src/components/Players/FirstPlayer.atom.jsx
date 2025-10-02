import React from "react";
import styles from "./Players.module.css";
import X from "../Icons/Images/X.png";

const FirstPlayer = ({ playerOne }) => {
  return (
    <div className={styles.container}>
      <div className={styles.Label}>
        <img src={X} className={styles.playerIcons}></img>
        <h5>{playerOne}</h5>
      </div>
    </div>
  );
};

export default FirstPlayer;
