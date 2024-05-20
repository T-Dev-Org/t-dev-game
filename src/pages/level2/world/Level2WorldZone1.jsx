// [Level2WorldZone1.jsx]
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Level2WorldZone1 (props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level2/Level2WorldZone1.glb')
  return (
    <>
      <group {...props} dispose={null}>
        <RigidBody type='fixed' colliders={false}>
          <mesh geometry={nodes.door_barrier_1.geometry} material={materials.hept32} />
          <mesh geometry={nodes.barrier_group_6.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_2.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_3.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_4.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_5.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_1.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_1001.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_2001.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_3001.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_4001.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_5001.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_6001.geometry} material={materials.hept32} castShadow />
          <mesh geometry={nodes.barrier_group_7.geometry} material={materials.hept32} castShadow />

          <RigidBody type='fixed' colliders='hull'>
            <mesh geometry={nodes.Trunk_1003.geometry} material={materials.hept32} castShadow />
          </RigidBody>

          <RigidBody type='fixed' colliders='hull'>castShadow={true} receiveShadow
            <mesh geometry={nodes.Trunk_3004.geometry} material={materials.hept32} castShadow />
            <mesh geometry={nodes.Trunk_3008.geometry} material={materials.hept32} castShadow />
            <mesh geometry={nodes.Trunk_3009.geometry} material={materials.hept32} castShadow />
            <mesh geometry={nodes.Trunk_3010.geometry} material={materials.hept32} castShadow />
          </RigidBody>
          <mesh geometry={nodes.non_collider_shrubs.geometry} material={materials.hept32} />
          <mesh geometry={nodes.tree.geometry} material={materials.hept32} castShadow />
        </RigidBody>
        <RigidBody type='dynamic' colliders='cuboid'>
          <mesh geometry={nodes.dynamic_wooden_fence001.geometry} material={materials.Material} />
        </RigidBody>
        <RigidBody type='dynamic' colliders='cuboid'>
          <mesh geometry={nodes.dynamic_wooden_fence002.geometry} material={materials.Material} />
        </RigidBody>
        <RigidBody type='dynamic' colliders='cuboid'>
          <mesh geometry={nodes.dynamic_wooden_fence003.geometry} material={materials.Material} />
        </RigidBody>
        <RigidBody type='dynamic' colliders='cuboid' mass={0.01}>
          <mesh geometry={nodes.dynamic_wooden_fence004.geometry} material={materials.Material} />
        </RigidBody>
      </group>
    </>
  )
}

useGLTF.preload('/assets/models/world/Level2/Level2WorldZone1.glb')
