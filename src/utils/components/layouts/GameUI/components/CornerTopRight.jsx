// [CornerTopRight.jsx]
import React from 'react';
import './CornerTopRight.css';

const CornerTopRight = ({ life, playerName }) => {
  const displayLife = life ?? 'undefined';
  const displayPlayerName = playerName ?? 'undefined';

  return (
    <div className="container-top-right">
      <div className='object'>[]</div>
      <div className="player-name">Nombre: {displayPlayerName}</div>
      <div className="life-label">Vida:</div>
      <div className="life-bar" style={{ width: `${displayLife}%` }}></div>
    </div>
  );
};

export default CornerTopRight;



