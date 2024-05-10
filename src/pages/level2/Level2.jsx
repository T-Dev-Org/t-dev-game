// [Level2.jsx]
import { Perf } from "r3f-perf";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
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
import Interactables from "./interactables/Interactables";
import { useLifeState } from "../../utils/components/controller/CharacterLife";
import GameOverScene from "../../utils/components/layouts/GameOverScene/GameOverScene";
import SymbolicSensors from "./world/SymbolicSensors";
import PortalNextWorld from "../../globals/interactables/PortalNextWorld";

export default function Level2() {
    const map = useMovements();
    const lifeState = useLifeState();
    const [displayLife, setDisplayLife] = useState(true);

    useEffect(() => {
        if (lifeState.value <= 0)
            setDisplayLife(false);
        else
            setDisplayLife(true);
    }, [lifeState.value]);

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
                        <SymbolicSensors />
                        <Collectables />
                        <Interactables />
                        <PortalNextWorld
                            position={[28, 1, -15]}
                            nextLevel='/level3'
                        />
                        {displayLife &&
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
                        }
                    </Physics>
                    <Texts />
                </Suspense>
                <Controls />
            </Canvas>
            {!displayLife &&
                <GameOverScene
                    reloadLevel='/level2'
                />}
            <GameUI />
        </KeyboardControls >
    )
}
