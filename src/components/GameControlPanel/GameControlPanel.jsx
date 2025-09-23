import React from 'react';
import styles from './GameControlPanel.module.css';

const GameControlPanel = ({ FirstPlayer = 'Daniel', SecondPlayer = 'Player 2' }) => {
	return (
		<div className={styles.panelContainer}>
			<div></div>
			<div className={styles.stoneBoard}>
				<div className={styles.firstStone}>
					<p>{FirstPlayer}</p>
					<p>Points: 3</p>
					<p>Icon</p>
					<p>"Playing"</p>
				</div>
				<div className={styles.secondStone}>
					<p>{SecondPlayer}</p>
					<p>Points: 1</p>
					<p>Icon</p>
					<p>Done</p>
				</div>
			</div>
			<div className={styles.message}>
				<p className={styles.playerTurn}>ARRR, IT  BE <span className={styles.Player}>{FirstPlayer}</span> ONE'S TURN! MAKE YER MOVE, MATEY, AFORE THE TIDE CHANGES!</p>
				<p className={styles.displayTimer}>10:00</p>
			</div>
			<div className={styles.timerReset}>
				<p>Timer Button</p>
				<p>Reset Button</p>
			</div>	
		</div>
	);
};

export default GameControlPanel;
