
// [Experience.jsx]

import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./world/Lights";
import Environments from "./world/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import WelcomeText from "./world/WelcomeText";
import { Physics } from "@react-three/rapier";
import { Cat } from "./world/cat/Cat";


const Experience = () => {
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls
                target={[0, 1, 0]}
                enableZoom={true}
                enablePan={true}
            />
            <Suspense fallback={null}>
                <Lights />
                <Environments />
                <Physics
                    gravity={[0, -9, 0]}
                    debug={false}
                >
                    <World />
                    <Suspense fallback={null}>
                        <Cat />
                    </Suspense>
                </Physics>
                <WelcomeText position={[0, 1, -2]} />
            </Suspense>
        </>
    )
}

export default Experience;