import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';

export default function ZoneSensors({ ...props }) {
  const { handlePlayMusic } = useAudio();
  const { playSoundEffect } = useAudio();
  const rigidBodyRef = useRef();

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
          onIntersectionEnter={(event) => handleIntersectionEnter(event, 'technoTheme1')}
        />
        <CuboidCollider
          position={[0, 0, -3]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={(event) => handleIntersectionEnter(event, 'mysteryTheme')}
        />
        {/* Pre-dead events */}
        <CuboidCollider
          position={[0, -10, 0]}
          args={[200, 1, 200]}
          onIntersectionEnter={(event) => handleIntersectionEnter(event, 'endingTheme', 'ctmSound')}
          sensor
        />
        {/* Dead Sensor */}
        <CuboidCollider
          position={[0, -50, 0]}
          args={[200, 1, 200]}
          onIntersectionEnter={(event) => handleIntersectionEnter(event, 'endingTheme', 'ctmSound')}
        />
      </RigidBody>
    </group>
  );
}