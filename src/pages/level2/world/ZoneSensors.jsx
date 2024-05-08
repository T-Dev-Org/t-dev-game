import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useMusic } from "../../../components/providers/AudioProvider";

export default function ZoneSensors({ ...props }) {
  const { handlePlayMusic } = useMusic();
  const rigidBodyRef = useRef();

  const handleThemeStarter = (themeName) => {
    console.log(`Supose to play ${themeName}`)
    handlePlayMusic(themeName);
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
          onIntersectionEnter={() => { handleThemeStarter('technoTheme1') }}
        />
        <CuboidCollider
          position={[2, 0, 0]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={() => { handleThemeStarter('mysteryTheme') }}
        />
      </RigidBody>
    </group>
  );
}