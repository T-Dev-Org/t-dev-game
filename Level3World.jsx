/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\assets\models\world\Level3World.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Level3World.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Maze_Inside_Walls.geometry} material={nodes.Maze_Inside_Walls.material} />
      <mesh geometry={nodes.Floor.geometry} material={materials.Floor} />
      <mesh geometry={nodes.Miniroom.geometry} material={materials.Floor} />
      <mesh geometry={nodes.Miniroom_Floor.geometry} material={materials.Floor} />
      <mesh geometry={nodes.Maze__Outside_Walls.geometry} material={nodes.Maze__Outside_Walls.material} />
    </group>
  )
}

useGLTF.preload('/Level3World.glb')
