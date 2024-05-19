// [ZoneSensors.jsx]
import React from 'react'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useAudio } from '../../../context/AudioContext'
import { useLifeState } from '../../../utils/components/controller/CharacterLife'
import { useCollectablesState } from '../../../utils/components/controller/CharacterCollectables'

const debug = false

function print_debug (text) {
  if (debug) {
    console.log(`[ZoneSensors.jsx]: ${text}`)
  }
}

export default function ZoneSensors ({ ...props }) {
  const { handlePlayMusic } = useAudio()
  const { playSoundEffect } = useAudio()
  const lifeState = useLifeState()
  const collectableCountState = useCollectablesState()

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {
    print_debug(`Colisioné con: ${event.colliderObject.name}`)

    if (event.colliderObject.name == 'character-capsule-collider') {
      if (themeName != 'continue') { handlePlayMusic(themeName) }
      if (soundEffect != 'none') { playSoundEffect(soundEffect) }
      print_debug(`Toca reproducir ${themeName} ${soundEffect}`)
    }
  }

  const handleFall = (event, lifeState) => {
    console.log('[ZoneSensors.jsx] fll ')

    if (event.colliderObject.name == 'character-capsule-collider') {
      for (let i = 0; i < lifeState.value; i++) {
        lifeState.decrement()
        console.log(lifeState.value)
      }
      collectableCountState.reset()
    }
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type='fixed'
        colliders={false}
      >
        {/* Pre-dead events */}
        <CuboidCollider
          position={[0, -25, 0]}
          args={[500, 1, 500]}
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'continue', 'ctmSound')
            handleFall(event, lifeState)
          }}
          sensor
        />
        {/* Dead Sensor */}
        <CuboidCollider
          position={[0, -50, 0]}
          args={[200, 1, 200]}
          onIntersectionEnter={(event) => {
            handleIntersectionEnter(event, 'continue', 'ctmSound')
          }}
        />
      </RigidBody>
    </group>
  )
}
