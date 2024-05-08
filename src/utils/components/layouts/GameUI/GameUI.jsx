// [GameUI.jsx]

import React from 'react';
import CornerTopRight from './components/CornerTopRight';

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
