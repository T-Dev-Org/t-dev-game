import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';
import { useLifeState } from '../../../utils/components/controller/CharacterLife';

export default function ZoneSensors({ ...props }) {
  const { handlePlayMusic } = useAudio();
  const { playSoundEffect} = useAudio();
  const rigidBodyRef = useRef();
  const lifeState = useLifeState();

  const handleThemeStarter = (themeName) => {
    playSoundEffect(themeName);
  }

  const gainLive = (lifeState) => {
    lifeState.increment();
  }

  const loseLive = (lifeState) => {
    lifeState.decrement();
    console.log(lifeState.value);
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="fixed"
        colliders="cuboid"
        sensor
      >
        <CuboidCollider
          position={[0, 0, 3]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={() => { loseLive(lifeState),
            handleThemeStarter('damage')
           }}
        />
        <CuboidCollider
          position={[0, 0, -2]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={() => { gainLive(lifeState),
            handleThemeStarter('heal')
           }}
        />
      </RigidBody>
    </group>
  );
}