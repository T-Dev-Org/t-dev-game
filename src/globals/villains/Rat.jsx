import { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useLifeState } from '../../utils/components/controller/CharacterLife';

export default function Rat(props) {
  const ratRef = useRef();
  const ratHostilColliderRef = useRef();
  const ratHitSensorRef = useRef();
  const { nodes, materials } = useGLTF('/assets/models/villains/rat.glb');
  const [amplitude, setAmplitude] = useState(3.5);
  const [doDamage, setDoDamage] = useState(true)


  const lifeState = useLifeState()
  const scale = 3;

  const calculatePositionSin = (time) => {
    return Math.sin(time) * amplitude;
  };

  useEffect(() => {
    setTimeout(() => {
      setDoDamage(true);
    }, 1000);
  }, [setDoDamage]);

  const updateCollider = () => {
    if (ratRef.current && ratHostilColliderRef.current && ratHitSensorRef.current) {
      const { position, rotation } = ratRef.current;
      ratHostilColliderRef.current.setTranslation({
        x: position.x,
        y: position.y + 0.3,
        z: position.z
      });
      ratHostilColliderRef.current.setRotation({
        x: rotation.x,
        y: rotation.y,
        z: rotation.z
      });
      ratHitSensorRef.current.setTranslation({
        x: position.x,
        y: position.y + 0.3,
        z: position.z
      });
      ratHitSensorRef.current.setRotation({
        x: rotation.x,
        y: rotation.y,
        z: rotation.z
      });
    }
  };

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (ratRef.current) {
      ratRef.current.position.x = calculatePositionSin(time);
      updateCollider();
    }
  });

  return (
    <RigidBody type="fixed" colliders={false}>
      <CuboidCollider
        ref={ratHostilColliderRef}
        args={[0.6 / 3 * scale, 0.2 / 3 * scale, 0.2 / 3 * scale]}
        onCollisionEnter={(other) => {
          if (other.colliderObject.name === 'character-capsule-collider') {
            lifeState.decrement()
            setDoDamage(false)
          }
        }}
      />
      <CuboidCollider
        ref={ratHitSensorRef}
        args={[1 / 3 * scale, 0.4 / 3 * scale, 0.6 / 3 * scale]}
        sensor
      />
      <group {...props} ref={ratRef} scale={scale} dispose={null}>
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
    </RigidBody>
  );
}

useGLTF.preload('/assets/models/villains/rat.glb');
