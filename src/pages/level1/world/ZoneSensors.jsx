//[ZoneSensors.jsx]

import React, { useRef } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useAudio } from '../../../context/AudioContext';
import { useLifeState } from '../../../utils/components/controller/CharacterLife';
import { useCollectablesState } from '../../../utils/components/controller/CharacterCollectables';
import { guardarEnLocalStorage, obtenerDeLocalStorage } from '../../../utils/localStorageUtils';
import { useCheckpointState } from '../checkpoints/CharacterCheckpointState';

export default function ZoneSensors({ ...props }) {
  const { handlePlayMusic } = useAudio();
  const { playSoundEffect} = useAudio();
  const rigidBodyRef = useRef();
  const lifeState = useLifeState();
  const collectableCountState = useCollectablesState();
  const checkpointState = useCheckpointState();

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

    console.log("[ZoneSensors.jsx] fll ");

    if (event.colliderObject.name == 'character-capsule-collider') {
      for (let i = 0; i < lifeState.value; i++) {
        // Aquí puedes poner el código que quieres que se ejecute en cada iteración
        lifeState.decrement();
        console.log(lifeState.value);
    }
      collectableCountState.reset();
    }
  }

  const handleCheckpoint = (event) => {
    if (event.colliderObject.name == 'character-capsule-collider')
      {
        const actualCheckpoint = checkpointState.setActualPosition(checkpointState.checkpoint1);
        guardarEnLocalStorage('checkpoint', actualCheckpoint);
        console.log('Este es la posicion: ', actualCheckpoint);
        
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
          onIntersectionEnter={() => { 
            loseLive(lifeState),
            handleThemeStarter('damage')
           }}
        />
        <CuboidCollider
          position={[0, 0, -2]}
          args={[1, 1, 1]}
          sensor
          onIntersectionEnter={(event) => { 
            gainLive(lifeState),
            handleThemeStarter('heal')
           }}
        />
        {/* Pre-dead events */}
        <CuboidCollider
          position={[0, -25, 0]}
          args={[500, 1, 500]}
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'continue', 'ctmSound'), 
            handleFall(event, lifeState)}
          }
          sensor
        />
        {/* Dead Sensor */}
        <CuboidCollider
          position={[0, -50, 0]}
          args={[200, 1, 200]}
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'continue', 'ctmSound')
            }
          }
        />
        {/* Collider de los Checkpoints */}
        <CuboidCollider
          position={checkpointState.checkpoint1}
          args={[10, 0.1, 3]}
          onIntersectionEnter = {(event) => {
            checkpointState.setActualPosition(checkpointState.checkpoint1),
            handleIntersectionEnter(event, 'continue', 'ctmSound')
          }
          }
          sensor
        />
        <CuboidCollider 
          position={checkpointState.checkpoint2}
          args={[10, 0.1, 4]}
          onIntersectionEnter={(event) => {
            checkpointState.setActualPosition(checkpointState.checkpoint2),
            handleIntersectionEnter(event, 'continue', 'ctmSound')
            }
          }
          sensor
        />
        <CuboidCollider 
          position={checkpointState.checkpoint3}
          args={[10, 0.1, 3.3]}
          onIntersectionEnter={(event) => {
            checkpointState.setActualPosition(checkpointState.checkpoint3),
            handleIntersectionEnter(event, 'continue', 'ctmSound')
            }
          }
          sensor
        />
        <CuboidCollider 
          position={checkpointState.checkpoint4}
          args={[10, 0.1, 3.3]}
          onIntersectionEnter={(event) => {
            checkpointState.setActualPosition(checkpointState.checkpoint4),
            handleIntersectionEnter(event, 'continue', 'ctmSound')
            }
          }
          sensor
        />
      </RigidBody>
    </group>
  );
}