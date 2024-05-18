import React, { useEffect } from 'react';
import { CuboidCollider } from '@react-three/rapier';
import { useAudio } from '../../context/AudioContext';
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState';
import { guardarEnLocalStorage } from '../../utils/localStorageUtils';

const debug = true;

function print_debug(text) {
  if (debug) {
    console.log(`[Checkpoint.jsx]: ${text}`);
  }
}

export default function Checkpoint(props) {
  const { handlePlayMusic } = useAudio();
  const { playSoundEffect } = useAudio();
  const positionState = useCharacterPositionState();

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {
    if (event.colliderObject.name == 'character-capsule-collider') {
      if (themeName != 'continue')
        handlePlayMusic(themeName);
      if (soundEffect != 'none')
        playSoundEffect(soundEffect);
    }
  }

  const handleCheckpoint = (event) => {
    if (event.colliderObject.name == 'character-capsule-collider') {
      positionState.setActualPosition(props.position);
      guardarEnLocalStorage('actualPosition', props.position);
      print_debug(`${props.name} reached`);
    }
  }

  return (
    <CuboidCollider {...props}
      onIntersectionEnter={(event) => {
        handleIntersectionEnter(event, 'continue', 'ctmSound');
        handleCheckpoint(event);
      }}
      sensor
    />
  );
}