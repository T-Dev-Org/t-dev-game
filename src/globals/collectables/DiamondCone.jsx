// [DiamondCone.jsx]
import React, { useEffect, useState } from 'react';
import { Sparkles, useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useAudio } from '../../context/AudioContext';
import { useCollectablesState } from '../../utils/components/controller/CharacterCollectables';

export default function DiamondCone(props) {

  const { nodes, materials } = useGLTF('/assets/models/collectables/DiamondCone.glb');
  const { playSoundEffect } = useAudio();
  const [isTaken, setIsTaken] = useState(false);
  const [isCollected, setIsCollected] = useState(false);
  const collectableCountState = useCollectablesState();

  const handleIntersectionEnter = (event) => {

    console.log('[DiamonCone.jsx] colisioné con: ', event.colliderObject.name);

    if (event.colliderObject.name == 'character-capsule-collider') {
      playSoundEffect('diamondCollect');
      setIsTaken(true);
      collectableCountState.increment();
      props.onUpdateState({ isTaken: true, isCollected: false });
    }
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
          onIntersectionEnter={(event) =>{ 
            handleIntersectionEnter(event)}}
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
