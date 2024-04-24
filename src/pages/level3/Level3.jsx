import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import Level3World from "./world/Level3World";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Html } from "@react-three/drei";
import Instructive from "../../utils/instructive/Instructive";

export default function Level3() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >
            <Canvas
                shadows={true}
            >
                <Suspense fallback={<Instructive/>}>
                <Perf position="top-left" />
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
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
                    <WelcomeText position={[0, 1, -2]} />
                </Suspense>
                <Controls />
            </Canvas>
        </KeyboardControls>

    )
}
