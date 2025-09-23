import React from 'react';
import styles from './Button.module.css';
import playingDone from './images/playing-done.png';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <img src={playingDone} alt="Done" />
            <span className={styles.text}>Done</span>
        </button>
    );
};

export default Button;
