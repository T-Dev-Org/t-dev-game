// [GameOverScene.jsx]
import React from 'react';
import { useState, useEffect } from 'react';
import { useLifeState } from '../../controller/CharacterLife';
import PlayAgainButton from '../GameUI/components/PlayAgainButton';
import GoHomeButton from '../GameUI/components/GoHomeButton';
import CustomText2D from '../../../text/CustomText2D';


const GameOverScene = () => {

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
      {!displayLife &&
        <>
          <CustomText2D
          fontSize={0.1}
          position={[0, 0.1, 0.5]}
          rotation={[0, Math.PI, 0]}
          text="Game Over"
          color="#000000"
          />
          <CustomText2D
          fontSize={0.05}
          position={[0, -0.1, 0.5]}
          rotation={[0, Math.PI, 0]}
          text="¿Jugar de nuevo?"
          color="#000000"
          />   
          <PlayAgainButton to="/level1"/>
          <GoHomeButton to="/"/>
        </>
      }
    </>
  );
};

export default GameOverScene;