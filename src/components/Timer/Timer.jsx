import React, { useState, useEffect } from "react";
import styles from "../Timer/Timer.module.css";

export default function Timer({
  duration = 600,
  running = false,
  startSignal = 0,
  onComplete,
}) {
  const [timeLeft, setTimeleft] = useState(duration);

  useEffect(() => {
    setTimeleft(duration);
  }, [duration, startSignal]);

  useEffect(() => {
    if (!running || timeLeft <= 0) return;
    const id = setInterval(() => setTimeleft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [running, timeLeft]);

  useEffect(() => {
    if (running && timeLeft <= 0) onComplete?.();
  }, [running, timeLeft, onComplete]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timeDisplay}>
        {timeLeft <= 0 ? "Time is up!" : `${minutes}:${seconds}`}
      </div>
    </div>
  );
}
