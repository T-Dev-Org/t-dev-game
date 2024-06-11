// [Coc.jsx]
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Sparkles } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import { useCharacterBasicAttack } from '../../utils/components/controller/CharacterAttackState'

export default function Coc({ onDeath, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/villains/Coc.glb'
  )
  const { actions } = useAnimations(animations, group)

  const lifeState = useLifeState() // Vida del protagonista
  const characterBasickAttackState = useCharacterBasicAttack()

  const [life, setLife] = useState(10) // Vida del perro
  const scale = 2
  const colliderScale = scale * 0.01
  const positionCorrection = [0.45, 0, 0]

  const [showSparkles, setShowSparkles] = useState(false)

  useEffect(() => {
    if (actions) {
      actions.Dancing.play()
    }
  }, [actions])

  useEffect(() => {
    if (life <= 0) {
      onDeath()
    }
  }, [life, onDeath])

  const handleIntersectionEnter = (event) => {
    if (event.colliderObject?.name === 'character-capsule-collider') {
      characterBasickAttackState.assign(() => {
        setLife((prevLife) => prevLife - 1)
      })
      setShowSparkles(true)
    }
  }

  const handleIntersectionExit = (event) => {
    if (event.colliderObject?.name === 'character-capsule-collider') {
      characterBasickAttackState.clear()
      setShowSparkles(false)
    }
  }

  return (
    <>
      {life > 0 && (
        <RigidBody type='fixed' colliders={false}>
          <group ref={group} {...props} dispose={null}>
            <CuboidCollider
              args={[
                16 * colliderScale,
                60 * colliderScale,
                20 * colliderScale
              ]}
              position={positionCorrection}
              onCollisionEnter={(event) => {
                console.log(`${event.colliderObject.name} collided`)
                if (
                  event.colliderObject.name === 'character-capsule-collider'
                ) {
                  lifeState.decrement()
                }
              }}
            />
            <CuboidCollider
              args={[
                50 * colliderScale,
                60 * colliderScale,
                50 * colliderScale
              ]}
              position={positionCorrection}
              onIntersectionEnter={(event) => handleIntersectionEnter(event)}
              onCollisionExit={(event) => handleIntersectionExit(event)}
              sensor
            />
            {showSparkles && (
              <Sparkles
                size={3}
                scale={[3, 3, 3]}
                position={positionCorrection}
                color='red'
                count={10}
                speed={2}
              />
            )}
            <group name='CocArmature' rotation={[Math.PI / 2, 0, 0]}>
              <primitive object={nodes.mixamorigHips} />
              <group name='Coc'>
                <skinnedMesh
                  name='Plane001'
                  geometry={nodes.Plane001.geometry}
                  material={materials['Cuerpo.001']}
                  skeleton={nodes.Plane001.skeleton}
                />
                <skinnedMesh
                  name='Plane001_1'
                  geometry={nodes.Plane001_1.geometry}
                  material={materials['Dientes.001']}
                  skeleton={nodes.Plane001_1.skeleton}
                />
                <skinnedMesh
                  name='Plane001_2'
                  geometry={nodes.Plane001_2.geometry}
                  material={materials['Negro.001']}
                  skeleton={nodes.Plane001_2.skeleton}
                />
                <skinnedMesh
                  name='Plane001_3'
                  geometry={nodes.Plane001_3.geometry}
                  material={materials['Ojo.001']}
                  skeleton={nodes.Plane001_3.skeleton}
                />
                <skinnedMesh
                  name='Plane001_4'
                  geometry={nodes.Plane001_4.geometry}
                  material={materials['Cresta.001']}
                  skeleton={nodes.Plane001_4.skeleton}
                />
              </group>
            </group>
          </group>
        </RigidBody>
      )}
    </>
  )
}

useGLTF.preload('/assets/models/villains/Coc.glb')
