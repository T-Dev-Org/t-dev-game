import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import WorldLevel4 from "./world/WorldLevel4";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

export default function Level4() {
    return (
        <Canvas>
                <Physics>
                    <WorldLevel4/>
                    <Ecctrl
                camInitDis={-2}
                camMaxDis={-2}
                maxVelLimit={5}
                jumpVel={4}
                position={[0, 2, 0]}
            ></Ecctrl>
                </Physics>
        </Canvas>
    )
}
