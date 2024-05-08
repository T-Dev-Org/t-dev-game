// [Level1.jsx]
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
import Level1World from "./world/Level1World";
import Texts from "./abstractions/Texts";
// import Collectables from "./collectables/Collectables";
import GameUI from "../../utils/components/layouts/GameUI/GameUI";
import NextLevelButton from "../../utils/components/layouts/GameUI/components/NextLevelButton";
// import ZoneSensors from "./world/ZoneSensors";
import Press from "../../globals/interactables/Button";
import Rat from "../../globals/villains/Rat";
import ZoneSensors from "./world/ZoneSensors";
import { useLifeState } from "../../utils/components/controller/CharacterLife";
import nullMovements from "../../utils/null-movements";

export default function Level1() {
    const map = useMovements();

    const nullMap = nullMovements();

    const lifeState = useLifeState();

    // Estado local para controlar si se muestra la vida o no
    const [displayLife, setDisplayLife] = useState(true);        

    useEffect(() => {
        console.log(`[Level1.jsx] Change on LifeValue, is ${lifeState.value} now`);
  
        // Cambios en mostrar/ocultar elementos dependiendo del valor
        if (lifeState.value <= 0) {
          setDisplayLife(false);
          console.log("Mori");
        } else {
          setDisplayLife(true);
        }
      }, [lifeState.value]); // Depende unicamente de cambios en lifeState.value    

    return (
        <>
        {displayLife &&
                <KeyboardControls map={map} >
                <Canvas
                    shadows={true}
                >
                    <Perf position="top-left" />
                    <Suspense fallback={<Instructive />}>
                        <Lights />
                        <Environments />
                        <Physics debug={true}>
                            <Level1World />
                            <ZoneSensors/>
                            <Ecctrl
                                camInitDis={-2}
                                camMaxDis={-2}
                                maxVelLimit={5}
                                jumpVel={4}
                                position={[0, 4, -5]}
                            >
                                <Avatar />
                            </Ecctrl>
                            <Press position={[0, -0.5, -158]} />
                            <Rat position={[0, 1, -135]} />
                        </Physics>
                        <Texts />
                    </Suspense>
                    <Controls />
                </Canvas>
                <GameUI />
                <NextLevelButton to="/level2" />
            </KeyboardControls>
        }
        {!displayLife}
        </>


    )
}
