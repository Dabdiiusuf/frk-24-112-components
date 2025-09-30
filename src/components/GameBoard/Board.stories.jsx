import React from "react";
import Board from "./Board.atom";

const tiles16 = Array.from({ length: 16 }, () =>
  Array.from({ length: 16 }, () => 0)
);

export default {
  title: "Components/GameBoard/Board",
  component: Board,
};

export const Empty16x16 = () => (
  <Board
    rows={16}
    cols={16}
    tiles={tiles16}
    size={40}
  />
);
