import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useAudio } from '../../context/AudioContext'
import { limpiarLocalStorage } from '../../utils/localStorageUtils'

const debug = true

function print_debug(text) {
  if (debug) {
    console.log(`[PortalNextWorld.jsx]: ${text}`)
  }
}

export default function PortalNextWorld({ ...props }) {
  const navigate = useNavigate()
  const { playSoundEffect } = useAudio()
  const nextLevel = props.nextLevel ? props.nextLevel : '/level1'
  const position = props.position ? props.position : [0, 0, 0]

  const handleIntersectionEnter = (event) => {
    print_debug(
      `[PortalNextWorld.jsx] colisioné con: ${event.colliderObject.name}`
    )

    if (event.colliderObject.name === 'character-capsule-collider') {
      playSoundEffect('shutterSound')
      limpiarLocalStorage()
      navigate(nextLevel)
    }
  }

  return (
    <group {...props} name='scene' position={position}>
      <group name='portal' position={[0, 0.6, 0]} dispose={null}>
        <RigidBody type='fixed' colliders={false}>
          <CuboidCollider
            args={[0.6, 0.9, 0.2]}
            onIntersectionEnter={(event) => handleIntersectionEnter(event)}
            sensor
          />
          <Sparkles
            position={[0, -0.1, 0]}
            count={6}
            speed={1.5}
            color='purple'
            size={6}
            scale={1.5}
          />
          <Sparkles
            position={[0, 0.1, 0]}
            count={10}
            speed={0.2}
            color='yellow'
            size={6}
            scale={2}
          />
          <Sparkles
            position={[0, 0, 0]}
            count={6}
            speed={1.5}
            color='blue'
            size={6}
            scale={1.5}
          />
        </RigidBody>
      </group>
    </group>
  )
}
