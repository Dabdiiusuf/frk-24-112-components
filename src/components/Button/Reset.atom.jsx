import React, { useState } from "react";
import restartDark from "./images/restart-dark.png";
import restartOrange from "./images/restart-orange.png";

const Reset = ({ resetGame }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={() => resetGame()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        margin: 0,
        height: 65,
        width: 65,
      }}
    >
      <img
        src={hover ? restartOrange : restartDark}
        alt="Reset Game"
        width={65}
        height={65}
      />
    </button>
  );
};

export default Reset;
