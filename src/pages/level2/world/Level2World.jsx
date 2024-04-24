// [Level2World.jsx]
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Level2World(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level2World.glb')

  return (
    <RigidBody type='fixed' colliders="trimesh">
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Platforms.geometry} material={materials.hept32} receiveShadow={true} />
        <mesh geometry={nodes.Terrain.geometry} material={materials.hept32} receiveShadow={true} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/world/Level2World.glb')
