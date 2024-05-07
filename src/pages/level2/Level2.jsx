// [Level2.jsx]
import { Perf } from "r3f-perf";
import { KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Instructive from "../../utils/instructive/Instructive";
import useMovements from "../../utils/key-movements";
import Controls from "./controls/Controls";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Avatar from "../../utils/avatar/Avatar";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import Level2World from "./world/Level2World";
import Level2WorldZone1 from "./world/Level2WorldZone1";
import Texts from "./abstractions/Texts";
import Button from "../../utils/components/Button";
import Collectables from "./collectables/Collectables";
import { useMusic } from "../../components/providers/AudioProvider";
import GameUI from "../../components/layouts/GameUI";

export default function Level2() {
    const map = useMovements();
    const { handlePlayMusic, playSoundEffect } = useMusic();

    handlePlayMusic('mainTheme');


    const reproducirEfecto = () => {
        playSoundEffect('diamondCollect');
    };

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
                        <Level2WorldZone1 />
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
            <Button to="/level3" />
            <GameUI />
        </KeyboardControls >
    )
}
