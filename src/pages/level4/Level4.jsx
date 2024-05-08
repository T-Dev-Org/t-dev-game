import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Avatar from "../../utils/avatar/Avatar";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import useMovements from "../../utils/key-movements";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Lights from "../level1/lights/Lights";
import Environments from "./staging/Environments";
import { WorldLevel4 } from "./world/WorldLevel4";
import Controls from "./controls/Controls"
import Text from "./abstractions/Text"
import Instructive from "../../utils/instructive/Instructive";
import Button from "../../utils/components/Button";
import { Model } from "./world/Level4World";

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
                        <WorldLevel4 />
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            maxVelLimit={5}
                            jumpVel={7}
                            position={[0, 9, 115]}
                        >
                            <Avatar />
                        </Ecctrl>
                    </Physics>
                    <Text position={[0, 0, 110]} />
                </Suspense>
                <Controls />
            </Canvas>
            <Button to="/profile" />
        </KeyboardControls>
    )
}
