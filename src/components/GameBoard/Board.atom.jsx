import React from "react";
import styles from "./Board.module.css";
import whiteTile from "./images/white-tile.png";
import darkTile from "./images/dark-tile.png";

const Board = ({ tiles = [[]], rows, cols, size = 61, onCellClick }) => {
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
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const value = tiles?.[row]?.[col] ?? 0;
            const isDark = (row + col) % 2 === 0;

            return (
              <div
                key={`${row}-${col}`}
                role="gridcell"
                aria-rowindex={row + 1}
                aria-colindex={col + 1}
                className={styles.cell}
                style={{
                  width: size,
                  height: size,
                  backgroundImage: `url(${isDark ? darkTile : whiteTile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => onCellClick?.(row, col, value)}
              >
                {/* piece will go here when atom created. */}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Board;
