import React from "react";
import styles from "./Players.module.css";
import O from "../Icons/Images/O.png";

const SecondPlayer = ({ playerTwo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.Label}>
        <img src={O} className={styles.playerIcons}></img>
        <h5>{playerTwo}</h5>
      </div>
    </div>
  );
};

export default SecondPlayer;
