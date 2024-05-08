import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';

export default function ZoneSensors({ ...props }) {
  const { handlePlayMusic } = useAudio();
  const rigidBodyRef = useRef();

  const handleIntersectionEnter = (event, themeName) => {

    console.log('[ZoneSensors.jsx] colisioné con: ', event.colliderObject.name);
    if (event.colliderObject.name == 'character-capsule-collider') {
      handlePlayMusic(themeName);
    }
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
          onIntersectionEnter={(event) => handleIntersectionEnter(event, 'technoTheme1')}
        />
        <CuboidCollider
          position={[0, 0, -2]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={(event) => handleIntersectionEnter(event, 'mysteryTheme1')}
        />
      </RigidBody>
    </group>
  );
}