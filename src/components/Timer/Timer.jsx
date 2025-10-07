import React, { useState, useEffect } from "react";
import styles from "../Timer/Timer.module.css";

export default function Timer({ timeLeft }) {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timeDisplay}>{`${minutes}:${seconds}`}</div>
    </div>
  );
}
