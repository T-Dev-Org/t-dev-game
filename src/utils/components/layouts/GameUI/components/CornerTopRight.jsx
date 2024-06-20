import React, { useEffect, useState } from 'react';
import './CornerTopRight.css';
import { useLifeState } from '../../../controller/CharacterLife';
import { initializeCollectablesState, useCollectablesState } from '../../../controller/CharacterCollectables';
import { usePlayer } from '../../../../../context/PlayerContext';

const CornerTopRight = () => {
  const displayLife = useLifeState();
  const [vida, setVida] = useState('');
  const { playerData, setPlayerData } = usePlayer();
  const diamondsCount = useCollectablesState((state) => state.value);

  useEffect(() => {
    const initDiamonds = async () => {
      if (playerData.email) {
        await initializeCollectablesState(playerData.email);
        const collectablesState = useCollectablesState.getState();
        console.log('Diamantes iniciales:', collectablesState.value);
      }
    };
    initDiamonds();
  }, [playerData.email]);

  useEffect(() => {
    setVida('');
    for (let i = 0; i < displayLife.value; i++) {
      setVida((prevVida) => prevVida + '❤️');
    }
  }, [displayLife.value]);

  useEffect(() => {
    const unsubscribe = useCollectablesState.subscribe((state) => {
      const updatedPlayerData = { ...playerData, diamantes: state.value };
      setPlayerData(updatedPlayerData);
      console.log('Corner: ', state.value);
    });

    return () => {
      unsubscribe();
    };
  }, [playerData, setPlayerData]);

  return (
    <div className='container-top-right'>
      <div className='life-label'>{vida}</div>
      <div className='life-bar' style={{ width: `${displayLife.value}%` }} />
      <div className='diamond-count'>💎 x {playerData.diamantes}</div>
    </div>
  );
};

export default CornerTopRight;
