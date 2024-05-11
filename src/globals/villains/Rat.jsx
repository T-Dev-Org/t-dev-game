import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useAvatar } from "../../context/AvatarContext";
import { useFrame } from "@react-three/fiber";

const ratCurrentSpeed = 4;

export default function Rat(
  
  //props
  {position}
) {
  const ratRef = useRef();
  const ratBodyRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/villains/rat.glb"
  );

  const {avatar, setAvatar} = useAvatar();


/*
  useFrame((state, delta=0.01) =>{
    const currentPosition = ratBodyRef.current?.translation();

    //console.log("Position", position)

    console.log("currentPostion", currentPosition)

    let moveX = currentPosition?.x;
    let moveZ = currentPosition?.z;

    console.log("moveX", moveX)

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

    ratRef.current.position.x = (currentPosition?.x * 0.01) - (Math.sin(angle))*49;
    ratRef.current.rotation.y = angle;
    ratRef.current.position.z = (currentPosition?.z * 0.01) - (1 - Math.cos(angle))*49;

  }
  )
*/

  //const { actions } = useAnimations(animations, group);
  return (
    <RigidBody
    ref={ratBodyRef}
    type="dynamic" 
    colliders={false}
    position={position}
    >
      <group 
      ref={ratRef}
      dispose={null}
      >
        <group name="Rat" scale={3}>
          <skinnedMesh
            name="Plane_1"
            geometry={nodes.Plane_1.geometry}
            material={materials.Pelaje}
            skeleton={nodes.Plane_1.skeleton}
          />
          <skinnedMesh
            name="Plane_2"
            geometry={nodes.Plane_2.geometry}
            material={materials.Blandas}
            skeleton={nodes.Plane_2.skeleton}
          />
          <skinnedMesh
            name="Plane_3"
            geometry={nodes.Plane_3.geometry}
            material={materials.Ojos}
            skeleton={nodes.Plane_3.skeleton}
          />
          <skinnedMesh
            name="Plane_4"
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
  );
}

useGLTF.preload("/rat.glb");
