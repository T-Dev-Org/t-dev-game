// [Cat.jsx]

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { CapsuleCollider, CuboidCollider, RigidBody } from '@react-three/rapier'

export function Cat(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/characters/cat/Cat.glb')
  const { actions, name } = useAnimations(animations, group)
  const catRef = useRef()
  const catPosition = [0, 2, 0] // (x, z, y)

  const onHandleCat = () => {
    catRef.current.applyImpulse({ x: 0, y: 2, z: 0 }, true);

  }

  useEffect(() => {
    // actions.BasicJumpAnimation.play();
  }, [])

  return (
    <RigidBody
      ref={catRef}
      name="Cat"
      type="dynamic"
      colliders={false}
      position={catPosition}
    >
      <group onClick={onHandleCat} ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature">
            <primitive object={nodes.spine} />
            <primitive object={nodes.spine003} />
            <primitive object={nodes.tailboneroot} />
            <primitive object={nodes.Ctrl_Master} />
            <primitive object={nodes.neutral_bone} />
            <skinnedMesh name="Brazos" geometry={nodes.Brazos.geometry} material={materials['Material.002']} skeleton={nodes.Brazos.skeleton} />
            <skinnedMesh name="Cabeza" geometry={nodes.Cabeza.geometry} material={materials['Material.002']} skeleton={nodes.Cabeza.skeleton}>
            </skinnedMesh>
            <skinnedMesh name="Colita" geometry={nodes.Colita.geometry} material={nodes.Colita.material} skeleton={nodes.Colita.skeleton} />
            <skinnedMesh name="Nariz" geometry={nodes.Nariz.geometry} material={materials['Material.002']} skeleton={nodes.Nariz.skeleton} />
            <skinnedMesh name="Ojos" geometry={nodes.Ojos.geometry} material={materials['Material.001']} skeleton={nodes.Ojos.skeleton} />
            <skinnedMesh name="Orejas" geometry={nodes.Orejas.geometry} material={materials['Material.002']} skeleton={nodes.Orejas.skeleton} />
            <skinnedMesh name="Patas" geometry={nodes.Patas.geometry} material={materials['Material.002']} skeleton={nodes.Patas.skeleton}>
            </skinnedMesh>
            <skinnedMesh name="Tronco" geometry={nodes.Tronco.geometry} material={materials['Material.002']} skeleton={nodes.Tronco.skeleton}>
            </skinnedMesh>
          </group>
        </group>
        <CapsuleCollider
          args={[0.5, 0.45]}  // (media-altura, radio)
          position={[catPosition[0], catPosition[1] - 1.05, catPosition[2] - 0.03]} // (x, z, y)
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              console.log(
                target.rigidBodyObject.name, // El nombre del Collider padre
                " esta colisionando con ",
                other.rigidBodyObject.name
              )
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            if (other.rigidBodyObject.name == "floor") {
              actions.BasicJumpAnimation.reset().play();
              actions.BasicJumpAnimation.fadeOut(2.2);
            }
            if (other.rigidBodyObject) {
              console.log(
                target.rigidBodyObject.name, // El nombre del Collider padre
                " salio de la colision con con ",
                other.rigidBodyObject.name
              )
            }
          }}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/cat/Cat.glb')
