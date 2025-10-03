import React from "react";
import styles from "./Button.module.css";

const InstrBtn = ({ openInstructions }) => {
  return (
    <div>
      <button className={styles.generateBtn} onClick={openInstructions}>
        Instructions
      </button>
    </div>
  );
};

export default InstrBtn;
