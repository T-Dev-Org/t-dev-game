import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';
import { useLifeState } from '../../../utils/components/controller/CharacterLife';

export default function ZoneSensors({ ...props }) {
  const { handlePlayMusic } = useAudio();
  const { playSoundEffect } = useAudio();
  const lifeState = useLifeState();

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {

    console.log('[ZoneSensors.jsx] colisioné con: ', event.colliderObject.name);
    if (event.colliderObject.name == 'character-capsule-collider') {

      console.log(`[ZoneSensors.jsx] Toca reproducir ${themeName} ${soundEffect}`);

      if (themeName != 'continue')
        handlePlayMusic(themeName);

      if (soundEffect != 'none')
        playSoundEffect(soundEffect);

    }
  }

  const handleFall = (event, lifeState) => {

    console.log("handleFall invocado!!!");

    if (event.colliderObject.name == 'character-capsule-collider') {
      for (let i = 0; i < lifeState.value; i++) {
        lifeState.decrement();
        console.log(lifeState.value);
      }

    }
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="fixed"
        colliders={false}
      >
        {/* Pre-dead events */}
        <CuboidCollider
          position={[0, -4, 0]}
          args={[500, 1, 500]}
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'continue', 'ctmSound');
          }}
          sensor
        />
        {/* Dead Sensor */}
        <CuboidCollider
          position={[0, -10, 0]}
          args={[500, 1, 500]}
          onIntersectionEnter={(event) => {
            handleFall(event, lifeState);
          }}
          sensor
        />
        <CuboidCollider
          position={[0, -210, 0]}
          args={[200, 1, 200]}
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'continue', 'ctmSound');

          }}
        />
      </RigidBody>
    </group>
  );
}