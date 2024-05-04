import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Button(props) {
  const { nodes, materials } = useGLTF("/assets/models/objects/button.glb");
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} position={[0, -0.5, -158]} scale={0.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Cuerpo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Botón}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/objects/button.glb");
