import React from "react";
import X from "./Images/X.png";
import O from "./Images/O.png";
import styles from "./icons.module.css";

const Icons = () => {
  return (
    <div>
      <img src={X} alt="X icon" className={styles.shadow} />
      <img src={O} alt="O icon" className={styles.shadow} />
    </div>
  );
};

export default Icons;
