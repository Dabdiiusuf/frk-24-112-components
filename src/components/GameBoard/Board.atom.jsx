import React from 'react';
import styles from './Board.module.css';
import whiteTile from './images/white-tile.png';
import darkTile from './images/dark-tile.png';

const Board = ({rows = 15, cols = 15, size = 50, onCellClick }) => {
	const total = rows * cols;
	
	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${cols}, ${size}px)`,
		gridAutoRows: `${size}px`,
	};

	const cells = Array.from({ length: total });

	return (
		<div style={gridStyle} role="grid" aria-label="board">
			{cells.map((_, i) => {
			const row = Math.floor(i / cols);
			const col = i % cols;

			const isDark = (row + col) % 2 === 0;
			
				return (
					<div
						key={i}
						role="gridcell"
						aria-rowindex={row + 1}
						aria-colindex={col + 1}
						className={styles.cell}
						style={{ 
							width: size, 
							height: size, 
							backgroundImage:`url(${isDark ? darkTile : whiteTile})`,
							backgroundSize: "cover",
							backgroundPosition: "center",							
							}}
						onClick={() => 
							onCellClick ? onCellClick(row, col) : alert('You clicked a cell')}
					/>
				);
			})}
		</div>
	);
};

export default Board;
