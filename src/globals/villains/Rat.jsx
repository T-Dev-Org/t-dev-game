import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import { useCharacterBasicAttack } from '../../utils/components/controller/CharacterAttackState'

const debug = true

function print_debug(text) {
  if (debug) {
    console.log(`[Rat.jsx]: ${text}`)
  }
}

export default function Rat(props) {
  const ratRef = useRef()
  const ratHostilColliderRef = useRef()
  const ratHitSensorRef = useRef()
  const { nodes, materials } = useGLTF('/assets/models/villains/rat.glb')

  const lifeState = useLifeState() // Vida del protagonista
  const [life, setLife] = useState(3) // Vida de la rata

  const characterBasickAttackState = useCharacterBasicAttack()
  const scale = 3

  useEffect(() => {
    if (life < 0)
      characterBasickAttackState.clear()
  }, [life])

  const handleIntersectionEnter = (event) => {
    if (event.colliderObject.name === 'character-capsule-collider') {
      characterBasickAttackState.assign(() => {
        setLife(prevLife => prevLife - 1)
      })
    }
  }

  const handleIntersectionExit = (event) => {
    if (event.colliderObject.name === 'character-capsule-collider') {
      characterBasickAttackState.clear()
    }
  }

  const updateCollider = () => {
    if (ratRef.current && ratHostilColliderRef.current && ratHitSensorRef.current) {
      const { position, rotation } = ratRef.current
      ratHostilColliderRef.current.setTranslation({
        x: position.x,
        y: position.y + 0.3,
        z: position.z
      })
      ratHostilColliderRef.current.setRotation({
        x: rotation.x,
        y: rotation.y,
        z: rotation.z
      })
      ratHitSensorRef.current.setTranslation({
        x: position.x,
        y: position.y + 0.3,
        z: position.z
      })
      ratHitSensorRef.current.setRotation({
        x: rotation.x,
        y: rotation.y,
        z: rotation.z
      })
    }
  }

  useFrame((state, delta) => {
    const amplitude = 3
    const calculatePositionSin = (time) => {
      return Math.sin(time) * amplitude
    }
    const time = state.clock.elapsedTime
    if (ratRef.current) {
      ratRef.current.position.x = calculatePositionSin(time)
      updateCollider()
    }
  })

  return (
    <>
      {life > 0 &&
        <RigidBody type='fixed' colliders={false}>
          <CuboidCollider
            ref={ratHostilColliderRef}
            args={[0.6 / 3 * scale, 0.2 / 3 * scale, 0.2 / 3 * scale]}
            onCollisionEnter={(other) => {
              if (other.colliderObject.name === 'character-capsule-collider') {
                lifeState.decrement()
              }
            }}
          />
          <CuboidCollider
            ref={ratHitSensorRef}
            args={[1.5 / 3 * scale, 0.4 / 3 * scale, 1.1 / 3 * scale]}
            onIntersectionEnter={(event) => handleIntersectionEnter(event)}
            onCollisionExit={(event) => handleIntersectionExit(event)}
            sensor
          />
          <group {...props} ref={ratRef} dispose={null}>
            <mesh
              name='Plane_1'
              geometry={nodes.Plane_1.geometry}
              material={materials.Pelaje}
              skeleton={nodes.Plane_1.skeleton}
            />
            <mesh
              name='Plane_2'
              geometry={nodes.Plane_2.geometry}
              material={materials.Blandas}
              skeleton={nodes.Plane_2.skeleton}
            />
            <mesh
              name='Plane_3'
              geometry={nodes.Plane_3.geometry}
              material={materials.Ojos}
              skeleton={nodes.Plane_3.skeleton}

            />
            <mesh
              name='Plane_4'
              geometry={nodes.Plane_4.geometry}
              material={materials.Ojos_2}
              skeleton={nodes.Plane_4.skeleton}
            />
          </group>
          <primitive object={nodes.Bone006} />
        </RigidBody>}
    </>
  )
}

useGLTF.preload('/assets/models/villains/rat.glb')
