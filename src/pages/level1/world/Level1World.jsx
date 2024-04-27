import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Level1World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/Level1World.glb");
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_3002.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2001.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_3004.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_3005.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2002.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_3006.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2003.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1001.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere016.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere016_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1002.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2004.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere019.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere019_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2005.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1003.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere022.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere022_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2006.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1004.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere025.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere025_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2007.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1005.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere028.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere028_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1006.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2008.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere031.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere031_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1007.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2009.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere034.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere034_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shrub_1008.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shurb_2010.geometry}
          material={materials.Hojas}
          position={[0, -0.364, 0]}
        />
        <group position={[0, -0.364, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere037.geometry}
            material={materials.Hojas}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere037_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Suelo.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Tierra.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Piedra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_1.geometry}
          material={materials.Tronco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials["Tronco.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials["Tronco.001"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/Level1World.glb");
