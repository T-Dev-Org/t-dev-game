// [Level2WorldZone1.jsx]
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Level2WorldZone2(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level2/Level2WorldZone2.glb')
  return (
    <RigidBody type='fixed' colliders='trimesh'>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.check2_treesnshrubs.geometry} material={materials.hept32} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/world/Level2/Level2WorldZone2.glb')
