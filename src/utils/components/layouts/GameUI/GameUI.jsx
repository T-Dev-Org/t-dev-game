// [GameUI.jsx]
import React from 'react';
import { useState, useEffect } from 'react';
import { useLifeState } from '../../controller/CharacterLife';
import CornerTopRight from './components/CornerTopRight';

const GameUI = () => {

  const lifeState = useLifeState();

  // Estado local para controlar si se muestra la vida o no
  const [displayLife, setDisplayLife] = useState(true);        

  useEffect(() => {
      console.log(`[Level1.jsx] Change on LifeValue, is ${lifeState.value} now`);

      // Cambios en mostrar/ocultar elementos dependiendo del valor
      if (lifeState.value <= 0) {
        setDisplayLife(false);
        console.log("Mori");
      } else {
        setDisplayLife(true);
      }
    }, [lifeState.value]); // Depende unicamente de cambios en lifeState.value  
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
