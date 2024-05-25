/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/world/Level2/Level2WorldZone3.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Level2WorldZone3 (props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level2/Level2WorldZone3.glb')
  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.check3_treesnshrubs.geometry} material={materials.hept32} />
      </RigidBody>

    </group>
  )
}

useGLTF.preload('/assets/models/world/Level2/Level2WorldZone3.glb')
