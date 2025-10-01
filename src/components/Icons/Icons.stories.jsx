import React from "react";
import Icons from "./Icons";

export default {
  title: "Components/Icons",
  component: Icons,
};

export const Empty = () => (
  <Icons
    value={0}
    size={48}
  />
);
export const PlayerOne = () => (
  <Icons
    value={1}
    size={48}
  />
);
export const PlayerTwo = () => (
  <Icons
    value={2}
    size={48}
  />
);
