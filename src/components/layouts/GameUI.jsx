// [GameUI.jsx]

import React from 'react';
import CornerTopRight from './GameUI/CornerTopRight';

const GameUI = () => {
  const clickedMute = () => {
    console.log("Boton de mute clickeado")
  }

  return (
    <>
      <CornerTopRight />
    </>
  );
};

export default GameUI;
