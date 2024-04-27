import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Texts from "./abstractions/Text";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import Level1World from "./world/Level1World";
import Controls from "./controls/Controls";
import Avatar from "../../utils/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Instructive from "../../utils/instructive/Instructive";
import Button from "../../utils/components/Button";


export default function Level1() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >
            <Canvas
                shadows={true}
            >
                {/* <Perf position="top-left" /> */}
                <Suspense fallback={<Instructive />}>
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <Level1World />
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            maxVelLimit={5}
                            jumpVel={4}
                            position={[0, 4, -5]}
                        >
                            <Avatar />
                        </Ecctrl>
                    </Physics>
                    <Texts />
                </Suspense>
                <Controls />
            </Canvas>
            <Button to="/level2" />
        </KeyboardControls>

    )
}
