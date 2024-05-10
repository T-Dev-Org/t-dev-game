import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function ObstaculoBarra(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/collectables/ObstaculoBarra.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.CuboAction.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cubo" geometry={nodes.Cubo.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/collectables/ObstaculoBarra.glb')
