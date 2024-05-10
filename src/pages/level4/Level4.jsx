// [Level4.jsx]
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
import Texts from "./abstractions/Texts";
// import Collectables from "./collectables/Collectables";
import GameUI from "../../utils/components/layouts/GameUI/GameUI";
import NextLevelButton from "../../utils/components/layouts/GameUI/components/NextLevelButton";
// import ZoneSensors from "./world/ZoneSensors";
import { Model } from "./world/Level4World";
import { Cubos } from "../../globals/collectables/Cubos";
import { ObstaculoBarra } from "../../globals/collectables/ObstaculoBarra";

export default function Level4() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >
            <Canvas shadows={true}>
                <Perf position="top-left" />
                <Suspense fallback={<Instructive />}>
                    <Environments />
                    <Lights />
                    <Physics>
                        <Model />
                        <Cubos position={[0,40,60]}/>
                        <Cubos position={[0,40,65]}/>
                        <ObstaculoBarra position={[0,35,90]}/>
                        <ObstaculoBarra position={[0,35,130]}/>
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            maxVelLimit={6}
                            jumpVel={10}
                            position={[0, 9, 2]}
                        >
                            <Avatar />
                        </Ecctrl>
                    </Physics>
                    <Texts />
                </Suspense>
                <Controls />
            </Canvas>
            <GameUI />
            <NextLevelButton to="/profile" />
        </KeyboardControls>
    )
}
