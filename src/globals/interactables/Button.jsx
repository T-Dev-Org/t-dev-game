import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Button(props) {
  const { nodes, materials } = useGLTF("/assets/models/objects/button.glb");
  return (
    <RigidBody type="fixed" colliders={false}>
      <group {...props} name="Scene">
        <group name="Button" scale={0.7}>
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
        <CuboidCollider
          position={[0, 0.6, 0]}
          args={[0.25, 1, 0.25]}
        />
        <CuboidCollider
          position={[0, 0.6, 0]}
          args={[1, 1, 1]}
          sensor
        />
      </group>

    </RigidBody>
  );
}

useGLTF.preload("/assets/models/objects/button.glb");
