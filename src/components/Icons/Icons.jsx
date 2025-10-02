import React from "react";
import playerOne from "./Images/X.png";
import playerTwo from "./Images/O.png";
import styles from "./Icons.module.css";

const Icons = ({ playerValue, size }) => {
  if (playerValue === 0 || playerValue == null) return null;
  const img = playerValue === 1 ? playerOne : playerTwo;

  return (
    <img
      src={img}
      alt={playerValue === 1 ? "Player one" : "Player two"}
      className={styles.shadow}
      style={{
        width: size * 0.8,
        height: size * 0.8,
        objectFit: "contain",
        pointerEvents: "none",
      }}
    />
  );
};

export default Icons;
