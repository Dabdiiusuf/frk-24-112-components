import ExampleButton from "./ExampleButton.molecule";
import Reset from "./Reset.atom";
import StartPlayAgain from "./ExampleStartPlayAgain.atom";
import React from "react";
import TimerButton from "./ExampleTimerButton.atom";

import Button from "./Button.molecule";

export default {
  title: "Components/Button",
  component: ExampleButton,
  subcomponents: { StartPlayAgain },
};

// --- Button stories ---
export const DefaultButton = {
  args: {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  },

  render: () => <Button onClick={() => alert("Done clicked!")} />,
};

// --- Reset stories ---
export const ResetButton = {
  render: () => <Reset onReset={() => alert("Game reset!")} />,
};

export const StartPlayAgainInteractive = {
  render: () => {
    const [started, setStarted] = React.useState(false);

    return (
      <StartPlayAgain
        started={started}
        onStart={() => setStarted(true)}
        onPlayAgain={() => setStarted(false)}
      />
    );
  },
};

export const TimerButtonInteractive = {
  render: () => {
    const [started, setStarted] = React.useState(false);
    return (
      <TimerButton
        started={started}
        onStart={() => setStarted(true)} // go from red -> gray
        onStop={() => setStarted(false)} // go from gray -> red
      />
    );
  },
};
