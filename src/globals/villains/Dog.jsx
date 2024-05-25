import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Sparkles } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import { useCharacterBasicAttack } from '../../utils/components/controller/CharacterAttackState'

export default function Dog(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/villains/Dog.glb'
  )
  const { actions } = useAnimations(animations, group)

  const lifeState = useLifeState() // Vida del protagonista
  const characterBasickAttackState = useCharacterBasicAttack()

  const [life, setLife] = useState(10) // Vida del perro
  const scale = 0.02
  const positionCorrection = [0, 1.4, 0.8]

  const [showSparkles, setShowSparkles] = useState(false)

  useEffect(() => {
    if (actions.Dance) {
      actions.Dance.play()
    }
  }, [actions])

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
              args={[34 * scale, 60 * scale, 34 * scale]}
              position={positionCorrection}
              onCollisionEnter={(other) => {
                if (
                  other.colliderObject.name === 'character-capsule-collider'
                ) {
                  lifeState.decrement()
                }
              }}
            />
            <CuboidCollider
              args={[70 * scale, 70 * scale, 70 * scale]}
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
            <group
              name='DogArmature'
              rotation={[Math.PI / 2, 0, 0]}
              scale={scale}
            >
              <primitive object={nodes.mixamorigHips} />
              <group name='Dog'>
                <skinnedMesh
                  name='Plane001'
                  geometry={nodes.Plane001.geometry}
                  material={materials.Pelaje}
                  skeleton={nodes.Plane001.skeleton}
                />
                <skinnedMesh
                  name='Plane001_1'
                  geometry={nodes.Plane001_1.geometry}
                  material={materials.Oreja}
                  skeleton={nodes.Plane001_1.skeleton}
                />
                <skinnedMesh
                  name='Plane001_2'
                  geometry={nodes.Plane001_2.geometry}
                  material={materials.Nariz}
                  skeleton={nodes.Plane001_2.skeleton}
                />
                <skinnedMesh
                  name='Plane001_3'
                  geometry={nodes.Plane001_3.geometry}
                  material={materials.Ojos}
                  skeleton={nodes.Plane001_3.skeleton}
                />
                <skinnedMesh
                  name='Plane001_4'
                  geometry={nodes.Plane001_4.geometry}
                  material={materials.Panza}
                  skeleton={nodes.Plane001_4.skeleton}
                />
                <skinnedMesh
                  name='Plane001_5'
                  geometry={nodes.Plane001_5.geometry}
                  material={materials.Cresta1}
                  skeleton={nodes.Plane001_5.skeleton}
                />
                <skinnedMesh
                  name='Plane001_6'
                  geometry={nodes.Plane001_6.geometry}
                  material={materials.Cresta2}
                  skeleton={nodes.Plane001_6.skeleton}
                />
                <skinnedMesh
                  name='Plane001_7'
                  geometry={nodes.Plane001_7.geometry}
                  material={materials.Cresta3}
                  skeleton={nodes.Plane001_7.skeleton}
                />
                <skinnedMesh
                  name='Plane001_8'
                  geometry={nodes.Plane001_8.geometry}
                  material={materials.Cresta4}
                  skeleton={nodes.Plane001_8.skeleton}
                />
                <skinnedMesh
                  name='Plane001_9'
                  geometry={nodes.Plane001_9.geometry}
                  material={materials.Cresta5}
                  skeleton={nodes.Plane001_9.skeleton}
                />
                <skinnedMesh
                  name='Plane001_10'
                  geometry={nodes.Plane001_10.geometry}
                  material={materials.Cresta6}
                  skeleton={nodes.Plane001_10.skeleton}
                />
                <skinnedMesh
                  name='Plane001_11'
                  geometry={nodes.Plane001_11.geometry}
                  material={materials.Cresta7}
                  skeleton={nodes.Plane001_11.skeleton}
                />
                <skinnedMesh
                  name='Plane001_12'
                  geometry={nodes.Plane001_12.geometry}
                  material={materials.Argolla}
                  skeleton={nodes.Plane001_12.skeleton}
                />
              </group>
            </group>
          </group>
        </RigidBody>
      )}
    </>
  )
}

useGLTF.preload('/assets/models/villains/Dog.glb')
