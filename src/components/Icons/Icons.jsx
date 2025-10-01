import React from "react";
import playerOne from "./Images/X.png";
import playerTwo from "./Images/O.png";
import styles from "./Icons.module.css";

const Icons = ({ value, size }) => {
  if (value === 0) return null;
  const img = value === 1 ? playerOne : playerTwo;

  return (
    <img
      src={img}
      alt={value === 1 ? "Player one" : "Player two"}
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
