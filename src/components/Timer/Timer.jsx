import React, { useState, useEffect } from "react";
import styles from "../Timer/Timer.module.css";
import timerDark from "./images/timer-dark.png";
import timerOrange from "./images/timer-orange.png";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(600);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleRestart = () => {
    setTimeLeft(600);
    setIsRunning(true);
  };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const timeIsUp = timeLeft <= 0;

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timeDisplay}>
        {timeIsUp ? "Time is up!" : `${minutes}:${seconds}`}
      </div>
      <button
        onClick={handleRestart}
        disabled={!timeIsUp}
        className={styles.timerButton}
      >
        <img
          src={timeIsUp ? timerOrange : timerDark}
          alt="Timer Button"
          className={styles.timerIcon}
        />
      </button>
    </div>
  );
}
