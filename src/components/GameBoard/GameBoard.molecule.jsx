import React, { useState } from 'react';
import Board from './Board.atom';
import Square from './Square.atom';
import Reset from '../Button/Reset.atom';
import Button from '../Button/Button.molecule';
import Timer from '../Timer/Timer';
import styles from './GameBoard.module.css';

const GameBoard = () => {
	const [resetKey, setResetKey] = useState(0);
	// This will re-mount the Timer when reset is pressed

	const handleReset = () => {
		setResetKey(k => k + 1);
	};

	return (
		<div className={styles.gameBoard}>
			<h2>Game Board</h2>


			<Timer key={resetKey} />

			<Board rows={15} cols={15} size={30} />

			<div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
				<Reset onReset={handleReset} />
				<Button
					label="Click Me"
					onClick={() => alert('Button clicked!')}
				/>
			</div>
		</div>
	);
};

export default GameBoard;
