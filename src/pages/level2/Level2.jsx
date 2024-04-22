import { Perf } from "r3f-perf";
import { KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Text from "./abstractions/Text";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import Level2World from "./world/Level2World";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Instructive from "../../utils/instructive/Instructive";

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
                    <Physics debug={false}>
                        <Level2World />
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            maxVelLimit={4}
                            jumpVel={3}
                            position={[0, 2, 0]}
                        >
                            <Avatar />
                        </Ecctrl>
                    </Physics>
                    <Text
                        size={1}
                        position={[2.5, 3, 8]}
                        rotation={[0, Math.PI / -1.2, 0]}
                        text="Nivel 2" />
                </Suspense>
                <Controls />
            </Canvas>
        </KeyboardControls>

    )
}
