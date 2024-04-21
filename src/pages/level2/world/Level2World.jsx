/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/world/Level2World.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Level2World(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level2World.glb')
  return (
    <RigidBody type='fixed' colliders="trimesh">
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Terrain.geometry} material={materials.Material} />
        <mesh geometry={nodes.Platforms.geometry} material={materials.Rock} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/world/Level2World.glb')
