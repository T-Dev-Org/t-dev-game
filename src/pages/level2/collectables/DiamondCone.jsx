// [DiamondCone.jsx]
import React, { useEffect, useRef } from 'react';
import { Sparkles, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useMusic } from "../../../components/providers/AudioProvider";
import { create } from "zustand";

export const useDiamondState = (id) => create((set) => ({
  isTaked: false,
  take: () => set({ isTaked: true }),
  drop: () => set({ isTaked: false }),
}), id);

export default function DiamondCone(props) {
  const { name } = props;
  const diamondState = useDiamondState(name);
  const { nodes, materials } = useGLTF('/assets/models/collectables/DiamondCone.glb');
  const { playSoundEffect } = useMusic();
  const rigidBodyRef = useRef();

  const handleIntersectionEnter = () => {
    playSoundEffect('diamondCollect');
    diamondState.take();
  };

  const handleIntersectionExit = () => {
    diamondState.drop();
  };

  useEffect(() => {
    console.log(`Diamond ${name} has been taken: ${diamondState.isTaked}`);
  }, [diamondState.isTaked]);

  return (
    <group {...props} dispose={null}>
      <RigidBody
        ref={rigidBodyRef}
        type="fixed"
        colliders="cuboid"
        sensor
        onIntersectionEnter={handleIntersectionEnter}
        onIntersectionExit={handleIntersectionExit}
      >
        <mesh geometry={nodes.Cone.geometry} material={materials.hept32palette} />
      </RigidBody>
      <Sparkles
        position={[0, 0.5, 0]}
        count={10}
        speed={1}
        color={'yellow'}
        size={6}
        scale={0.8}
      />
    </group>
  );
}

useGLTF.preload('/assets/models/collectables/DiamondCone.glb');
