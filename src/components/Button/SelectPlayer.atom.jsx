import React from 'react';
import doneImg from './images/selectPlayerDone.png';
import playingImg from './images/selectPlayerPlaying.png';

const SelectPlayer = ({ doneActive = false }) => {
  return (
    <div>
      {doneActive ? (
        <img src={doneImg} alt="done" />
      ) : (
        <img src={playingImg} alt="playing" />
      )}
    </div>
  );
};

export default SelectPlayer;
