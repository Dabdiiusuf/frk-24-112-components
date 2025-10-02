
import React, { useState } from 'react';
import playingDone from '../Button/images/playing-done.png';

const InstrBtn = () => {
  const [showInstr, setShowInstr] = useState(false);
  const [hoverInst, setHoverInst] = useState(false);
  const [hoverClose, setHoverClose] = useState(false);

  const instructions = `
    Gomoku Game Instructions:
1. The game is played on a 15x15 grid.
2. Players take turns placing X or O on an empty intersection.
3. The goal is to be the first to form an unbroken line of 5 stones horizontally, vertically, or diagonally.
4. The line must be exactly 5.
  `;

  return (
    <div>

      <div
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          width: '60px',
          height: '60px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        onClick={() => setShowInstr(!showInstr)}
        onMouseEnter={() => setHoverInst(true)}
        onMouseLeave={() => setHoverInst(false)}
      >
        <img
          src={playingDone}
          alt="Instructions Button"
          style={{ width: '100%', height: '100%' }}
        />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: hoverInst ? 'red' : 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            pointerEvents: 'none',
          }}
        >
          Inst
        </span>
      </div>

      {showInstr && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            right: '10px',
            width: '300px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '6px',
            padding: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 1000,
          }}
        >
          <h4>How to Play Gomoku</h4>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
            {instructions}
          </pre>


          <div
            style={{
              marginTop: '10px',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => setShowInstr(false)}
            onMouseEnter={() => setHoverClose(true)}
            onMouseLeave={() => setHoverClose(false)}
          >
            <img
              src={playingDone}
              alt="Close Instructions"
              style={{ width: '100%', height: '100%' }}
            />
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: hoverClose ? 'red' : 'white',
                fontWeight: 'bold',
                fontSize: '14px',
                pointerEvents: 'none',
              }}
            >
              Close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstrBtn;