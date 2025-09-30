import React from "react";
import Board from "./Board.atom";

const tiles16 = Array.from({ length: 16 }, () =>
  Array.from({ length: 16 }, () => 0)
);

const makeTiles = (rows, cols, fill = 0) =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => fill));

const place = (tiles, moves = []) => {
  const copy = tiles.map((r) => r.slice());
  moves.forEach(([r, c, v]) => (copy[r][c] = v));
  return copy;
};

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

export const WithPieces16x16 = {
  args: {
    rows: 16,
    cols: 16,
    size: 40,
    tiles: place(makeTiles(16, 16, 0), [
      [7, 7, 1],
      [7, 8, 2],
      [8, 8, 1],
      [9, 9, 2],
      [10, 10, 1],
    ]),
  },
};
