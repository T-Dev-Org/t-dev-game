// [Level2.jsx]
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
import Level2World from "./world/Level2World";
import Level2WorldZone1 from "./world/Level2WorldZone1";
import Texts from "./abstractions/Texts";
import Collectables from "./collectables/Collectables";
import GameUI from "../../utils/components/layouts/GameUI/GameUI";
import NextLevelButton from "../../utils/components/layouts/GameUI/components/NextLevelButton";
import ZoneSensors from "./world/ZoneSensors";

export default function Level2() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >
            <Canvas
                shadows={true}
            >
                <Suspense fallback={<Instructive />}>
                    <Perf position="top-left" />
                    <Lights />
                    <Environments />
                    <Physics debug={true}>
                        <Level2World />
                        <Level2WorldZone1 />
                        <ZoneSensors />
                        <Collectables />
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            maxVelLimit={4}
                            jumpVel={3}
                            position={[0, 2, 0]}
                            slopeMaxAngle={Math.PI / 5.5}
                        >
                            <Avatar />
                        </Ecctrl>
                    </Physics>
                    <Texts />
                </Suspense>
                <Controls />
            </Canvas>
            <GameUI />
            <NextLevelButton to="/level3" />
        </KeyboardControls >
    )
}
