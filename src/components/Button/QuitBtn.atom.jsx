import React, { useState } from "react";
import quitDefault from "./images/timerGray.png";
import quitHover from "./images/timerRed.png"; //change "default" and "hover" to proper color names once design is finished

export const QuitBtn = ({ onQuit }) => {
  const [hover, setHover] = useState(false);
  return (
        <button
          onClick={onQuit}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            margin: 0,
            height: 110,
            width: 110,
          }}
        >
          <img
            src={hover ? quitHover : quitDefault}
            alt="Quit Game"
            width={110}
            height={110}
          />
        </button>
  );
};

export default QuitBtn;