// [CornerTopRight.jsx]
import React from 'react';
import './CornerTopRight.css';
import { useLifeState } from '../../../controller/CharacterLife';

const CornerTopRight = ({ life, playerName }) => {
  const displayLife = useLifeState();
  const displayPlayerName = playerName ?? 'undefined';

  return (
    <div className="container-top-right">
      <div className='object'>[]</div>
      <div className="player-name">Nombre: {displayPlayerName}</div>
      <div className="life-label">Vida: {displayLife.value}</div>
      <div className="life-bar" style={{ width: `${displayLife}%` }}></div>
    </div>
  );
};

export default CornerTopRight;



