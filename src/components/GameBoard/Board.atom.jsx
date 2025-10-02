import React, { useState } from "react";
import styles from "./Board.module.css";
import whiteTile from "./images/white-tile.png";
import darkTile from "./images/dark-tile.png";
import Icons from "../Icons/Icons";

const Board = ({
  tiles = [[]],
  rows,
  cols,
  size = 61,
  onCellClick,
  currentPlayer,
}) => {
  const [hovered, setHovered] = useState({ col: null, row: null });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${size}px)`,
    gridAutoRows: `${size}px`,
  };

  return (
    <div className={styles.container}>
      <div
        style={gridStyle}
        role="grid"
        aria-label="board"
      >
        {Array.from({ length: cols }).map((_, col) =>
          Array.from({ length: rows }).map((_, row) => {
            const value = tiles?.[col]?.[row] ?? 0;
            const isDark = (col + row) % 2 === 0;
            const isHovered = hovered.col === col && hovered.row === row;

            const displayValue =
              value === 0 && isHovered && currentPlayer ? currentPlayer : value;
            const isGhost = value === 0 && isHovered && !!currentPlayer;

            return (
              <div
                key={`${row}-${col}`}
                role="gridcell"
                aria-colindex={col + 1}
                aria-rowindex={row + 1}
                className={styles.cell}
                style={{
                  width: size,
                  height: size,
                  backgroundImage: `url(${isDark ? darkTile : whiteTile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  positiong: "relative",
                }}
                onMouseEnter={() => setHovered({ col, row })}
                onMouseLeave={() => setHovered({ col: null, row: null })}
                onClick={() => onCellClick?.(col, row, value)}
              >
                {/* piece will go here when atom created. */}
                <Icons
                  playerValue={displayValue}
                  size={size}
                  ghost={isGhost}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Board;
