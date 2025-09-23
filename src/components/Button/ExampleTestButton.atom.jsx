import Button from "./ExampleButton.molecule";
import React from "react";

const testButton = ({ width = "50px", height = "20px", onClick }) => {
  return (
    <Button width={width} height={height} onClick={onClick}>
      Click me
    </Button>
  );
};
export default testButton;
