import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { CuboidCollider, RigidBody, TrimeshCollider } from '@react-three/rapier'
import { useAvatar } from '../../context/AvatarContext'
import { useFrame } from '@react-three/fiber'
import { CatmullRom } from 'three'

const ratCurrentSpeed = 4

export default function Rat (

  props,
  { position }
) {
  const ratRef = useRef()
  const ratBodyRef = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/assets/models/villains/rat.glb'
  )

  const { avatar, setAvatar } = useAvatar()

  const amplitude = 3.5

  useFrame((state, delta) => {
    const position = ratRef.current.position
    position.x = Math.cos(state.clock.getElapsedTime()) * amplitude + props.position[0]
  })

  /*
    useFrame((state, delta=5) =>{
      const currentPosition = ratBodyRef.current?.translation();

      console.log("Position", position)

      console.log("currentPostion", currentPosition)

      let moveX = currentPosition?.x;
      let moveZ = currentPosition?.z;

      console.log("moveX", moveX)
      console.log("moveZ", moveZ)

      console.log("1 ", avatar.body?.translation().x)
      console.log("2", currentPosition?.x)
      if (avatar.body?.translation().x > currentPosition?.x){
        moveX += delta * ratCurrentSpeed;
        console.log("moveX ahora es: ", moveX)
      } else if (avatar.body?.translation().x < currentPosition?.x){
        moveX -= delta * ratCurrentSpeed;
        console.log("moveX ahora es: ", moveX)
      };

      if (avatar.body?.translation().z > currentPosition?.z + 24.5){
        moveZ += delta * ratCurrentSpeed;
      } else if (avatar.body?.translation().z < currentPosition?.z + 25.5){
        moveZ -= delta * ratCurrentSpeed;
      };

      ratBodyRef.current?.setTranslation({
        x: moveX,
        y: ratBodyRef.current?.translation().y,
        z: moveZ
      }, true)

      const angle = Math.atan2(avatar.body?.translation().x -
      currentPosition?.x, avatar.body?.translation().z - 24.5 -
      currentPosition?.z)-Math.PI;

      console.log("Angle: ",angle)

      ratRef.current.position.x = (currentPosition?.x * delta) - (Math.sin(angle))*49;
      ratRef.current.rotation.y = angle;
      ratRef.current.position.z = (currentPosition?.z * delta) - (1 - Math.cos(angle))*49;

    }
    )
  */

  // const { actions } = useAnimations(animations, group);
  return (
    <group ref={ratRef}>
      <RigidBody
        type='fixed'
        ref={ratBodyRef}
        colliders={false}
        // position={position}
      >
        <group
          {...props}
          dispose={null}
        >
          <group name='Rat' scale={3}>
            <skinnedMesh
              name='Plane_1'
              geometry={nodes.Plane_1.geometry}
              material={materials.Pelaje}
              skeleton={nodes.Plane_1.skeleton}
              colliders='trimesh'
            />
            <skinnedMesh
              name='Plane_2'
              geometry={nodes.Plane_2.geometry}
              material={materials.Blandas}
              skeleton={nodes.Plane_2.skeleton}
            />
            <skinnedMesh
              name='Plane_3'
              geometry={nodes.Plane_3.geometry}
              material={materials.Ojos}
              skeleton={nodes.Plane_3.skeleton}
            />
            <skinnedMesh
              name='Plane_4'
              geometry={nodes.Plane_4.geometry}
              material={materials.Ojos_2}
              skeleton={nodes.Plane_4.skeleton}
            />
            <primitive object={nodes.Bone006} />
          </group>
          <CuboidCollider
            position={[0, 0.3, 0]}
            args={[0.8, 0.2, 0.2]}
          />

        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/rat.glb')
