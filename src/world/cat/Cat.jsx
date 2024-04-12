// [Cat.jsx]

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { CapsuleCollider, CuboidCollider, RigidBody } from '@react-three/rapier'

export function Cat({ onJump, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/characters/cat/Cat.glb')
  const { actions, name } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions)
    actions.BasicJumpAnimation.play();
  }, [])

  const catPosition = [0, 1, 0]

  return (
    <RigidBody name="Cat" type="dynamic" colliders={false} position={catPosition}
    >
      <group ref={group} {...props} dispose={null}>
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
              <CuboidCollider
                name="CatPatas"
                args={[0.25, 0.01, 0.25]}
                onCollisionEnter={({ manifold, target, other }) => {
                  console.log("Colision enter");
                  if (other.rigidBodyObject) {
                    console.log(
                      target.rigidBodyObject.name,
                      " esta colisionando con ",
                      other.rigidBodyObject.name // El nombre del Collider padre
                    )

                  }
                }}
                onCollisionExit={(e) => onCollisionExit(e)}
              />
            </skinnedMesh>
            <skinnedMesh name="Tronco" geometry={nodes.Tronco.geometry} material={materials['Material.002']} skeleton={nodes.Tronco.skeleton}>
              <CapsuleCollider
                name="CatBody"
                args={[0.3, 0.3]}
                position={catPosition}
              />
            </skinnedMesh>
          </group>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/characters/cat/Cat.glb')
