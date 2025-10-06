import React from "react";
import playerOne from "./Images/X.png";
import playerTwo from "./Images/O.png";
import styles from "./Icons.module.css";

const Icons = ({ playerValue, size, ghost = false, firstIcon }) => {
  if (!playerValue) return null;

  const img = playerValue === 1 ? playerOne : playerTwo;

  return (
    <img
      src={img}
      alt={playerValue === 1 ? "Player one" : "Player two"}
      className={styles.shadow}
      style={{
        width: Math.floor(size * 0.8),
        height: Math.floor(size * 0.8),
        opacity: ghost ? 0.35 : 1,
        pointerEvents: "none",
        userSelect: "none",
        objectFit: "contain",

        inset: 0,
        margin: "auto",
      }}
      draggable={false}
    />
  );
};

export default Icons;
