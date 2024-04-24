// [Level2WorldZone1.jsx]
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'


export default function Level2WorldZone1(props) {
  const { nodes, materials } = useGLTF('/assets/models/world//Level2WorldZone1.glb')
  return (
    <RigidBody type='fixed' colliders={false}>
      <group {...props} dispose={null}>
        {/* Zona 1 */}
        <CuboidCollider position={[-6, 2, -63]} args={[6.6, 2, 1]} rotation={[0, Math.PI / -1.15, 0]} />
        <CuboidCollider position={[-20.2, 2, -60]} args={[8.2, 2, 1]} rotation={[0, Math.PI / 0.98, 0]} />

        {/* Zona Checkpoint 3 */}
        <CuboidCollider position={[38.6, 2, -28]} args={[10, 2, 1]} rotation={[0, 0, 0]} />
        <CuboidCollider position={[36.6, 5, -32]} args={[12, 4, 1]} rotation={[Math.PI / -3.6, Math.PI / -0.988, 0]} />

        <CuboidCollider position={[17.6, 1.5, -31.8]} args={[12, 2, 1]} rotation={[0, Math.PI / -9.6, 0]} />
        <CuboidCollider position={[19, 3, -33.3]} args={[13, 3, 1]} rotation={[Math.PI / -3.6, Math.PI / -17, Math.PI / -16]} />

        <CuboidCollider position={[5.8, 2, -36]} args={[1, 2, 1]} rotation={[0, Math.PI / 2.8, 0]} />
        <mesh geometry={nodes.barrier_group_6.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_2.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_3.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_4.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_5.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_1.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_1001.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_2001.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_3001.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_4001.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_5001.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_6001.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.barrier_group_7.geometry} material={materials.hept32} castShadow={true} />
        <RigidBody type='fixed' colliders='hull'>
          <mesh geometry={nodes.Trunk_1003.geometry} material={materials.hept32} castShadow={true} />
        </RigidBody>
        <mesh geometry={nodes.shrub.geometry} material={materials.hept32} />
        <mesh geometry={nodes.Shurb_3012.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.Shurb_3013.geometry} material={materials.hept32} castShadow={true} />
        <mesh geometry={nodes.Shurb_3014.geometry} material={materials.hept32} castShadow={true} />
        <RigidBody type='fixed' colliders='hull'>castShadow={true} receiveShadow
          <mesh geometry={nodes.Trunk_3004.geometry} material={materials.hept32} castShadow={true} />
          <mesh geometry={nodes.Trunk_3008.geometry} material={materials.hept32} castShadow={true} />
          <mesh geometry={nodes.Trunk_3009.geometry} material={materials.hept32} castShadow={true} />
          <mesh geometry={nodes.Trunk_3010.geometry} material={materials.hept32} castShadow={true} />
        </RigidBody>
        <mesh geometry={nodes.tree.geometry} material={materials.hept32} castShadow={true} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/world//Level2WorldZone1.glb')
