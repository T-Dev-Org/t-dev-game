import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useCheckpointState } from "./CharacterCheckpointState"
import { useAudio } from "../../../context/AudioContext";
import { guardarEnLocalStorage } from "../../../utils/localStorageUtils";

export default function Checkpoints() {

  const { handlePlayMusic } = useAudio();
  const { playSoundEffect } = useAudio();

  const checkpointState = useCheckpointState();

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {

    if (event.colliderObject.name == 'character-capsule-collider') {
      if (themeName != 'continue')
        handlePlayMusic(themeName);
      if (soundEffect != 'none')
        playSoundEffect(soundEffect);
    }
  }

  const updateCheckpoint = (somecheckpoint) => {
    checkpointState.setActualPosition(somecheckpoint);
    guardarEnLocalStorage("actualPosition", somecheckpoint);
  }

  return (<>
    <RigidBody
      type="fixed"
      colliders={false}
    >
      {/* Collider de los Checkpoints */}
      <CuboidCollider
        position={checkpointState.checkpoint1}
        args={[10, 2, 3]}
        onIntersectionEnter={(event) => {
          updateCheckpoint(checkpointState.checkpoint1);
        }}
        sensor
      />
      <CuboidCollider
        position={checkpointState.checkpoint2}
        args={[10, 2, 4]}
        onIntersectionEnter={(event) => {
          updateCheckpoint(checkpointState.checkpoint2);
        }}
        sensor
      />
      <CuboidCollider
        position={checkpointState.checkpoint3}
        args={[10, 2, 3.3]}
        onIntersectionEnter={(event) => {
          updateCheckpoint(checkpointState.checkpoint3);
        }}
        sensor
      />
      <CuboidCollider
        position={checkpointState.checkpoint4}
        args={[10, 2, 3.3]}
        onIntersectionEnter={(event) => {
          updateCheckpoint(checkpointState.checkpoint4);
        }}
        sensor
      />
    </RigidBody>
  </>)
}