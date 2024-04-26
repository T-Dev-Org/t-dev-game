import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Avatar from "./characters/avatar/Avatar";
import { KeyboardControls, OrbitControls  } from "@react-three/drei";
import useMovements from "../../utils/key-movements";
import { WorldLevel4 } from "./world/Level4World";

export default function Level4() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >

            <Canvas>
                <ambientLight
                    intensity={0.4}
                />
                <directionalLight
                    intensity={0.6}
                    position={[0, 12, -14]} />
                <OrbitControls makeDefault />
                <Physics>
                    <WorldLevel4 />
                    <Ecctrl
                        camInitDis={-2}
                        camMaxDis={-2}
                        maxVelLimit={3}
                        jumpVel={3}
                        position={[0, 0, 15]}
                    >
                        <Avatar />
                    </Ecctrl>
                </Physics>
            </Canvas>
        </KeyboardControls>
    )
}
