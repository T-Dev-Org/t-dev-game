// [DiamondCone.jsx]
import React, { useEffect, useState } from 'react';
import { Sparkles, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useMusic } from "../../../components/providers/AudioProvider";

export default function DiamondCone(props) {

  const { nodes, materials } = useGLTF('/assets/models/collectables/DiamondCone.glb');
  const { playSoundEffect } = useMusic();
  const [isTaken, setIsTaken] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const handleIntersectionEnter = () => {
    playSoundEffect('diamondCollect');
    setIsTaken(true);
    props.onUpdateState({ isTaken: true, isCollected: false });
  };

  useEffect(() => {
    // Aquí puedes agregar lógica para manejar el estado isCollected si lo necesitas
  }, [isTaken, isCollected]);

  return (
    !isTaken && !isCollected && (
      <group {...props} dispose={null}>
        <RigidBody
          type="fixed"
          colliders="cuboid"
          sensor
          onIntersectionEnter={handleIntersectionEnter}
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
    )
  );
}

useGLTF.preload('/assets/models/collectables/DiamondCone.glb');
