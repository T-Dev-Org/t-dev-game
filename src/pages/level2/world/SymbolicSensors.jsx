import React, { useRef } from 'react';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';
import { useLifeState } from '../../../utils/components/controller/CharacterLife';
import { TorusGeometry } from 'three/src/Three.js';

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
  const torusGeometry = new TorusGeometry();

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {
    print_debug('Colisioné con: ', event.colliderObject.name);

    if (event.colliderObject.name == 'character-capsule-collider') {
      print_debug(`Toca reproducir ${themeName} ${soundEffect}`);
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
        <RigidBody
          position={[0, 1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          type='fixed'
          colliders='trimesh'
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'mainTheme');
          }}
          sensor
        >
          <mesh
          >
            <torusGeometry
              args={[1, 0.6, 2, 32]}
            />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        </RigidBody>

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