/* eslint-disable camelcase */
import React from 'react'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { useAudio } from '../../../context/AudioContext'
import { useLifeState } from '../../../utils/components/controller/CharacterLife'

const debug = true
function print_debug (text) {
  if (debug) {
    console.log(`[SymbolicSensors.jsx]: ${text}`)
  }
}

export default function SymbolicSensors ({ ...props }) {
  const { handlePlayMusic } = useAudio()
  const { playSoundEffect } = useAudio()
  const lifeState = useLifeState()

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {
    print_debug('Colisioné con: ', event.colliderObject.name)

    if (event.colliderObject.name === 'character-capsule-collider') {
      print_debug(`Toca reproducir ${themeName} ${soundEffect}`)
      if (themeName !== 'continue') { handlePlayMusic(themeName) }
      if (soundEffect !== 'none') { playSoundEffect(soundEffect) }
    }
  }

  const handleFall = (event, lifeState) => {
    console.log('handleFall invocado!!!')

    if (event.colliderObject.name === 'character-capsule-collider') {
      for (let i = 0; i < lifeState.value; i++) {
        lifeState.decrement()
        console.log(lifeState.value)
      }
    }
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type='fixed'
        colliders={false}

      >
        {/* Dead Sensor */}
        <CuboidCollider
          position={[0, -10, 0]}
          args={[500, 1, 500]}
          onIntersectionEnter={(event) => {
            handleFall(event, lifeState)
          }}
          sensor
        />
      </RigidBody>
    </group>
  )
}