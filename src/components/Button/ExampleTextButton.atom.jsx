import Button from "./ExampleButton.molecule";
import styles from "./ExampleButton.module.css";
import React from "react";

const textButton = ({ width = "50px", height = "20px", onClick }) => {
  return (
    <Button
      className={styles.text}
      width={width}
      height={height}
      onClick={onClick}
    >
      Click me
    </Button>
  );
};
export default textButton;
