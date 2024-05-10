import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Rat(props) {
  const ratRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/villains/rat.glb"
  );
  //const { actions } = useAnimations(animations, group);
  return (
    <RigidBody type="dynamic" colliders={false} position-y={-0.99}>
      <group {...props} ref={ratRef} name="Scene">
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
        {/* <CuboidCollider
          position={[0, 0.3, 0]}
          args={[0.8, 0.2, 0.2]}
        /> */}
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/rat.glb");
