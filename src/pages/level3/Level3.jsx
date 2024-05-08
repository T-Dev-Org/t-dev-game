// [Level3.jsx]
import { Perf } from "r3f-perf";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Instructive from "../../utils/components/layouts/instructive/Instructive";
import useMovements from "../../utils/key-movements";
import Controls from "../../utils/controls/Controls"
import Ecctrl from "ecctrl";
import Avatar from "../../utils/avatar/Avatar";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import Level3World from "./world/Level3World";
import Texts from "./abstractions/Texts";
// import Collectables from "./collectables/Collectables";
import GameUI from "../../utils/components/layouts/GameUI/GameUI";
import NextLevelButton from "../../utils/components/layouts/GameUI/components/NextLevelButton";
// import ZoneSensors from "./world/ZoneSensors";

export default function Level3() {
  const map = useMovements();

  return (
    <KeyboardControls map={map}>
      <Canvas shadows={true}>
        <Suspense fallback={<Instructive />}>
          <Perf position="top-left" />
          <Lights />
          <Environments />
          <Physics debug={true}>
            <Level3World />
            <Ecctrl
              camInitDis={-2}
              camMaxDis={-2}
              maxVelLimit={5}
              jumpVel={4}
              position={[0, 2, 0]}
            >
              <Avatar />
            </Ecctrl>
          </Physics>
          <Texts />
        </Suspense>
        <Controls />
      </Canvas>
      {/* <GameUI /> */}
      <NextLevelButton to="/level4" />
    </KeyboardControls>
  );
}
