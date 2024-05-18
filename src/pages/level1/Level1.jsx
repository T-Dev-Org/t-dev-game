// [Level1.jsx]
import { Perf } from "r3f-perf";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Instructive from "../../utils/components/layouts/instructive/Instructive";
import useMovements from "../../utils/key-movements";
import Controls from "../../utils/controls/Controls"
import Ecctrl from "ecctrl";
import Avatar from "../../utils/avatar/Avatar";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import Level1World from "./world/Level1World";
import Level1WorldStairs from "./world/Level1WorldStairs";
import Texts from "./abstractions/Texts";
import GameUI from "../../utils/components/layouts/GameUI/GameUI";
import Rat from "../../globals/villains/Rat";
import ZoneSensors from "./world/ZoneSensors";
import { useLifeState } from "../../utils/components/controller/CharacterLife";
import nullMovements from "../../utils/null-movements";
import GameOverScene from "../../utils/components/layouts/GameOverScene/GameOverScene";
import Collectables from "./collectables/Collectables";
import Interactables from "./interactables/Interactables";
import PortalNextWorld from "../../globals/interactables/PortalNextWorld";
import Button from "../../globals/interactables/Button";
import { useCharacterPositionState } from "../../utils/components/controller/CharacterPositionState";
import Checkpoints from "../../globals/interactables/CheckpointsGenerator";
import checkpointsData from "./checkpoints/CheckpointsData.json"
import { obtenerDeLocalStorage } from "../../utils/localStorageUtils";

export default function Level1() {

  const map = useMovements();

  const lifeState = useLifeState();
  const positionState = useCharacterPositionState();

  const [actualPosition, setActualPosition] = useState(positionState.initialPosition)

  useEffect(() => {
    if (obtenerDeLocalStorage("actualPosition"))
      setActualPosition(obtenerDeLocalStorage("actualPosition"))
  }, obtenerDeLocalStorage("actualPosition"))

  const [displayLife, setDisplayLife] = useState(true);

  useEffect(() => {
    if (lifeState.value <= 0)
      setDisplayLife(false);
    else
      setDisplayLife(true);
  }, [lifeState.value]);


  return (<>
    <KeyboardControls map={map} >
      <Canvas
        shadows={true}
      >
        <Perf position="top-left" />
        <Suspense fallback={<Instructive />}>
          <Lights />
          <Environments />
          <Physics debug={true}>
            <Level1World />
            <PortalNextWorld
              position={[0, 0, -224]}
              nextLevel='/level2'
            />
            <Collectables />
            <Interactables />
            <ZoneSensors />
            <Checkpoints checkpointsData={checkpointsData} />
            <>
              {displayLife &&
                <Ecctrl
                  camInitDis={-2}
                  camMaxDis={-2}
                  maxVelLimit={5}
                  jumpVel={4}
                  position={actualPosition}
                >
                  <Avatar />
                </Ecctrl>
              }
            </>
            <Button position={[0, -0.5, -158]} />
            <Rat position={[0, 0, -135]} />
          </Physics>
          <Texts />
        </Suspense>
        <Controls />
      </Canvas>
      {!displayLife &&
        <GameOverScene
          reloadLevel='/level1'
        />}
      <GameUI />
    </KeyboardControls>
  </>
  )
}
