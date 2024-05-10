import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';
import { useLifeState } from '../../../utils/components/controller/CharacterLife';

const debug = true
function print_debug(text) {
  if (debug) {
    console.log(`[SymbolicSensors.jsx]: ${text}`);
  }
}

export default function SymbolicSensors({ ...props }) {
  const { handlePlayMusic } = useAudio();
  const { playSoundEffect } = useAudio();
  const lifeState = useLifeState();

  const gainLive = (lifeState) => {
    lifeState.increment();
  }

  const loseLive = (lifeState) => {
    lifeState.decrement();
    print_debug(`LifeState.value is: ${lifeState.value}`);
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="fixed"
        colliders={false}
      >
        <CuboidCollider
          position={[0, 0, 3]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={() => {
            loseLive(lifeState),
              playSoundEffect('damage')
          }}
        />
        <CuboidCollider
          position={[0, 0, -2]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={(event) => {
            gainLive(lifeState),
              playSoundEffect('heal')
          }}
        />
      </RigidBody>
    </group>
  );
}